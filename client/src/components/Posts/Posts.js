import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { Grid, circularPreogress } from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function createData(number, item, qty, price) {
  return { number, item, qty, price };
}

const rows = [
  createData(1, "Apple", 5, 3),
  createData(2, "Orange", 2, 2),
  createData(3, "Grapes", 3, 1),
  createData(4, "Tomato", 2, 1.6),
  createData(5, "Mango", 1.5, 4),
];

export function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S.No</TableCell>
            <TableCell align="right">Item</TableCell>
            <TableCell align="right">Quantity&nbsp;(kg)</TableCell>
            <TableCell align="right">Price&nbsp;($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.number}>
              <TableCell component="th" scope="row">
                {row.number}
              </TableCell>
              <TableCell align="right">{row.item}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
BasicTable();
const Posts = () => {
  BasicTable();
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  console.log("posts", posts);

  return !posts.length ? (
    <circularPreogress />
  ) : (
    <Grid
      // className={mergeClasses.container}
      container
      alignItems="stretch"
      spacing="3"
    >
      {
        // posts.map((post) => (

        <TableContainer component={Paper} className={classes.container1}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>S.No</TableCell>
                <TableCell align="right">First Name</TableCell>
                <TableCell align="right">Last Name</TableCell>
                <TableCell align="right">City</TableCell>
                <TableCell align="right">shipType</TableCell>

                <TableCell align="right">Country</TableCell>
                <TableCell align="right">Num 1</TableCell>
                <TableCell align="right">Num 2</TableCell>

                <TableCell align="right">send data</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts.map((post) => (
                <TableRow key={post._id}>
                  <TableCell component="th" scope="row">
                    {post._id}
                  </TableCell>
                  <TableCell align="right">{post.fname}</TableCell>
                  <TableCell align="right">{post.lname}</TableCell>
                  <TableCell align="right">{post.city}</TableCell>
                  <TableCell align="right">{post.shipType}</TableCell>

                  <TableCell align="right">{post.country}</TableCell>
                  <TableCell align="right">{post.num1}</TableCell>
                  <TableCell align="right">{post.num2}</TableCell>

                  <TableCell align="right">{post.sendDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        // <Grid key={post._id} item xs={12} sm={12}>
        //   <Post post={post} />
        // </Grid>
        // )
        // )
      }
    </Grid>
  );
};
export default Posts;
