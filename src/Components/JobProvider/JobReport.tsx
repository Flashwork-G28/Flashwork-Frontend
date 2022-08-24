import React from 'react';
import {Chart} from "react-google-charts";
import JobProviderReport from "./JobProviderComponents/JobProviderReport";



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

const JobReport = () => {

    return (
        <div>
            <JobProviderReport/>
            <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        </div>
    );
};

export default JobReport;
