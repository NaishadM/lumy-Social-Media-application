import "./rightbar.css";
import React from "react";
import { Users } from "../dummyData";
import Online from "../online/Online";
function Rightbar({ profile }) {
  const HomeRightBar = () => {
    return (
      <div>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt=""></img>
          <span className="birthdayText">
            <b>peacock</b> and <b>1 other friends</b> have a birthday today
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt=""></img>
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
          <span className="rightbarInfoValue">newyork</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">from: </span>
          <span className="rightbarInfoValue">tirupur</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship: </span>
          <span className="rightbarInfoValue">waiting for </span>
        </div>

        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/person/1.jpeg"
              className="rightbarFollowingImg"
            ></img>
            <span className="rightbarFollowingName"> kaaaa</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/1.jpeg"
              className="rightbarFollowingImg"
            ></img>
            <span className="rightbarFollowingName"> kaaaa</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/3.jpeg"
              className="rightbarFollowingImg"
            ></img>
            <span className="rightbarFollowingName"> kaaaa</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/2.jpeg"
              className="rightbarFollowingImg"
            ></img>
            <span className="rightbarFollowingName"> kaaaa</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/5.jpeg"
              className="rightbarFollowingImg"
            ></img>
            <span className="rightbarFollowingName"> kaaaa</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/2.jpeg"
              className="rightbarFollowingImg"
            ></img>
            <span className="rightbarFollowingName"> kaaaa</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/2.jpeg"
              className="rightbarFollowingImg"
            ></img>
            <span className="rightbarFollowingName"> kaaaa</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/4.jpeg"
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
       {profile? <ProfileRightBar />:<HomeRightBar/>}
      </div>
    </div>
  );
}

export default Rightbar;
