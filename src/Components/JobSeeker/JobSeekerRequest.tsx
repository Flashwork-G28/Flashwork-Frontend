import React, {useEffect, useState} from 'react';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TopBar from "../TopBar/TopBar";
import SideNav from "../SideNav/SideNav";
import {Route, Routes} from "react-router-dom";
import JobDashboard from "../JobProvider/JobDashboard";
import JobSeekerReqProfile from "./JobSeekerRequest/JobSeekerReqProfile";
import JobSeekerReqList from "./JobSeekerRequest/JobSeekerReqList";
import axios from "axios";


const JobSeekerRequest = () => {
    const [row, setRows] = useState<any[]>([]);
    const [dataLoading, setIsDataLoading] = useState(false);

    return (
        <div >
            <Grid  spacing={2} style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
                <JobSeekerReqList/>


                {/*<Grid item xs={6.5} sx={{borderRadius:"10px"}}>*/}
                {/*    */}
                {/*</Grid>*/}
                {/*<Grid item xs={5}  sx={{borderRadius:"10px",paddingLeft:"3px",backgroundColor:"#ffff"}}>*/}
                {/*    <JobSeekerReqProfile/>*/}
                {/*</Grid>*/}
            </Grid>
        </div>
    );
};

export default JobSeekerRequest;