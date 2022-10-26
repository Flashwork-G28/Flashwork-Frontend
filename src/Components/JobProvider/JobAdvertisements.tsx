import React from 'react';
import JobProviderAddMidContent from "./JobProviderComponents/JobProviderAddMidContent";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {makeStyles} from "@material-ui/core/styles";
// import JobProviderProfileMidContent from "./JobProviderComponents/JobProviderProfileMidContent";


const useStyles = makeStyles({
    midContentBody: {
        backgroundColor:'white',
        padding:'50px',
    },
});



const JobAdvertisements = () => {
    const classes = useStyles();
    return (
        <>
            <Card className={classes.midContentBody}>
                <JobProviderAddMidContent />
            </Card>
        </>
    );
};

export default JobAdvertisements;
