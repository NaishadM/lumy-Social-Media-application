
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './conversation.css'
function Conversation({Conversation,currentUser}) {
 const [user,setUser]=useState("")
 const PF=process.env.REACT_APP_PUBLIC_FOLDER

 useEffect(() => {
  const friendId=Conversation.member.find((m)=>m!==currentUser._id);

  const getUser = async ()=>{
    try {
      const res= await axios("/users?userId="+friendId);
    
      setUser(res.data)
    } catch (error) {
      console.log(error);

    }


  }
  getUser();
 }, [currentUser,Conversation]);

  return (
    <div className='conversation'>
      <img className='conImage' src={user.profilePic?PF+ user.profilePic:PF+"person/noAvatar.png"} alt=''></img>
      <span className='conName'>{user.username}</span>
    </div>
  );
}

export default Conversation;
