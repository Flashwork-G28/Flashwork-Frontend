import React from 'react';
import Typography from "@mui/material/Typography";
import WorkerCard from "../Workers/WorkerCard";
import Grid from "@mui/material/Grid";

const HomeTopWorker = () => {
    return (
        <div>
            <Typography variant="h2" component="h2" fontWeight='1000' textAlign='left' marginLeft='60px' marginTop='60px' sx={{color:'#4E2363'}}>
                A Large Group of Servicing to Avail Various Services
            </Typography>
            <Typography variant="subtitle1" fontWeight='500' textAlign='left' marginLeft='60px' marginTop='30px'>
                Flashwork is a platform that connects part-time workers with suitable opportunities. Work From Home Sites. Work Remote and Computer Work From Home.
                Provide facilities to interconnect part-time service providers such as individual service providers or manpower agencies with part-time service
            </Typography>
            <Grid
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

export default HomeTopWorker;
