import React from 'react';
import JobDashboardBookingRequest from "./JobProviderComponents/JobDashboardBookingRequest";
import Grid from "@mui/material/Grid";
import JobSeekerReqList from "../JobSeeker/JobSeekerRequest/JobSeekerReqList";
import JobSeekerReqProfile from "../JobSeeker/JobSeekerRequest/JobSeekerReqProfile";

const JobDashboard = () => {
    return (
        <div>


            <Grid  spacing={2} style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
                {/*<Grid item xs={7} sx={{backgroundColor:"#ebccff",borderRadius:"10px"}}>*/}
                    <JobDashboardBookingRequest />
                {/*</Grid>*/}
                <Grid item xs={5}  sx={{borderRadius:"10px",paddingLeft:"3px",backgroundColor:"#ffff"}}>
                    <JobSeekerReqProfile/>
                </Grid>
            </Grid>

        </div>
    );
};

export default JobDashboard;
