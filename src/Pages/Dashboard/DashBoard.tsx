import React from 'react';
import TopBar from "../../Components/TopBar/TopBar";
import SideNav from "../../Components/SideNav/SideNav";
import {Route, Routes} from "react-router-dom";
import JobHome from "../../Components/JobProvider/JobHome";
import JobDashboard from "../../Components/JobProvider/JobDashboard";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles({
    Item: {
        backgroundColor: '#fff',
        padding: 2,
        textAlign: 'center',
    }
})

const DashBoard = () => {
    const classes = useStyles();
    return (
        <>
            <Box sx={{ flexGrow: 1, padding:4, backgroundColor:'#B786EC',minHeight:"100vh"}}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper className={classes.Item} elevation={3}>
                            <TopBar/>
                        </Paper>
                    </Grid>
                    <Grid item xs={2.5}>
                        <Paper className={classes.Item} elevation={3}>
                            <SideNav/>
                        </Paper>
                    </Grid>
                    <Grid item xs={9.5} >
                        <Paper className={classes.Item} elevation={3}>
                            <Routes>
                                <Route path='/dashboard' element={<JobDashboard />}/>
                            </Routes>
                        </Paper>
                    </Grid>

                </Grid>
            </Box>
        </>
    );
};

export default DashBoard;

