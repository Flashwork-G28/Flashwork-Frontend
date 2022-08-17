import React from 'react';
import TopBar from "../../Components/TopBar/TopBar";
import SideNav from "../../Components/SideNav/SideNav";
import {Route, Routes} from "react-router-dom";
import JobHome from "../../Components/JobProvider/JobHome";
import JobDashboard from "../../Components/JobProvider/JobDashboard";

const DashBoard = () => {
    return (
        <>
            <TopBar />
            <div style={{backgroundColor:"red"}}>
                <Routes>
                    <Route path='/' element={<JobHome />}/>
                    <Route path='/dashboard' element={<JobDashboard />}/>
                </Routes>
            </div>

            <SideNav />
        </>
    );
};

export default DashBoard;

