import React from 'react';
import TopBar from "../../Components/TopBar/TopBar";
import SideNav from "../../Components/SideNav/SideNav";
import {Route, Routes} from "react-router-dom";
import JobProfile from "../../Components/JobProvider/JobProfile";
import JobDashboard from "../../Components/JobProvider/JobDashboard";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import JobAdvertisements from "../../Components/JobProvider/JobAdvertisements";
import JobReport from "../../Components/JobProvider/JobReport";
import JobHelp from "../../Components/JobProvider/JobHelp";
import JobSeekerDashboard from "../../Components/JobSeeker/JobSeekerDashboard";
import JobSeekerProfile from "../../Components/JobSeeker/JobSeekerProfile";
import JobSeekerRequest from "../../Components/JobSeeker/JobSeekerRequest";
import JobSeekerReport from "../../Components/JobSeeker/JobSeekerReport";
import JobSeekerHelp from "../../Components/JobSeeker/JobSeekerHelp";
import ManDashboard from "../../Components/ManPower/ManDashboard";
import ManProfile from "../../Components/ManPower/ManProfile";
import ManMember from "../../Components/ManPower/ManMember";
import ManRequest from "../../Components/ManPower/ManRequest";
import ManReport from "../../Components/ManPower/ManReport";
import ManHelp from "../../Components/ManPower/ManHelp";
import AdminDashboard from "../../Components/Admin/AdminDashboard";
import AdminPayment from "../../Components/Admin/AdminPayment";
import AdminUserRequest from "../../Components/Admin/AdminUserRequest";
import AdminAllUsers from "../../Components/Admin/AdminAllUsers";

import JobSeekerReq from "../../Components/JobSeekerNew/JobSeekerReq";
import JobSeekerComplaint from "../../Components/JobSeekerNew/JobSeekerComplaint";
import OthersProfile from '../../Components/JobSeekerNew/OthersProfile';
import JobProviderPostAd from '../../Components/JobProviderNew/JobProviderPostAd';



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
                            <SideNav />
                        </Paper>
                    </Grid>
                    <Grid item xs={9.5} >
                        <Paper className={classes.Item} elevation={3}>
                            <Routes>
                                <Route path='/jobprovider/home' element={<JobDashboard />}/>
                                <Route path='/jobprovider/profile' element={<JobProfile />}/>
                                <Route path='/jobprovider/advertisements' element={<JobAdvertisements />}/>
                                {/* <Route path='/jobprovider/advertisements' element={<JobProviderPostAd />}/> */}
                                <Route path='/jobprovider/report' element={<JobReport />}/>
                                <Route path='/jobprovider/help' element={<JobHelp />}/>

                                <Route path='/jobseeker/home' element={<JobSeekerDashboard />}/>
                                <Route path='/jobseeker/profile' element={<JobSeekerProfile />}/>
                                {/* <Route path='/jobseeker/request' element={<JobSeekerRequest />}/> */}
                                <Route path='/jobseeker/request' element={<JobSeekerReq />}/>
                                {/* <Route path='/jobseeker/request' element={<JobSeekerComplaint />}/> */}
                                {/* <Route path='/jobseeker/request' element={<OthersProfile />}/> */}
                                <Route path='/jobseeker/repeort' element={<JobSeekerReport />}/>
                                <Route path='/jobseeker/help' element={<JobSeekerHelp />}/>

                                <Route path='/manpower/home' element={<ManDashboard />}/>
                                <Route path='/manpower/profile' element={<ManProfile />}/>
                                <Route path='/manpower/member' element={<ManMember />}/>
                                <Route path='/manpower/request' element={<ManRequest />}/>
                                <Route path='/manpower/report' element={<ManReport />}/>
                                <Route path='/manpower/help' element={<ManHelp />}/>

                                <Route path='/admin/home' element={<AdminDashboard />}/>
                                <Route path='/admin/payment' element={<AdminPayment />}/>
                                <Route path='/admin/userrequest' element={<AdminUserRequest />}/>
                                <Route path='/admin/allusers' element={<AdminAllUsers />}/>

                            </Routes>
                        </Paper>
                    </Grid>

                </Grid>
            </Box>
        </>
    );
};

export default DashBoard;

