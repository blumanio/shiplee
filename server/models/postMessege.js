import mongoose from "mongoose";
const postSchema = mongoose.Schema({
  fname: String,
  lname: String,
  country: String,
  city: String,
  selectedFile: String,
  shipType: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  sendDate: Date,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  num1: Number,
  num2: Number,
});

const PostMessage = mongoose.model("PostMessage", postSchema);
export default PostMessage;
