import React,{useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Divider from '@mui/material/Divider';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
import Typography from '@mui/material/Typography';
import {useAuth0} from "@auth0/auth0-react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

const useStyles = makeStyles({
        proButton:{
            marginTop: "30px",
            color: "red"
        },
        '&:focus': {
        outline: 'none',
        },
    cardback:{
        padding:'10px',
        color:'#4E2363',
    },
})





const SideNavTop = () => {
    const classes = useStyles();
    const { user } = useAuth0();
    console.log(user);

    useEffect(() => {

    }, []);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    if(user?.family_name==="Admin"){
        return (
            <>
                <Box sx={{ width: '100%' }}>
                    <Stack sx={{m:3}} justifyContent="center" alignItems="flex-start">
                        <Typography variant="h6" gutterBottom sx={{fontWeight:800}}>
                            ADMIN
                        </Typography>
                        <Typography variant="subtitle1" >
                            {user?.name}
                        </Typography>
                        <Divider orientation="horizontal" flexItem sx={{mt:1, }}>
                        </Divider>
                    </Stack>
                </Box>
            </>
        );
    }else if(false){
        {
            return (
                <>
                    <Box sx={{ width: '100%' }}>
                        <Stack sx={{m:3}} justifyContent="center" alignItems="flex-start">
                            <Typography variant="h6" gutterBottom sx={{fontWeight:800}}>
                                {user?.name}
                            </Typography>
                            <Typography variant="subtitle1" >
                                {user?.email}
                            </Typography>
                        </Stack>


                    </Box>
                </>
            );
        }
    }
    else {
        {
            return (
                <>
                    <Box sx={{ width: '100%' }}>
                        <Stack sx={{m:3}} justifyContent="center" alignItems="flex-start">
                            <Typography variant="h6" gutterBottom sx={{fontWeight:800}}>
                                {user?.name}
                            </Typography>
                            <Typography variant="subtitle1" >
                                {user?.email}
                            </Typography>
                            <Button variant="outlined" onClick={handleClickOpen} endIcon={<ArrowRightAltIcon />} className={classes.proButton} sx={{mt:3}} >
                                Get Pro
                            </Button>
                            <Divider orientation="horizontal" flexItem sx={{mt:1, }}>
                            </Divider>
                        </Stack>

                        <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" maxWidth={"md"}>
                            {/*<DialogTitle id="alert-dialog-title">*/}
                            {/*    {"Use Google's location service?"}*/}
                            {/*</DialogTitle>*/}
                            <DialogActions>
                                <Button onClick={handleClose} autoFocus>
                                    Close
                                </Button>
                            </DialogActions>
                            <DialogContent>
                                <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ flexGrow: 1 }}  spacing={2}>
                                    <Grid item xs={6} >
                                        <Card sx={{ backgroundColor: '#E5E5E5',p:'35px'}} >
                                            <Typography variant={'h5'} className={classes.cardback}>Pro Member</Typography>
                                            <Typography >
                                                •	Unlimited advertisement posting.<br/>
                                                •	Unlimited requests of workers.<br/>
                                                •	Priority when an advertisement is posted.<br/>
                                                •	Priority when requesting a job seeker.
                                            </Typography>

                                            <Typography variant={'h5'} className={classes.cardback}>Free Member</Typography>
                                            <Typography >
                                                •	Advertisement can be posted once a day<br/>
                                                •	Limited requests of workers<br/>
                                                •	Less priority when an advertisement is posted.<br/>
                                                •	Less priority when requesting a job seeker.
                                            </Typography>
                                        </Card>
                                    </Grid>

                                    <Grid item xs={6} direction={"column"} >
                                        <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ flexGrow: 1 }}  spacing={1}>
                                            <Grid item xs={12}>
                                                <Card sx={{ backgroundColor: '#E5E5E5', padding:'20px',mb:1}}>
                                                    <Typography variant={'h5'} fontWeight={'700'} textAlign='left'>1 Year</Typography>
                                                    <Typography fontSize={'24px'} fontWeight={'700'} color={'#7A3293'} textAlign='left'>833.33 LKR<span style={{fontSize:'16px'}}> / month</span></Typography>
                                                    <Typography variant={'subtitle1'} textAlign='left' marginBottom={'30px'} >10000 LKR every 12 month</Typography>
                                                    <Typography fontSize={'11px'} textAlign='left'marginBottom={'10px'}>•	VAT and local taxes may apply</Typography>
                                                    <Button variant="contained" sx={{backgroundColor:'#4E2363'}} >Subscribe Now</Button>
                                                </Card>
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Card sx={{ backgroundColor: '#E5E5E5', padding:'20px',mt:1}}>
                                                    <Typography variant={'h5'} fontWeight={'700'} textAlign='left'>1 Month</Typography>
                                                    <Typography fontSize={'24px'} fontWeight={'700'} color={'#7A3293'} textAlign='left'>1000 LKR<span style={{fontSize:'16px'}}> / month</span></Typography>
                                                    <Typography variant={'subtitle1'} textAlign='left' marginBottom={'30px'} >12000 LKR every 12 month</Typography>
                                                    <Typography fontSize={'11px'} textAlign='left'marginBottom={'10px'}>•	VAT and local taxes may apply</Typography>
                                                    <Button variant="contained" sx={{backgroundColor:'#4E2363'}} >Subscribe Now</Button>
                                                </Card>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>

                            </DialogContent>

                        </Dialog>
                    </Box>
                </>
            );
        }
    }

};

export default SideNavTop;


