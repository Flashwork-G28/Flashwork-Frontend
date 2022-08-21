import React from 'react';
import './App.scss';
import { ThemeProvider } from '@mui/material/styles';
import { Route, Routes} from "react-router-dom";
import theme from "./Theme";
import SignUp from "./Pages/SignUp";
import Layout from "./Pages/Layout";
import JobProvider from "./Pages/SignUp/JobProvider";
import Company from "./Pages/SignUp/Company";
import JobSeeker from "./Pages/SignUp/JobSeeker";
import DashBoard from "./Pages/Dashboard/DashBoard";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>

            <Route path='/signUp' element={<SignUp/>}/>
            <Route path="/signUp/JobProvider" element={<JobProvider />} />
            <Route path="/signUp/Company" element={<Company />} />
            <Route path="/signUp/JobSeeker" element={<JobSeeker />} />



            <Route path='/' element={<Layout />}>
                <Route  path='/jobs'  element={<Layout />}/>
                <Route path='/workers'  element={<Layout />}/>
                <Route path='/contactUs'  element={<Layout />}/>
                <Route path='/about'  element={<Layout />}/>
                
                {/* test admin */}
                <Route path='/adminDashboard'  element={<Layout />}/>
            </Route>

            <Route path='/dashboard' element={<DashBoard />} >
                <Route path='/dashboard/dashboard' element={<DashBoard />} />
            </Route>



            <Route path="*" element={
                <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                </main>
            }
            />
        </Routes>

      </ThemeProvider>
    </div>
  );
}

export default App;
