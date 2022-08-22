import React, {useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import logoIcon from '../../Assets/logoIcon.png'
import { Link, NavLink } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';

import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles({
    typoContent: {
        textDecoration: 'none',
        color: 'black',
        display: 'block',
        fontWeight: 600,
        padding: '10px',
        paddingLeft: '30px',
        paddingRight: '30px',
    },
    activeStyle:{
        textDecoration: 'none',
        color: 'white',
        display: 'block',
        backgroundColor:"#7A3293",
        fontWeight: 600,
        padding: '10px',
        paddingLeft: '30px',
        paddingRight: '30px'

    },
    link:{
        textDecoration: 'none',
    }
});


const NavBar = () => {
    const classes = useStyles();

    const {
        user,
        isAuthenticated,
        loginWithRedirect,
        logout,
    } = useAuth0();

    const [url, setUrl] = useState("/");

    useEffect(() => {
        if(user?.family_name==="JobProvider"){
            setUrl("/dashboard/jobprovider/home")
        }
        else if(user?.family_name==="JobSeeker"){
            setUrl("/dashboard/jobseeker/home")
        }
        else if(user?.family_name==="ManPower"){
            setUrl("/dashboard/manpower/home")
        }
        else if(user?.family_name==="Admin"){
            setUrl("/dashboard/admin/home")
        }else{
            setUrl("/")
        }
    });


    return (
        <AppBar position="static" color="transparent">
            <Container maxWidth="xl" >
                <Toolbar disableGutters>
                    <Avatar alt="logoIcon" src={logoIcon} sx={{ display: { xs: 'none', md: 'flex' }, ml:2, mr:1 ,width: 56, height: 56  }}/>
                    <Typography
                        variant="h5"
                        noWrap
                        color="primary"
                        sx={{
                            mr: 10,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 900,
                            letterSpacing: '.3rem',
                            textDecoration: 'none',
                        }}
                    >
                        FlashWork
                    </Typography>


                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}} mr="20">

                        <NavLink to="/" className={({ isActive }) =>
                            isActive ? classes.activeStyle : classes.typoContent
                        }>
                            <Typography sx={{ my: 2,fontWeight: 600 }}>Home</Typography>
                        </NavLink>

                        <NavLink to="/workers" className={({ isActive }) =>
                            isActive ? classes.activeStyle : classes.typoContent
                        }>
                            <Typography sx={{ my: 2,fontWeight: 600 }}>Workers</Typography>
                        </NavLink>
                        <NavLink to="/jobs" className={({ isActive }) =>
                            isActive ? classes.activeStyle : classes.typoContent
                        }>
                            <Typography sx={{ my: 2,fontWeight: 600 }}>Jobs</Typography>
                        </NavLink>
                        <NavLink to="/about" className={({ isActive }) =>
                            isActive ? classes.activeStyle : classes.typoContent
                        }>
                            <Typography sx={{ my: 2,fontWeight: 600 }}>About</Typography>
                        </NavLink>
                        <NavLink to="/contactUs" className={({ isActive }) =>
                            isActive ? classes.activeStyle : classes.typoContent
                        }>
                            <Typography sx={{ my: 2,fontWeight: 600 }}>Contact Us</Typography>
                        </NavLink>

                    </Box>

                    {isAuthenticated && (
                        <Box sx={{ display: { xs: 'none', md: 'flex',gap:10 } }}>
                            <IconButton
                                size="large"
                                color="inherit"
                            >
                                <Badge badgeContent={17} color="error">
                                    <NotificationsIcon fontSize="inherit"/>
                                </Badge>
                            </IconButton>

                            <IconButton size="large" color="inherit" onClick={() => {
                                logout({ returnTo: window.location.origin });
                            }}>
                                <Badge  color="error">
                                    <LogoutIcon fontSize="inherit"/>
                                </Badge>
                            </IconButton>

                            <Tooltip title="Open settings">
                                <Link to={url} >
                                    <IconButton >
                                        <Avatar alt={user?.nickname} src={user?.picture} />
                                    </IconButton>
                                </Link>
                            </Tooltip>
                        </Box>
                    )}

                    {!isAuthenticated &&(
                        <Box sx={{ display: { xs: 'none', md: 'flex',gap:10 } }}>
                            <Link to="/signUp" className={classes.link}>
                                <Button variant="outlined"  color="secondary">Sign Up</Button>
                            </Link>
                            <Button variant="contained" href="signIp" color="secondary"  onClick={() => loginWithRedirect()}>Sign In</Button>
                        </Box>
                    )}

                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;
