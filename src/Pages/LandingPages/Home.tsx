import React from 'react';

import HomeServiceCard from "../../Components/HomeCard/HomeServiceCard";
import UsersCountingSection from "../../Components/HomeCard/UsersCountingSection";
import UnicFirstPage from "../../Components/HomeCard/UnicFirstPage";
import HomeTopWorker from "../../Components/HomeCard/HomeTopWorker";
import {height} from "@mui/system";


const Home = () => {
    return (
        <>
            <UnicFirstPage />
            <UsersCountingSection/>
            <HomeServiceCard/>
            <div style={{height:"12px"}}></div>
            {/*<HomeTopWorker />*/}
        </>
    );
};

export default Home;

