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
            </Route>

            <Route path='/dashboard' element={<DashBoard />} >
                <Route path='/dashboard/jobprovider/home' element={<DashBoard />}/>
                <Route path='/dashboard/jobprovider/profile' element={<DashBoard />}/>
                <Route path='/dashboard/jobprovider/advertisements' element={<DashBoard />}/>
                <Route path='/dashboard/jobprovider/report' element={<DashBoard />}/>
                <Route path='/dashboard/jobprovider/help' element={<DashBoard />}/>

                <Route path='/dashboard/jobseeker/home' element={<DashBoard />}/>
                <Route path='/dashboard/jobseeker/profile' element={<DashBoard />}/>
                <Route path='/dashboard/jobseeker/request' element={<DashBoard />}/>
                <Route path='/dashboard/jobseeker/repeort' element={<DashBoard />}/>
                <Route path='/dashboard/jobseeker/help' element={<DashBoard />}/>

                <Route path='/dashboard/manpower/home' element={<DashBoard />}/>
                <Route path='/dashboard/manpower/profile' element={<DashBoard />}/>
                <Route path='/dashboard/manpower/member' element={<DashBoard />}/>
                <Route path='/dashboard/manpower/request' element={<DashBoard />}/>
                <Route path='/dashboard/manpower/report' element={<DashBoard />}/>
                <Route path='/dashboard/manpower/help' element={<DashBoard />}/>

                <Route path='/dashboard/admin/home' element={<DashBoard />}/>
                <Route path='/dashboard/admin/payment' element={<DashBoard />}/>
                <Route path='/dashboard/admin/userrequest' element={<DashBoard />}/>
                <Route path='/dashboard/admin/allusers' element={<DashBoard />}/>
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
