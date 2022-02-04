const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
//update user
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    //updating password
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        res.status(500).json(err);
      }
    }
    try{
        const user=await User.findByIdAndUpdate(req.params.id,{
            $set:req.body,
        })
        res.status(200).json("user updated successfully")
    }catch(err){
        res.status(500).json(err)
    }
 
  } else {
    res.status(403).json("you can update only your account");
  }
});
//delete user account
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
      //updating password
    
      try{
          await User.findByIdAndDelete(req.params.id)
          return res.status(200).json("account has been deleted successfully")
      }catch(err){
          res.status(500).json(err)
      }
   
    } else {
      res.status(403).json("you can delete only your account");
    }
  });
//get a user
router.get("/:id",async(req,res)=>{
try{
   const user=await User.findById(req.params.id);
   res.status(200).json(user)
}catch(err){
          res.status(500).json(err)
      }

})
//folow a user
router.put("/:id/follow",async(req,res)=>{
    if (req.body.userId !== req.params.id) {
    try{
       const user=await User.findById(req.params.id);
       const curruser=await User.findById(req.body.userId);
       if(!user.followers.includes(req.body.userId))
       { 
        await user.updateOne({$push:{followers:req.body.userId}})
        await curruser.updateOne({$push:{followings:req.params.id}})
        res.status(200).json("user has been followed")
       }else{
        res.status(403).json("you already follow this user")
       }
      
    }catch(err){
              res.status(500).json(err)
          }
    
    } else {
        res.status(403).json("you can't follow yourself");
      }

})
//unfollow a user
router.put("/:id/unfollow",async(req,res)=>{
    if (req.body.userId !== req.params.id) {
    try{
        const user=await User.findById(req.params.id);
        const curruser=await User.findById(req.body.userId);
       if(user.followers.includes(req.body.userId))
       { 
        await user.updateOne({$pull:{followers:req.body.userId}})
        await curruser.updateOne({$pull:{followings:req.params.id}})
        res.status(200).json("user has been unfollowed")
       }else{
        res.status(403).json("you don't follow this user")
       }
      
    }catch(err){
              res.status(500).json(err)
          }
    
    } else {
        res.status(403).json("you can't unfollow yourself");
      }

})
module.exports = router;