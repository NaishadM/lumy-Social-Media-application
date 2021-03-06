import React, { useState, useEffect ,useContext} from "react";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import {useParams} from 'react-router'
import axios from "axios";
import "./profile.css";
import { AuthContext } from "../../context/AuthContext";
function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [Users, setUser] = useState({});
  const user = useContext(AuthContext).user;
  const username=useParams().username
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users/?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, []);

  console.log(user)
  console.log(Users);
  return (
    <div>
      <Topbar />
      <div className="Profile">
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src={Users.coverPic? PF+ Users.coverPic: PF+"person/noCover.png"}></img>
              <img className="profileUserImg" src={Users.profilePic? PF+ Users.profilePic: PF+"person/noAvatar.png"}></img>
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{Users.username}</h4>
              <span className="profileInfoDesc">{Users.desc}</span>
            </div>
          </div>
         
          <div className="profileRightBottom">
          <Leftbar />
            <Feed username={username} />
            <Rightbar user={Users} />
            
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Profile;
