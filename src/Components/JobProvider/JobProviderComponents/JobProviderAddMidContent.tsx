import React from 'react';
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import {makeStyles} from "@material-ui/core/styles";

import JobProviderAdvertismentAppliedWorkers from "./JobProviderAdvertismentAppliedWorkers";
import JobProviderPlacementJob from "./JobProviderPlacementJob";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


const useStyles = makeStyles({
    container: {
        minWidth: 'cover',
        // margin: "30px",
        padding: 10,
        backgroundColor:'#E5E5E5',
        // filter: 'blur(4px)',
        borderRadius:'20px',
        minHeight: "100vh",
    },
});


const JobProviderAddMidContent = () => {
    const classes = useStyles();
    return (
        <div>
            <Container className={classes.container} >
                <Grid container
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                style={{marginBottom:'30px'}}>

                    <Grid item xs={6}>
                        <Typography variant="h5" fontWeight='700' alignItems='flex-start' >Placement Job</Typography>

                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained">New Advertisment</Button>

                    </Grid>

                </Grid>
                <JobProviderPlacementJob />
                <Typography variant="h6" fontWeight='700' alignItems='flex-start' marginTop='30px' >Applied Workers</Typography>

                <JobProviderAdvertismentAppliedWorkers />
            </Container>







        </div>
    );
};

export default JobProviderAddMidContent;
