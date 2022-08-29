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
import HailIcon from '@mui/icons-material/Hail';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';


const useStyles = makeStyles({
    WorkerCard: {
        height: '100px',
        width: '200px',
        backgroundColor: '#E5E5E5',
        borderRadius: '10px',
        // position:'relative',
    },

});



const JobDashboardWorkerCard = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container spacing={3} width='100%'>
                <Grid item xs={4}>
                    <Button>
                        <CardContent className={classes.WorkerCard}>
                                <Grid container
                                      direction="row"
                                      justifyContent="space-between"
                                      alignItems="center"

                                      >
                                    <Grid item xs={3}>
                                        <HailIcon fontSize='large' />
                                    </Grid>
                                    <Grid item xs={9} style={{height:'100%'}}
                                          container
                                          direction="column"
                                          justifyContent="space-between"
                                          alignItems="flex-end">
                                        <Typography textAlign='right' variant='subtitle2' fontWeight='700' color='#4E2363' alignItems='flex-end' >Requested Workers</Typography>
                                        <Typography textAlign='right' variant='h6' fontWeight='1000' color='black' alignItems='flex-end' >02</Typography>
                                    </Grid>

                                </Grid>
                        </CardContent>
                    </Button>

                </Grid>

                <Grid item xs={4} >
                    <Button>
                        <CardContent className={classes.WorkerCard}>

                            <Grid container
                                  direction="row"
                                  justifyContent="space-between"
                                  alignItems="center"
                                  sx={{ width: '100%', }}>
                                <Grid item xs={3}>
                                    <ImportContactsIcon fontSize='large' />
                                </Grid>
                                <Grid item xs={9}
                                      container
                                      direction="column"
                                      justifyContent="space-between"
                                      alignItems="flex-end">
                                    <Typography sx={{mb:2}} textAlign='right' variant='subtitle2' fontWeight='700' color='#4E2363' alignItems='flex-end' >Saved Workers</Typography>
                                    <Typography textAlign='right' variant='h6' fontWeight='1000' color='black' alignItems='flex-end' >05</Typography>
                                </Grid>

                            </Grid>


                        </CardContent>
                    </Button>
                </Grid>

                <Grid item xs={4} >

                    <Button>
                        <CardContent className={classes.WorkerCard}>
                            <Grid container
                                  direction="row"
                                  justifyContent="space-between"
                                  alignItems="center"
                                  sx={{ width: '100%', }}>
                                <Grid item xs={3}>
                                    <PeopleAltIcon fontSize='large' />
                                </Grid>
                                <Grid item xs={9}
                                      container
                                      direction="column"
                                      justifyContent="space-between"
                                      alignItems="flex-end">
                                    <Typography sx={{mb:2}} textAlign='right' variant='subtitle2' fontWeight='700' color='#4E2363' alignItems='flex-end' >Saved Manpower Aguncy</Typography>
                                    <Typography textAlign='right' variant='h6' fontWeight='1000' color='black' alignItems='flex-end' >05</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Button>

                </Grid>

            </Grid>
        </>
    );
};

export default JobDashboardWorkerCard;
