import React, { useContext, useRef, useState } from "react";
import { useEffect } from "react";
import ChatOnline from "../../components/chatonline/ChatOnline";
import Conversation from "../../components/conversations/Conversation";
import Msg from "../../components/msg/Msg";
import Topbar from "../../components/topbar/Topbar";
import { AuthContext } from "../../context/AuthContext";
import "./message.css";
import axios from "axios";
import { io } from "socket.io-client";
function Message() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socket = useRef();
  const user = useContext(AuthContext).user;
  const scrollRef = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage",data=>{
    setArrivalMessage({
      sender:data.senderId,
      text: data.text,
      createdAt: Date.now(),
    
    
    })
    })
  }, []);

useEffect(() => {
  arrivalMessage &&currentChat?.member.includes(arrivalMessage.sender)&& setMessages((prev)=>[...prev,arrivalMessage])
}, [arrivalMessage,currentChat]);


  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
 
      setOnlineUsers(user.followings.filter(f=>users.some(u=>u.userId===f)))
    });
  }, [user]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("/conversations/" + user._id);
        setConversations(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getConversations();
  }, [user._id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("/messages/" + currentChat?._id);
        setMessages(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMessages();
  }, [currentChat]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: "smooth" });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const msg = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };
    const reciever = currentChat.member.find((member) => member !== user._id);
    socket.current.emit("sendMessage", {
      senderId: user._id,
      recieverId: reciever,
      text: newMessage,
    });
    try {
      const res = await axios.post("/messages", msg);
      setMessages([...messages, res.data]);
      setNewMessage(" ");
    } catch (error) {
      console.log(error);
    }
  };

 
  return (
    <div>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="search for friends" className="chatMenuInput" />
            {conversations.map((c) => (
              <div onClick={() => setCurrentChat(c)}>
                <Conversation Conversation={c} currentUser={user} />
              </div>
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages.map((m) => (
                    <div ref={scrollRef}>
                      <Msg message={m} own={m.sender === user._id} />
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className="chatSubmitButton" onClick={handleSubmit}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <div>
                <span className="noConversationText">
                  open a conversation to
                  <br /> start a chat.
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline onlineUsers={onlineUsers} currentUser={user._id} setCurrentChat={setCurrentChat}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
