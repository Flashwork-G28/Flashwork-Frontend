import React from 'react';
import Grid from "@mui/material/Grid";
import {makeStyles} from "@material-ui/core/styles";
import JobsCard from "./Jobcard";


const useStyles = makeStyles({
    cardSection: {

        backgroundColor: '#F7D6FF',
        width: '100%',
        height: 'fitcontent',
        marginTop:'20px'

    },
})




const JobsMainRateComponents = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid className={classes.cardSection}
                  container
                  spacing={0.0}
                  direction="row"
                  justifyContent="center"
                  alignItems="center">

                <JobsCard />
                <JobsCard />
                <JobsCard />
                <JobsCard />


            </Grid>

        </div>
    );
};

export default JobsMainRateComponents;
