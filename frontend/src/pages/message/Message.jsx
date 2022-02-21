import React from "react";
import ChatOnline from "../../components/chatonline/ChatOnline";
import Conversation from "../../components/conversations/Conversation";
import Msg from "../../components/msg/Msg";
import Topbar from "../../components/topbar/Topbar";
import "./message.css";
function Message() {
  return (
    <div>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
          <input placeholder="search for friends" className="chatMenuInput"/>
          <Conversation/>
          <Conversation/>
          <Conversation/>
          <Conversation/>
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
          <div className="chatBoxTop">
          <Msg/>
          <Msg own={true}/>
          <Msg/>
          <Msg/>
          <Msg own={true}/>
          <Msg/>
          <Msg/>
          <Msg own={true}/>
          <Msg/>
          <Msg/>
          <Msg own={true}/>
          <Msg/>
          </div>
          <div className="chatBoxBottom">
          <textarea placeholder="write something..." className="chatMsgInput"></textarea>
          <button className="chatSubmit">send</button>
          </div>
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
          
          <ChatOnline/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
