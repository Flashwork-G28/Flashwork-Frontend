import React from 'react';
import Avatar from "@mui/material/Avatar";
import logoIcon from "../../Assets/logoIcon.png";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import {Link} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    link: {
        margin: "1rem",
        textDecoration: "none",
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    }
})


const TopBar = () => {
    const {
        user,
        isAuthenticated,
        logout,
    } = useAuth0();

    const classes = useStyles();

    return (
        <>
            <div style={{display: "flex",justifyContent: "space-between"}}>
                <div >
                    <Link to="/" className={classes.link}>
                        <Avatar alt="logoIcon" src={logoIcon} sx={{ display: { xs: 'none', md: 'flex' }, ml:2, mr:1 ,width: 66, height: 66  }}/>
                        <Typography
                            variant="h4"
                            noWrap
                            color="primary"
                            sx={{
                                mr: 10,
                                ml: 1,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 900,
                                letterSpacing: '.4rem',
                                textDecoration: 'none',
                            }}>
                            FlashWork
                        </Typography>
                    </Link>
                </div>

                <div style={{display: "flex", alignItems: "center" }}>
                    {isAuthenticated && (
                        <Box sx={{ display: { xs: 'none', md: 'flex',gap:10 },mr:4 }}>
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

                            <IconButton >
                                <Avatar alt={user?.nickname} src={user?.picture} sx={{ width: 50, height: 50 }}/>
                            </IconButton>

                        </Box>
                    )}
                </div>
            </div>

        </>
    );
};

export default TopBar;
