import React from 'react';
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./LandingPages/Home";
import Job from "./LandingPages/Job";
import Workers from "./LandingPages/Workers";
import ContactUs from "./LandingPages/ContactUs";
import About from "./LandingPages/About";

const Layout = () => {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route  path='/jobs'  element={<Job />}/>
                <Route path='/workers'  element={<Workers />}/>
                <Route path='/contactUs'  element={<ContactUs />}/>
                <Route path='/about'  element={<About />}/>
            </Routes>
            <Footer/>
        </>
    );
};

export default Layout;
