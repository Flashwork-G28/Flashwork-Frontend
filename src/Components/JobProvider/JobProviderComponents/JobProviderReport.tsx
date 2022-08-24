import React from 'react';
import { Chart } from "react-google-charts";



export const data = [
    ["Task", "Hours per Day"],
    ["Online Payment", 11],
    ["Cache Payment", 2],


];

export const options = {
    title: "My Payment History",
    is3D: true,
};

const JobProviderReport = () => {
    return (
        <div>
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
            />


        </div>
    );
};

export default JobProviderReport;