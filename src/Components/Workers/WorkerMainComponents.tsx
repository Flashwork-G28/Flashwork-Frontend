import React from 'react';
import Grid from "@mui/material/Grid";
import {makeStyles} from "@material-ui/core/styles";
import WorkerCard from "../../Components/Workers/WorkerCard";
import StarIcon from "@mui/icons-material/Star";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


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
        <>

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

        </>
    );
};

export default WorkerMainComponents;
