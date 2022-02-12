import React from "react";
import "./share.css";
import { PermMediaOutlined,Label,Room,EmojiEmotions } from "@mui/icons-material";
function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src="/assets/person/1.jpeg"
            alt=""
          ></img>
          <input
            className="shareInput"
            placeholder="what's in your mind lumy?"
          ></input>
        </div>
        <hr className="shareHr"></hr>
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMediaOutlined htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">photo/video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>

          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
