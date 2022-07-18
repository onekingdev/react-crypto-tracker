import React, { useState, useEffect } from "react";
import { CryptoState } from "../CryptoContext";
import {
  createTheme,
  ThemeProvider,
  makeStyles,
  CircularProgress,
} from "@material-ui/core";
import { TradingViewWidget } from "./TradingViewWidget ";


const CoinInfo = ({ coin }) => {
  const { currency, symbol } = CryptoState();
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  const useStyles = makeStyles((theme) => ({
    container: {
      width: "75%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 25,
      padding: 20,
      paddingTop: 10,
      paddingBottom: 10,
      [theme.breakpoints.down("md")]: {
        width: "100%",
        marginTop: 0,
        padding: 20,
        paddingTop: 0,
      },
    },
  }));
  const classes = useStyles();
  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.container}>
        {!currency ? (
          <CircularProgress
            style={{ color: "gold" }}
            size={250}
            thickness={1}
          />
        ) : (
          <>
          <TradingViewWidget symbol={coin.symbol} />
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default CoinInfo;