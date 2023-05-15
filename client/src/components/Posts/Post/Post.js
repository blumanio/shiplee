import React from "react";
import useStyles from "./styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

// import DeleteIcon from "@material-ui/icons/Delete";
import RoomIcon from "@material-ui/icons/Room";
import More from "@material-ui/icons";
import moment from "moment";
const Post = ({ post }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      {/* <CardMedia
        className={classes.media}
        image={postMessage.selectedFile}
        title={Post.title}
      /> */}
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay}>
        <Button style={{ color: "white" }} size="small" onClick={() => {}}>
          <RoomIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        {/* <Typography variant="body2" color="textSecondary"> */}
        {/* {post.tags.map((tag) => `#${tag} `)} */}
        {/* </Typography> */}
        <CardContent>
          <Typography className={classes.title} variant="h5" gutterBottem>
            {post.country}
          </Typography>
          <Typography className={classes.title} variant="h5" gutterBottem>
            {post.city}
          </Typography>
          <Typography className={classes.title} variant="h5" gutterBottem>
            {post.fname}
          </Typography>
          <Typography className={classes.title} variant="h5" gutterBottem>
            {post.lname}
          </Typography>
          <Typography className={classes.title} variant="h5" gutterBottem>
            {post.shipType}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary" onClick={() => {}}>
            <ThumbUpAltIcon fontSize="small" />
            Delete
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};
export default Post;
