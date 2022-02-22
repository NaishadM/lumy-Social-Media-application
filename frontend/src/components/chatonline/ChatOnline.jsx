import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import "./chatonline.css";
function ChatOnline({ onlineUsers, currentUser, setCurrentChat }) {
  const [friends, setFriends] = useState([]);
  const [Onlinefriends, setOnlineFriends] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get("/users/friends/" + currentUser);
      setFriends(res.data);
    };
    getFriends();
  }, [currentUser]);
  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
  }, [friends, onlineUsers]);

  const handleClick= async(user)=>{
    try {
      const res=await axios.get(`/conversations/find/${currentUser}/${user._id}`)
      setCurrentChat(res.data)
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div className="chatOnline">
      {Onlinefriends?.map((o) => (
        <div className="chatOnlineFriend" onClick={()=>handleClick(o)}>
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src={
                o.profilePic ? PF + o.profilePic : PF + "person/noAvatar.png"
              }
              alt=""
            />
          </div>
          <div className="chatOnlineBadge"></div>
          <span className="chatOnlineName">{o.username}</span>
        </div>
      ))}
    </div>
  );
}

export default ChatOnline;
