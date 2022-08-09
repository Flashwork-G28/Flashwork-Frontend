import React , {Component} from 'react';
import './App.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from './Pages/LandingPages/Home';
import Job from './Pages/LandingPages/Job';
import Workers from './Pages/LandingPages/Workers';
import ContactUS from './Pages/LandingPages/ContactUs';
import About from './Pages/LandingPages/About';
import DashBoard from "./Pages/Dashboard/DashBoard";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

import theme from "./Theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>

        {/*<Route path="/job">*/}
        {/*  <Job />*/}
        {/*</Route>*/}
        {/*<Route path='/workers'>*/}
        {/*  <Workers />*/}
        {/*</Route>*/}
        {/*<Route path='/contactUs'>*/}
        {/*  <ContactUS />*/}
        {/*</Route>*/}
        {/*<Route path='/about'>*/}
        {/*  <About />*/}
        {/*</Route>*/}
        {/*<Route path="/signIn">*/}
        {/*  <SignIn />*/}
        {/*</Route>*/}
        {/*<Route path="/signUp">*/}
        {/*  <SignUp />*/}
        {/*</Route>*/}

      </ThemeProvider>
    </div>
  );
}

export default App;
