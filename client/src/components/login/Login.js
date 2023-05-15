import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
    padding: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
}));

const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post("http://localhost:6969/Login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      navigate.push("/");
    });
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h2" gutterBottom>
        Login To Your Account
      </Typography>
      <form className={classes.form} onSubmit={handleLogin}>
        <TextField
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          value={user.email}
          onChange={handleChange}
          required
          autoFocus
        />
        <TextField
          id="password"
          name="password"
          type="password"
          label="Password"
          variant="outlined"
          value={user.password}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
