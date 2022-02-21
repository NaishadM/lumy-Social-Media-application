const mongoose=require('mongoose');
const ConversationSch=new mongoose.Schema({
  member:{
      type:Array,
  }

},{timestamps:true,});
module.exports=mongoose.model("Conversation",ConversationSch)