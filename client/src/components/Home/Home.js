import shipping from "../../images/shipping.png";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import useStyles from "../../styles";

function Home() {
  const classes = useStyles();

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          shipping documents easily
        </Typography>
        <img
          className={classes.image}
          src={shipping}
          alt="memories"
          height={60}
        />
      </AppBar>
    </Container>
  );
}

export default Home;
