import React, {useEffect, useState} from 'react';
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
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import Swal from "sweetalert2";

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
    const classes = useStyles();
    const {
        user,
        isAuthenticated,
        logout,
    } = useAuth0();


    const [notificationCount, setNotificationCount] = useState('');
    const [notification, setNotification]= useState<any>([]);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {   // ------------------ Open the popup box
        setOpen(true);
    };
    const handleClose = () => {      // ----------------------------- Close the popup box
        setOpen(false);
    };

    const getNotification = () =>{
        if (isAuthenticated){
            let providerID:any = user?.sub;
            providerID = providerID.substring(6)
            // alert(providerID);

            axios.post('http://localhost:8000/jobProvider/notificationCount', {
                job_provider_id : providerID,

            })
                .then(function (response) {
                    const data = response.data;
                    setNotificationCount(data[0].count);

                })
                .catch(function (error) {
                    console.error(error);
                });


            axios.post('http://localhost:8000/jobProvider/notification', {
                job_provider_id : providerID,

            })
                .then(function (response) {
                    const data = response.data;

                    data.map((item: any) => {
                        setNotification((prevState: any) => [...prevState, {
                            notification_id: item.notification_id,
                            user_id:item.user_id,
                            header:item.header,
                            titel: item.titel,
                            notification_update_date: item.notification_update_date,
                            view_status: item.view_status,

                        }])
                        return null;
                    });

                })
                .catch(function (error) {
                    console.error(error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!'
                    })
                });


        }
    }


    useEffect(() => {
        getNotification();
        setLoading(true);

    },[isAuthenticated]);

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
                                onClick={handleClickOpen}>
                                <Badge badgeContent={notificationCount} color="error">
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

                    <Dialog onClose={handleClose} open={open}>
                        <DialogTitle>Notification</DialogTitle>
                        <List sx={{ pt: 0 }}>
                            <Stack sx={{ width: '100%' }} spacing={2}>
                                {loading? notification.map((item: any) => {
                                    return(
                                        <Alert severity="success">
                                            <AlertTitle>{item.header}</AlertTitle>
                                            {item.titel}
                                            <strong> - {item.notification_update_date}</strong>

                                        </Alert>
                                    );

                                }) :<CircularProgress />}
                            </Stack>
                        </List>

                    </Dialog>

                </div>
            </div>

        </>
    );
};

export default TopBar;
