import React from 'react';
import JobProviderProfileContent from "./JobProviderComponents/JobProviderProfileContent";
import JobProviderProMember from "./JobProviderComponents/JobProviderProMember";
import JobProviderProfileDetails from "./JobProviderComponents/JobProviderProfileDetails";


export const data = [
    ["x", "Manpower Agency", "Job Seeker"],
    [0, 0, 0],
    [1, 10, 5],
    [2, 23, 15],
    [3, 17, 9],
    [4, 18, 10],
    [5, 9, 5],
    [6, 11, 3],
    [7, 27, 19],
];


export const options = {
    hAxis: {
        title: "Time",
    },
    vAxis: {
        title: "Popularity",
    },
    series: {
        1: { curveType: "function" },
    },
};


const JobProfile = () => {
    return (
        <div>
            {/*<JobProviderProfileContent />*/}

            <JobProviderProfileDetails />
        </div>
    );
};

export default JobProfile;
