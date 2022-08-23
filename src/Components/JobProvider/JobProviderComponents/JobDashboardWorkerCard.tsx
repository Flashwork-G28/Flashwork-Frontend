import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@mui/material/Grid";
// import Diversity1Icon from '@mui/icons-material/Diversity1';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';


const useStyles = makeStyles({
    WorkerCard: {
        height: '100px',
        width: '230px',
        backgroundColor: 'yellow',
        borderRadius: '10px',
        // position:'relative',
    },
});



const JobDashboardWorkerCard = () => {
    const classes = useStyles();
    return (
        <div>
            <Card >
                <CardContent className={classes.WorkerCard}>

                        <Grid container
                              direction="row"
                              justifyContent="space-between"
                              alignItems="center"
                              sx={{ width: '100%' }}>
                            <Grid item xs={4}>
                                <DirectionsBusIcon />

                            </Grid>
                            <Grid item xs={8}>
                                <Typography color='black' alignItems='flex-start' >Contact No</Typography>
                                <Typography color='black' alignItems='flex-start' >Contact No</Typography>

                            </Grid>

                        </Grid>


                </CardContent>

            </Card>



        </div>
    );
};

export default JobDashboardWorkerCard;
