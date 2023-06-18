import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({

  title: {
    flexGrow: 1,
    fontFamily: 'Montserrat, sans-serif',
  },
}));

const Navbar = () => {
  
  const classes = useStyles();
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup');
    console.log("signup");
  };
  const handleLogin = () => {
    navigate('/login');
    console.log("login");
  };

  return (
    <AppBar position="static" style={{backgroundColor: '#ffb300', color: 'black'}}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          FoodieFlix
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit">Orders</Button>
        <Button color="inherit" onClick={handleSignUpClick}>
          SignUp
        </Button>
        <Button color="inherit" onClick={handleLogin}>Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
