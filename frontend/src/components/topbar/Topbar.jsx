import React from "react";
import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {Link} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext} from "react";
function Topbar() {
  const user = useContext(AuthContext).user;

  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
      <Link to='/' style={{textDecoration:"none"}}>
      <span className="logo">lumy</span>
      </Link>
 
      </div>
      <div className="topbarCenter searchBar">
        <SearchIcon className="searchIcon" />
        <input
          placeholder="search for friend, post or video"
          className="searchInput"
        ></input>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcon">
        <div className="topbarIconItem">
          <PersonIcon />
          <span className="topbarIconBadge">1</span>
        </div>
        <div className="topbarIconItem">
          <ChatIcon />
          <span className="topbarIconBadge">2</span>
        </div>
        <div className="topbarIconItem">
          <NotificationsIcon />
          <span className="topbarIconBadge">1</span>
        </div>
        </div>
        <Link to={`/profile/${user.username}`}>
        <img src={user.profilePic? PF+user.profilePic:PF+"person/noAvatar.png"} className="topbarImg"></img>
        </Link>
       
      </div>
    </div>
  );
}

export default Topbar;
