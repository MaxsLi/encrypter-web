import React from "react";
import {Grid, CircularProgress} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import TextLoop from "react-text-loop";


const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    msTransform: "translate(-50%, -50%)",
  },
  loadingText: {
    position: "absolute !important",
    top: "150%",
    left: "-80%",
    width: "200px",
  },
}));

const Loading = (props) => {
  const loopText = [
    "Initializing server...",
    "Establishing connection...",
    "Retrieving server status...",
    "Waiting for response...",
    "This is taking sometime...",
    "Still trying to connect...",
    "Server is not responding...",
    "Please come back later.",
  ];
  const loopInterval = [
    3000, 4000, 5000, 6000, 6000, 7000, 10000, 10000000
  ];
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <CircularProgress size={60}/>
      <TextLoop className={classes.loadingText} children={loopText} interval={loopInterval}/>
    </Grid>
  )
};

export default Loading;
