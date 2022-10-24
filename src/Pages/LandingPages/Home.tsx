import React from 'react';

import HomeServiceCard from "../../Components/HomeCard/HomeServiceCard";
import UsersCountingSection from "../../Components/HomeCard/UsersCountingSection";
import UnicFirstPage from "../../Components/HomeCard/UnicFirstPage";
import HomeTopWorker from "../../Components/HomeCard/HomeTopWorker";


const Home = () => {
    return (
        <>
            <UnicFirstPage />
            <UsersCountingSection/>
            <HomeServiceCard/>
            {/*<HomeTopWorker />*/}
        </>
    );
};

export default Home;

