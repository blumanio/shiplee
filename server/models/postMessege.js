import mongoose from "mongoose";
const postSchema = mongoose.Schema({
  fname: String,
  lname: String,
  country: String,
  city: String,
  selectedFile: String,
  shipType:String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);
export default PostMessage;
