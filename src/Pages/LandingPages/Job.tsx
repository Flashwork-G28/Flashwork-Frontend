import React from 'react';
import WorkerMainComponents from "../../Components/Job/JobMainComponents";
import Typography from "@mui/material/Typography";

const Workers = () => {
    return (
        <div>
            <div>
                <Typography variant="h6" component="h6" fontWeight='700' textAlign='left' margin='50px 0px 0px 30px'>
                    Work That You Prefer
                </Typography>
                <WorkerMainComponents />
            </div>

            <div>
                <Typography variant="h6" component="h6" fontWeight='700' textAlign='left' margin='50px 0px 0px 30px'>
                    Latest Work
                </Typography>
                <WorkerMainComponents />
            </div>

            <div>
                <Typography variant="h6" component="h6" fontWeight='700' textAlign='left' margin='50px 0px 0px 30px'>
                    Watch Later
                </Typography>
                <WorkerMainComponents />
            </div>

        </div>
    );
};

export default Workers;

