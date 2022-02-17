const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");
//create a post
router.post("/", async (req, res) => {
  const newpost = new Post(req.body);
  try {
    const savepost = await newpost.save();
    res.status(200).json(savepost);
  } catch (err) {
    res.status(500).json(err);
  }
});
//update a post
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    console.log(post.userId);
    if (post.userId === req.body.userId) {
      await Post.updateOne({ $set: req.body });
      res.status(200).json("post has been updated");
    } else {
      res.status(403).json("you can update only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//delete a post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    console.log(post.userId);
    if (post.userId === req.body.userId) {
      await Post.deleteOne();
      res.status(200).json("post has been deleted");
    } else {
      res.status(403).json("you cannot delete this post");
    }
  } catch (err) {
    res.status(500).json(err); 
  }
});
//like a post
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("post has been liked");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("post has been disliked");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//get a post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});
//get timeline posts
router.get("/timeline/:userId", async (req, res) => {
  let postArray = [];
  try {
    const curruser = await User.findById(req.params.userId);
    const userposts = await Post.find({ userId: curruser._id });
    const friendsposts = await Promise.all(
      curruser.followings.map((friendId) => {
       return Post.find({ userId: friendId });
      })
    );
    res.status(200).json(userposts.concat(...friendsposts))
  } catch (err) {
    res.status(500).json(err);
  }
});

//get current users all posts
router.get("/profile/:username", async (req, res) => {
  
  try {
    const user= await User.findOne({username:req.params.username})
   const posts= await Post.find({userId:user._id});
   
   res.status(200).json(posts)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
