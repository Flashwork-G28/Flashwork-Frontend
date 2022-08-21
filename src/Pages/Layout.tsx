import React from 'react';
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./LandingPages/Home";
import Job from "./LandingPages/Job";
import Workers from "./LandingPages/Workers";
import ContactUs from "./LandingPages/ContactUs";
import About from "./LandingPages/About";

/* test admin */
import AdminDashboard from "../Components/Admin/AdminDashboard";

const Layout = () => {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/jobs'  element={<Job />}/>
                <Route path='/workers'  element={<Workers />}/>
                <Route path='/contactUs'  element={<ContactUs />}/>
                <Route path='/about'  element={<About />}/>

                {/* test admin */}
                <Route path='/adminDashboard'  element={<AdminDashboard />}/>
            </Routes>
            <Footer/>
        </>
    );
};

export default Layout;
