import React, { useState } from "react";
import {
  TextField,
  Typography,
  Paper,
  Button,
  Select,
  MenuItem,
  Grid,
  Container,
} from "@mui/material";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
// import DateAdapter from '@material-ui/core/AdapterMoment';
import { createPost } from "../../actions/posts";
import useStyles from "./styles";
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
  const [selectedData, setSelectedData] = useState(null);
  const [postData, setPostData] = useState({
    fname: "",
    lname: "",
    country: "",
    city: "",
    shipType: "",
    selectedFile: "",
    sendDate: "",
  });
  console.log("postData", postData);
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e?.preventDefault();
    dispatch(createPost(postData));
  };
  const clear = () => {};

  return (
    <Container>
      <Grid item xs={12} sm={7}>
        <Paper className={classes.paper}>
          <form
            autoCapitalize="off"
            noValidate
            className={`${classes.form} ${classes.root}`}
            onSubmit={handleSubmit}
          >
            <Typography variant="h6"> shipping easy for everyone </Typography>
            <TextField
              name="First Name"
              variant="outlined"
              label="First Name"
              fullWidth
              value={postData.fname}
              onChange={(e) =>
                setPostData({ ...postData, fname: e.target.value })
              }
            />
            <TextField
              name="Last Name"
              variant="outlined"
              label="Last Name"
              fullWidth
              value={postData.lname}
              onChange={(e) =>
                setPostData({ ...postData, lname: e.target.value })
              }
            />
            <TextField
              name="Country"
              variant="outlined"
              label="Country"
              fullWidth
              value={postData.country}
              onChange={(e) =>
                setPostData({ ...postData, country: e.target.value })
              }
            />
            <TextField
              name="num1"
              variant="outlined"
              label="num1"
              fullWidth
              value={postData.num1}
              onChange={(e) =>
                setPostData({ ...postData, num1: e.target.value })
              }
            />
            <TextField
              name="num2"
              variant="outlined"
              label="num2"
              fullWidth
              value={postData.num2}
              onChange={(e) =>
                setPostData({ ...postData, num2: e.target.value })
              }
            />
            <TextField
              name="City"
              variant="outlined"
              label="City"
              fullWidth
              value={postData.city}
              onChange={(e) =>
                setPostData({ ...postData, city: e.target.value })
              }
            />
            <DatePicker
              variant="outlined"
              label="date"
              fullWidth
              selected={postData.sendDate}
              onChange={(date) => {
                setPostData({ ...postData, sendDate: date });
              }}
            />
            <Select
              name="tags"
              variant="outlined"
              label="Tags"
              fullWidth
              value={postData.shipType}
              onChange={(e) =>
                setPostData({ ...postData, shipType: e.target.value })
              }
            >
              <MenuItem value={"Document"}>Document</MenuItem>
              <MenuItem value={"Pharmacy"}>Pharmacy</MenuItem>
              <MenuItem value={"Package"}>Package</MenuItem>
            </Select>
            {/* <div className={classes.fileInput}>
          <FileBase
            type="file"
            multipe={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div> */}
            <Button
              className={classes.ButtonSubmit}
              variant="contained"
              color="primary"
              type="submit"
              size="large"
              fullWidth
            >
              {" "}
              submit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={clear}
              size="small"
              fullWidth
            >
              {" "}
              clear
            </Button>
          </form>
        </Paper>
      </Grid>
    </Container>
  );
};
export default Form;
