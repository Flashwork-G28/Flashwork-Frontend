import React from 'react';
import Grid from "@mui/material/Grid";
import {makeStyles} from "@material-ui/core/styles";
import WorkerCard from "../../Components/Workers/WorkerCard";


const useStyles = makeStyles({
    cardSection: {
        backgroundColor: '#F7D6FF',
        width: '100%',
        height: 'fitcontent',
        marginTop:'20px'
    },
})




const WorkerMainComponents = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid className={classes.cardSection}
                  container
                  spacing={0.0}
                  direction="row"
                  justifyContent="center"
                  alignItems="center">

                <WorkerCard />
                <WorkerCard />
                <WorkerCard />


            </Grid>

        </div>
    );
};

export default WorkerMainComponents;
