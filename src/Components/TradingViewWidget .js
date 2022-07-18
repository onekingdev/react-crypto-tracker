import {useEffect, useState} from 'react'
import {
  makeStyles,
  CircularProgress,
} from "@material-ui/core";


const TradingViewWidget = ({symbol}) => {
    const CONTAINER_ID = 'tradingview-widget';
    const SCRIPT_ID = 'tradingview-widget-script';
  
    const containerId = `${CONTAINER_ID}_${Math.random()}`;
    const config ={
        symbol: `BINANCE:${symbol.toUpperCase()}USD`,
        container_id: containerId,
        theme: 'Dark',
        autosize: true,
        withdateranges: true,
        hide_side_toolbar: false,
        timezone: "exchange",
        interval: "D",
        currencies: 'INR'
    }
  
    useEffect(()=> {
      appendScript(initWidget)
      
    }, [])
  
    const initWidget = () => {
        if (typeof TradingView === 'undefined' || !document.getElementById(containerId)) return false;
        new window.TradingView.widget(config)
        return true;
    }
    const getScriptElement = () => document.getElementById(SCRIPT_ID);
  
    const scriptExists = () => getScriptElement() !== null;
  
    const updateOnloadListener = (onload) => {
      const script = this.getScriptElement();
      const oldOnload = script.onload;
      return script.onload = () => {
        oldOnload();
        onload();
      };
    };
  
    const appendScript = (onload) => {
      if (scriptExists()) {
        /* global TradingView */
        if (typeof TradingView === 'undefined') {
          updateOnloadListener(onload);
          return;
        }
        onload();
        return;
      }
      const script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://s3.tradingview.com/tv.js';
      script.onload = onload;
      document.getElementsByTagName('head')[0].appendChild(script);
    };
    
    /*styling chart */
    const useStyles = makeStyles((theme) => ({
      container: {
        width: "100%",
        height: "100%",
        [theme.breakpoints.down("md")]: {
          width: "100%",
          height: "90vh",
        },
      },
    }));
    const classes = useStyles();
    
  
    return <article id={containerId} className={classes.container} />
  }

export {TradingViewWidget};