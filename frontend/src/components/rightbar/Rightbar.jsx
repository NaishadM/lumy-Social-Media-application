import "./rightbar.css";
import React from "react";
import { Users } from "../dummyData";
import Online from "../online/Online";
function Rightbar({ user }) {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER
  const HomeRightBar = () => {
    return (
      <div>
        <div className="birthdayContainer">
          <img className="birthdayImg" src={`${PF}gift.png`}></img>
          <span className="birthdayText">
            <b>peacock</b> and <b>1 other friends</b> have a birthday today
          </span>
        </div>
        <img className="rightbarAd" src={`${PF}ad.png `}></img>
        <h4 className="rightbarTitle">online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    );
  };
  const ProfileRightBar = () => {
    return (
      <div>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo"></div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">city: </span>
          <span className="rightbarInfoValue">{user.city}</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">from: </span>
          <span className="rightbarInfoValue">{user.from}</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship: </span>
          <span className="rightbarInfoValue">{user.relationship===1 ?"Single": user.relationship===2?"Married" :user.relationship===3?"No comments":" "}</span>
        </div>

        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/1.jpeg`}
              className="rightbarFollowingImg"
            ></img>
            <span className="rightbarFollowingName"> kaaaa</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/1.jpeg`}
              className="rightbarFollowingImg"
            ></img>
            <span className="rightbarFollowingName"> kaaaa</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/3.jpeg`}
              className="rightbarFollowingImg"
            ></img>
            <span className="rightbarFollowingName"> kaaaa</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/2.jpeg`}
              className="rightbarFollowingImg"
            ></img>
            <span className="rightbarFollowingName"> kaaaa</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/5.jpeg`}
              className="rightbarFollowingImg"
            ></img>
            <span className="rightbarFollowingName"> kaaaa</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/2.jpeg`}
              className="rightbarFollowingImg"
            ></img>
            <span className="rightbarFollowingName"> kaaaa</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/2.jpeg`}
              className="rightbarFollowingImg"
            ></img>
            <span className="rightbarFollowingName"> kaaaa</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/4.jpeg`}
              className="rightbarFollowingImg"
            ></img>
            <span className="rightbarFollowingName"> kaaaa</span>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
       {user? <ProfileRightBar />:<HomeRightBar/>}
      </div>
    </div>
  );
}

export default Rightbar;
