import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {makeStyles} from "@material-ui/core/styles";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from '@mui/material/Button'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import FormControl from "@mui/material/FormControl";
import Typography from '@mui/material/Typography';


const useStyles = makeStyles({
        PopUpCard:{
            paddingTop: 10,
            paddingBottom: 10,
            height: '420px',
            width: '750px',
            backgroundColor:'#D9D9D9',
            borderRadius: '10px',
            // position:'relative',
        },

        Textcontainer: {

            padding:"10px",
            borderRadius: '5px',
            border: '1px solid #33363F',
        },
    });

const JobProviderPlacementJob = () => {
            const classes = useStyles();
            return (
            <>
                    <Card >
                        <form >
                            <Grid container
                                  direction="row"
                                  justifyContent="flex-start"
                                  alignItems="flex-start" >
                                <Grid  xs={4} direction="column"  >
                                    <Grid item xs={6} sx={{ m: 2 }}>
                                        <div >
                                            <Typography color='black' alignItems='flex-start' >Date</Typography>
                                            <Typography color='#33363F' alignItems='flex-start' className={classes.Textcontainer} > 12 -08 -2022
                                            </Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4} sx={{ m: 2 }}>
                                        <div >
                                            <Typography color='black' alignItems='flex-start' >Category</Typography>
                                            <Typography color='#33363F' alignItems='flex-start' className={classes.Textcontainer} > Cleaners
                                            </Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4} sx={{ m: 2 }}>
                                        <div >
                                            <Typography color='black' alignItems='flex-start' >Contact No</Typography>
                                            <Typography color='#33363F' alignItems='flex-start' className={classes.Textcontainer} > 762541365
                                            </Typography>
                                        </div>

                                    </Grid>
                                </Grid>
                                <Grid xs={4} direction="column">
                                    <Grid item xs={6} sx={{ m: 2 }}>
                                        <div >
                                            <Typography color='black' alignItems='flex-start' >Worker Count</Typography>
                                            <Typography color='#33363F' alignItems='flex-start' className={classes.Textcontainer} > 5
                                            </Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} sx={{ m: 2 }}>
                                        <Typography color='black' alignItems='flex-start' >Payment Method</Typography>
                                        <Typography color='#33363F' alignItems='flex-start' className={classes.Textcontainer} > Online
                                        </Typography>
                                    </Grid>


                                </Grid>
                                <Grid  xs={4} direction="column">
                                    <Grid item xs={6} sx={{ m: 2 }}>
                                        <Typography color='black' alignItems='flex-start' >Location</Typography>
                                        <Typography color='#33363F' alignItems='flex-start' className={classes.Textcontainer} > Nugegoda
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={6} sx={{ m: 2 }}>
                                        <Typography color='black' alignItems='flex-start' >One Worker Payment</Typography>
                                        <Typography color='#33363F' alignItems='flex-start' className={classes.Textcontainer} > LKR 5000.00
                                        </Typography>
                                    </Grid>

                                </Grid>

                            </Grid>

                            <Grid container
                                  direction="row"
                                  justifyContent="flex-start"
                                  alignItems="flex-start" >
                                <Grid item xs={12} sx={{ m: 2 }} >
                                    <Typography color='black' alignItems='flex-start' >Description</Typography>
                                    <Typography color='#33363F' alignItems='flex-start' className={classes.Textcontainer} > I Need A Job Today.
                                        Work From Home Sites. Work Remote. Work From Home Sites.
                                        Computer Work From Home
                                    </Typography>

                                </Grid>

                            </Grid>

                        </form>
                    </Card>
            </>
    );
};

export default JobProviderPlacementJob;
