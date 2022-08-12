import React from 'react';
import './App.scss';
import { ThemeProvider } from '@mui/material/styles';
import { Route, Routes} from "react-router-dom";
import theme from "./Theme";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Layout from "./Pages/Layout";



function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
            {/*<Route path='(/dashboard)' />*/}
            {/*    <Base/>*/}
            {/*<Route/>*/}
            <Route path='/signIn'  element={<SignIn />}/>
            <Route path='/signUp'  element={<SignUp />}/>
            <Route path='/' element={<Layout />}>
                <Route  path='/jobs'  element={<Layout />}/>
                <Route path='/workers'  element={<Layout />}/>
                <Route path='/contactUs'  element={<Layout />}/>
                <Route path='/about'  element={<Layout />}/>
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
