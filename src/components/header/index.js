import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  header: {

  }
  
})

export default function Header() {

  const classes = useStyles();

  return (
    <AppBar className={classes.header} position="static">
      <Toolbar>
        <Typography variant="h6" >
          Locali
        </Typography>
        <div>
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
          <Link to="/check-in">Single Business Page</Link>
          <Link to="/dashboard">Business Dashboard</Link>
          <Link to="/user">User Profile</Link>

        </div>
        
      </Toolbar>
    </AppBar>
  )
}