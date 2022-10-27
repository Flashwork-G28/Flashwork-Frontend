import React from 'react';
// import JobDashboardBookingRequest from "./JobProviderComponents/JobDashboardBookingRequest";
import Grid from "@mui/material/Grid";
import JobSeekerReqList from "../JobSeeker/JobSeekerRequest/JobSeekerReqList";
import JobSeekerReqProfile from "../JobSeeker/JobSeekerRequest/JobSeekerReqProfile";
import JobDashboardWorkerCard from "./JobProviderComponents/JobDashboardWorkerCard";
import JobDashboardWorkerTable from "./JobProviderComponents/JobDashboardWorkerTable";
import {makeStyles} from "@material-ui/core/styles";
import Typography from '@mui/material/Typography';


const useStyles = makeStyles({
    container: {
        minWidth: 'cover',
        // margin: "30px",
        padding: 10,
        backgroundColor:'#E5E5E5',
        // filter: 'blur(4px)',

    },
});

const JobDashboard = () => {
    const classes = useStyles();

    return (
        <div style={{padding:'25px'}}>


            {/*<Grid  spacing={2} style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>*/}
                {/*<Grid item xs={9} sx={{backgroundColor:"#ebccff",borderRadius:"10px"}}>*/}
                    <JobDashboardWorkerCard />



                {/*</Grid>*/}
                {/*<Grid item xs={}  sx={{borderRadius:"10px",paddingLeft:"3px",backgroundColor:"#ffff"}}>*/}
                {/*    <JobSeekerReqProfile/>*/}
                {/*</Grid>*/}
            {/*</Grid>*/}

        </div>
    );
};

export default JobDashboard;
