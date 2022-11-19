import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { Grid, circularPreogress } from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";

const Posts = () => {
  // const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  console.log("posts", posts);
  return !posts.length ? (
    <circularPreogress />
  ) : (
    <Grid
      className={mergeClasses.container}
      container
      alignItems="stretch"
      spacing="3"
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};
export default Posts;
