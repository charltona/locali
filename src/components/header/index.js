import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    backgroundColor: "orange"
  }
})

export default function Header() {

  const classes = useStyles();

  return (
    <AppBar className={classes.header}>
      <Toolbar>
        <Typography variant="h6" >
          Locali
        </Typography>
      </Toolbar>
    </AppBar>
  )
}