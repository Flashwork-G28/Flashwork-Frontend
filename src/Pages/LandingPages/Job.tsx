import React from 'react';
import WorkerMainComponents from "../../Components/Jobs/JobMainComponents";
import Typography from "@mui/material/Typography";
import JobsPageSearch from "../../Components/Jobs/JobsPageSearch";
import JobsMainComponents from "../../Components/Jobs/JobMainComponents";

const Workers = () => {
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

