const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Post = require("../models/Posts");
const User = require("../models/User");
const fetchuser = require("../middleware/fetchuser");
require("dotenv").config();

router.get("/fetchppost", async (req, res) => {
  try {
    const posts = await Post.find({ isPublic: true });
    res.json(posts);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

router.get("/fetchuserpost", fetchuser, async (req, res) => {
  try {
    const posts = await Post.find({ user: req.user.id });
    res.json(posts);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

router.post("/addpost", fetchuser, async (req, res) => {
  try {
    const post = new Post({
      backgroundImg: req.body.backgroundImg,
      pict: req.body.pict,
      title: req.body.title,
      description: req.body.description,
      isPublic: req.body.isPublic,
      user: req.user.id,
    });
    const savepost = await post.save();
    res.json(savepost);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
});

router.put("/Updatepost/:id", fetchuser, async (req, res) => {
  const { backgroundImg, pict, title, description, isPublic } = req.body;
  const newpost = {};
  try {
    if (title) {
      newpost.title = title;
    }
    if (backgroundImg) {
      newpost.backgroundImg = backgroundImg;
    }
    if (pict) {
      newpost.pict = pict;
    }
    if (description) {
      newpost.description = description;
    }
    if (isPublic) {
      newpost.isPublic = isPublic;
    }

    let post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).send("No such post available");
    }
    if (post.user.toString() !== req.user.id) {
      return res.status(400).send("Not Allowed");
    }
    post = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: newpost },
      { new: true }
    );
    res.json({ post });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
});

router.delete("/Deletepost/:id", fetchuser, async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).send("No such post available");
    }
    if (post.user.toString() !== req.user.id) {
      return res.status(400).send("Not Allowed");
    }
    post = await Post.findByIdAndDelete(req.params.id);
    res.json({ Success: "Post Deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ error: error.message });
  }
});

router.put("/likedpost/:id", fetchuser, async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).send("No such post is present");
    }
    let userc = await User.findById(req.user.id);
    let username = userc.name;
    let con = true;
    let count = 0;
    let usname = [];
    post.like.map((likess) =>{
      if(likess.user_id == req.user.id){
        con = false;
        count = count+1;
        usname.push(likess.user_id);
      }
      else{
        usname.push(likess.user_id);
        count = count+1;
      }
    });
    if(con==true){
      const lk = {
        username:  username,
        user_id: req.user.id,
      };
      usname.push(lk.user_id);
      post = await Post.findByIdAndUpdate(
        req.params.id,
        { $push: {like: lk} },
        { new: true }
      );
      res.json({ "totalLikes": count+1,"userlist": usname });
    }else{
      res.json({ "totalLikes": count,"userlist": usname  })
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
});

router.put("/commentpost/:id", fetchuser, async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).send("No such post is present");
    }
    let userc = await User.findById(req.user.id);
    let username = userc.name;

    const comm = {
      body: req.body.comment,
      username,
      user: req.user.id,
    };

    post = await Post.findByIdAndUpdate(
      req.params.id,
      { $push: { comments: comm } },
      { new: true }
    );
    res.json({ post });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
