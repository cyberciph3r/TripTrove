import { AppBar, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

function Header() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Typography className={classes.text}>TripTrove</Typography>
      </AppBar>
    </>
  );
}

export default Header;
