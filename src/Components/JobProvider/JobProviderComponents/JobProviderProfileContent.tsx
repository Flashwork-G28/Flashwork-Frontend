import React from 'react';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

import pc from '../../../Assets/backgroundImages/worker.jpg'
import Card from "@mui/material/Card";
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    Textcontainer: {

        padding:"10px",
        borderRadius: '5px',
        border: '1px solid #33363F',
        width:'200px',

    },
    cardBody:{
        padding: '30px',
        // backgroundColor:'red',
    },

})


const JobProviderProfileContent = () => {
    const classes = useStyles();

    return (
        <div>
            <Card >

                <Stack spacing={2} className={classes.cardBody}>
                    <Grid container
                          direction="row"
                          justifyContent="space-evenly"
                          alignItems="center">
                        <Avatar
                            alt="Remy Sharp"
                            src= {pc}
                            sx={{ width: 200, height: 200 }}/>
                        <Stack>
                            <Grid container
                                  direction="row"
                                  justifyContent="space-evenly"
                                  alignItems="flex-start"
                                item xs={6} sx={{ m: 2 }} spacing={3} >
                                <div >
                                    <Typography color='black' alignItems='flex-start' >First Name</Typography>
                                    <Typography color='#33363F' alignItems='flex-start' className={classes.Textcontainer} > Rashmika
                                    </Typography>
                                </div>

                                <div>
                                    <Typography color='black' alignItems='flex-start' marginTop='20px' >Last Name</Typography>
                                    <Typography color='#33363F' alignItems='flex-start' className={classes.Textcontainer} > Lakshan
                                    </Typography>
                                </div>
                            </Grid>


                        </Stack>

                    </Grid>
                    <Grid>
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
                    <Grid>
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
                </Stack>


            </Card>

        </div>
    );
};

export default JobProviderProfileContent;
