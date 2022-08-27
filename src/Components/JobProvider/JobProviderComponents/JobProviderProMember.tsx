import React from 'react';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

import pc from '../../../Assets/backgroundImages/worker.jpg'
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import {makeStyles} from "@material-ui/core/styles";
import Button from "@mui/material/Button";




const useStyles = makeStyles({
    Textcontainer: {

        padding: "10px",
        borderRadius: '5px',
        border: '1px solid #33363F',
        width: '200px',

    },

    test2:{
        // backgroundColor: "red",
        height:'100vh',
    },
    detailsBody:{
        padding: '30px',
        backgroundColor: "#E5E5E5",
        alignItems: 'left',
        height:'500px',
        width: '400px',
        justifyContent:'center',
        borderRadius: '10px',
        border: '3px solid #E5E5E5',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    cardYear:{
        padding:'50px',
        marginBottom:'30px',
        backgroundColor:'blue',
        // width: "80%",


    },
    cardMonth:{
        padding:'50px',
        marginBottom:'30px',
        backgroundColor:'yellow',
    },
    booking:{
        // marginTop:'80px',
        // position: 'absolute',
        bottom: '50px',
        right: '25px',


    },
});

const JobProviderProMember = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid container
                  direction="row"
                  justifyContent="space-evenly"
                  alignItems="center">
                <Grid xs={6} >
                <Card>
                    <CardContent className={classes.detailsBody}>

                        <Typography variant="h4" color='#4E2363'>
                            Pro Member
                        </Typography>

                        <Typography variant="h6">

                            Unlimited advertisement posting.<br />
                           Unlimited requests of workers.<br />
                            Priority when an advertisement is posted.<br />
                            Priority when requesting a job seeker.<br />
                        </Typography>



                        <Typography variant="h4" color='#4E2363' marginTop='50px' >
                            Free Member
                        </Typography>

                        <Typography variant="h6">
                            Advertisement can be posted once a day.<br />
                            Limited requests of workers.<br />
                           Less priority when an advertisement is posted.<br />
                            Less priority when requesting a job seeker.<br />
                        </Typography>
                    </CardContent>
                </Card>
                </Grid>

                <Grid xs={6}
                      container
                      direction="column"
                      justifyContent="flex-start"
                      alignItems="center"
                      className={classes.test2}>

                    <div className={classes.cardYear}>
                        <Typography variant="h5" >
                            Pro
                        </Typography>

                        <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            well meaning and kindly.
                        </Typography>

                        <Grid className={classes.booking} >
                            <Button variant="contained" >Booking</Button>
                        </Grid>
                    </div>

                    <div className={classes.cardMonth}>
                        <Typography variant="h5" >
                            Pro
                        </Typography>

                        <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            well meaning and kindly.
                        </Typography>

                    </div>



                </Grid>

            </Grid>




        </div>
    );
};

export default JobProviderProMember;
