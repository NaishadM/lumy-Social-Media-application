import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.css";
function Profile() {
  return (
    <>
      <Topbar />
      <div className="Profile">
    
       
        <div className="profileRight">
          <div className="profileRightTop"><div className="profileCover">
          <img className="profileCoverImg" src="assets/post/3.jpeg"></img>
          <img className="profileUserImg" src="assets/person/7.jpeg"></img>
          </div>
     <div className="profileInfo">
     <h4  className="profileInfoName">naishad</h4>
     <span className="profileInfoDesc">ngdgg ffdhy jujhhkh </span>
     </div>
          </div>
          <div className="profileRightBottom">
          
            <Feed />
            <Rightbar  profile />
          </div>
        </div>
        <Leftbar />
      </div>
    </>
  );
}

export default Profile;
