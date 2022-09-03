import React, {useEffect, useState} from 'react';
import Typography from "@mui/material/Typography";
import JobsPageSearch from "../../Components/Jobs/JobsPageSearch";
import JobMainComponents from "../../Components/Jobs/JobMainComponents";
import JobsMainRateComponents from "../../Components/Jobs/JobMainReteComponents";
const axios = require('axios');

const Workers = () => {
    const [jobs, setJobs] = useState([]);

    const getData = () => {
        // Make a request for a user with a given ID
        axios.get('http://localhost:8000/jobs')
            .then(function (response: any) {
                // handle success
                console.log(response.data.jobs[0]);
                setJobs(response.data.jobs);
                console.log(jobs);

            })
            .catch(function (error: any) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }


    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <JobsPageSearch/>
            <div>
                <Typography variant="h6" component="h6" fontWeight='700' textAlign='left' margin='50px 0px 0px 30px'>
                    Work That You Prefer
                </Typography>
                <JobMainComponents />
            </div>

            <div>
                <Typography variant="h6" component="h6" fontWeight='700' textAlign='left' margin='50px 0px 0px 30px'>
                    Latest Work
                </Typography>
                <JobsMainRateComponents />
            </div>

        </>
    );
};

export default Workers;

