import React from 'react';
import JobProviderAddMidContent from "./JobProviderComponents/JobProviderAddMidContent";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {makeStyles} from "@material-ui/core/styles";
// import JobProviderProfileMidContent from "./JobProviderComponents/JobProviderProfileMidContent";


const useStyles = makeStyles({
    midContentBody: {
        // width:'100%',
        // height:'100vh',
        backgroundColor:'white',
        padding:'50px',
        // borderRadius: '10px',
        // border: '1px solid #E5E5E5',
        // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        // marginLeft:'90px',
        // position: 'relative',
        // marginBottom:'-30px',
        // textAlign:'center',
        // backgroundColor:'white'

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
