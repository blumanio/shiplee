// import { Mongoose } from "mongoose";
import PostMessage from "../models/postMessege.js";

export const getPosts = async (req, res) => {
  // res.send("THIS WORK");
  try {
    const postMesseges = await PostMessage.find();
    console.log(postMesseges);
    res.status(200).json(postMesseges);
    // console.log(postMesseges)
  } catch (error) {
    res.status(404).json({ message: error.message });
    console.log(error);
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id");
  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {new: true,});
};
