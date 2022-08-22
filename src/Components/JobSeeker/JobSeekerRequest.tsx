import React from 'react';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TopBar from "../TopBar/TopBar";
import SideNav from "../SideNav/SideNav";
import {Route, Routes} from "react-router-dom";
import JobDashboard from "../JobProvider/JobDashboard";
import JobSeekerReqProfile from "./JobSeekerRequest/JobSeekerReqProfile";
import JobSeekerReqList from "./JobSeekerRequest/JobSeekerReqList";


const JobSeekerRequest = () => {
    return (
        <div >
            <Grid  spacing={2} style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
                <Grid item xs={6.5} sx={{backgroundColor:"#ebccff",borderRadius:"10px"}}>
                    <JobSeekerReqList/>
                </Grid>
                <Grid item xs={5}  sx={{backgroundColor:"blue",borderRadius:"10px",paddingLeft:"3px"}}>
                    <JobSeekerReqProfile/>
                </Grid>
            </Grid>
        </div>
    );
};

export default JobSeekerRequest;