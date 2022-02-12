import React from 'react';
import './friend.css'
function Friend({user}) {
  return (

    <li className="sidebarFriend">
    <img className="sidebarFriendImg" src={user.profilePicture}></img>
    <span className="sidebarFriendName">{user.username}</span>
  </li>
    
  );
}

export default Friend;
