import { React, useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";

import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
function Feed({username}) {
  const [ Posts, setPosts ] = useState([]);
  const user = useContext(AuthContext).user;
  useEffect(() => { 
    const fetchPost = async () => {
      const res = username ? await axios.get("/posts/profile/"+username) :
       await axios.get("posts/timeline/"+user._id);
      setPosts(res.data.sort((p1,p2)=>{
        return new Date(p2.createdAt)-new Date(p1.createdAt);
      }));
       
    };
    fetchPost();
  }, [username,user._id]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!username ||username===user.username) && <Share />}
        {
          Posts.map((p) => (
            <Post key={p._id} post={p} />
          ))
        }
      </div>
    </div>
  );
}

export default Feed;
