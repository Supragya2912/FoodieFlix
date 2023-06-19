import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 'bold',
  },
  menuButtons: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  menuButtonsRight: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup');
    console.log('signup');
  };

  const handleLogin = () => {
    navigate('/login');
    console.log('login');
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate('/login');
  };


  console.log('Front -end',localStorage.getItem('authToken'));
  return (


    <AppBar position="static" style={{ backgroundColor: '#ffb300', color: 'black' }}>
      <Toolbar>
        <div className={classes.menuButtons}>
          <img src="https://img.icons8.com/ios-filled/50/000000/food-and-wine.png" alt="logo" />
          <Typography variant="h6" className={classes.title}>
            FoodieFlix
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>

          { 
              (localStorage.getItem('authToken')) ? 
              <Button color="inherit">Orders</Button>: ""
          }
         
        </div>
        {
          (!localStorage.getItem('authToken')) ?
          <div className={classes.menuButtonsRight}>
          <Button color="inherit" onClick={handleSignUpClick}>
            SignUp
          </Button>
          <Button color="inherit" onClick={handleLogin}>
            Login
          </Button>
        </div>
        :
         <div className={classes.menuButtonsRight}>
          <Button color="inherit">Cart</Button>
          <Button color="inherit" onClick={handleLogout}>LogOut</Button>
         </div>
        }
       
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
