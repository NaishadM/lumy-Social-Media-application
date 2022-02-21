import React from 'react';
import './msg.css';
import {format} from 'timeago.js'
function Msg({message,own}) {

  return (
    <div className={own?'msg own':'msg'}>
      <div className='msgTop'>
      <img className='msgImage' src='https://static.remove.bg/remove-bg-web/bf16d3e558914c4f5e6b6bc5163ed745ee2977db/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png' alt=''></img>
      <p className='msgText'>{message.text}</p>
      </div>
      <div className='msgBottom'>
      {format(message.createdAt)}
      </div>
    </div>
  );
}

export default Msg;
