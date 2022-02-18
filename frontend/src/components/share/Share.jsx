import React,{useContext, useRef, useState} from "react";
import "./share.css";
import { PermMediaOutlined,Label,Room,EmojiEmotions, LineAxisOutlined } from "@mui/icons-material";
import { AuthContext } from "../../context/AuthContext";
import axios from 'axios'
function Share() {
   const user = useContext(AuthContext).user;
   const PF=process.env.REACT_APP_PUBLIC_FOLDER;
   const desc= useRef();
   const [file,setFile]=useState(null);

   const submitHandler= async(e)=>{
e.preventDefault()
const newPost={
userId:user._id,
desc:desc.current.value
}
if(file){
  const data=new FormData();
  const d=new Date();
  const fileName=d.getDate()+d.getHours()+file.name;
  data.append("file",file);
  data.append("name",fileName);
  newPost.img=fileName

try {
  await axios.post("/upload",data)
} catch (error) {
  console.log(error);
}

}

try {

await axios.post("/posts",newPost);
window.location.reload();
} catch (error) {
   
}

   }
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={user.profilePic?PF+user.profilePic:PF+"person/noAvatar.png"}
            alt=""
          ></img>
          <input
            className="shareInput"
            placeholder={"what's in your mind "+user.username+"?"}
            ref={desc}
          ></input>
        </div>
        <hr className="shareHr"></hr>
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMediaOutlined htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">photo/video</span>
              <input style={{display:"none"}} type="file" id="file" accept=".png,.jpeg,.jpg" onChange={(e)=>setFile(e.target.files[0])}></input>
            </label>
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
          <button className="shareButton" type="submit">Share</button>
        </form>
      </div>
    </div>
  );
}

export default Share;
