import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import Caurosel from "./Caurosel";

const useStyle = makeStyles(() => ({
  banner: {
    backgroundImage: "url(./banner2.jpg)",
  },
  bannerContext: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
}));
const Banner = () => {
  const classes = useStyle();
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContext}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Crypto hunter
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTranform: "capitalize",
              fontFamily: "Montserrant",
            }}
          >
            Gell all info regrading your favorite crypto currency
          </Typography>
        </div>
        <Caurosel />
      </Container>
    </div>
  );
};

export default Banner;
