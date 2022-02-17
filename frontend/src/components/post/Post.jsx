import React, { useState,useEffect, useContext } from "react";
import "./post.css";
import { MoreVert } from "@mui/icons-material";
import {format} from 'timeago.js'
import axios from "axios";
import {Link} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Post({post}) {
  const [ Users, setUser ] = useState({});
const[like,setLike]=useState(post.likes.length)
const PF=process.env.REACT_APP_PUBLIC_FOLDER
const [isLiked, setisLiked] = useState(false);
const user = useContext(AuthContext).user;

const likeHandler=()=>{
  try {
    axios.put("/posts/"+post._id+"/like",{userId:user._id})
    
  } catch (error) {
    
  }
setLike(isLiked? like-1:like+1)
setisLiked(!isLiked)

}

useEffect(()=>{
  setisLiked(post.likes.includes(user._id))
},[user._id,post.likes])

useEffect( () => {

  const fetchUser=async()=>{const res=await  axios.get(`/users/?userId=${post.userId}`);
  setUser(res.data)}
  fetchUser();
}, [post.userId]);
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
          <Link to={`profile/${Users.username}`}>
            <img
              className="postProfileImg"
              src={Users.profilePic? PF+Users.profilePic: PF+"person/noAvatar.png"}
              alt=""
            ></img>
            </Link>
            <span className="postUsername">{Users.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img className="postImg" src={PF+"post/"+post.img}></img>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
          <img className="likeIcon" src={`${PF}/like.png`} onClick={likeHandler}></img>
          <img className="likeIcon" src={`${PF}/heart.png`} onClick={likeHandler}></img>
          <span className="likeCounter">{like}</span>
          </div>
          <div className="postBottomRight">
          <span className="postCommentText">{post.comment} comments</span>
          
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Post;
