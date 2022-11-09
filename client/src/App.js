import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import Posts from "./components/Posts/Posts";
import Navbar from "./components/Header/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Form from "./components/Form/Form";
import Home from "./components/Home/Home";

import useStyles from "./styles";
import { getPosts } from "./actions/posts";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <>
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
      <Container maxwidth="lg">
        <Grow in>
          <Container>
            <Grid
              container
              justifyContent="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                {/* <Posts /> */}
              </Grid>
              {/* <Grid item xs={12} sm={4}> */}
              {/* <Form /> */}
              {/* </Grid> */}
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  );
};
export default App;
