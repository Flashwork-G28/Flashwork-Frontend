import React, {useEffect, useState} from 'react';
import WorkerMainComponents from "../../Components/Jobs/JobMainComponents";
import Typography from "@mui/material/Typography";
import JobsPageSearch from "../../Components/Jobs/JobsPageSearch";
import JobsMainComponents from "../../Components/Jobs/JobMainComponents";
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
                <JobsMainComponents />
            </div>

            <div>
                <Typography variant="h6" component="h6" fontWeight='700' textAlign='left' margin='50px 0px 0px 30px'>
                    Latest Work
                </Typography>
                <JobsMainComponents />
            </div>

            <div>
                <Typography variant="h6" component="h6" fontWeight='700' textAlign='left' margin='50px 0px 0px 30px'>
                    Watch Later
                </Typography>
                <JobsMainComponents />
            </div>

        </>
    );
};

export default Workers;

