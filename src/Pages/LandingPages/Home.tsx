import React from 'react';
import Container from '@mui/material/Container';
import Box from '@material-ui/core/Box';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

import bg from "../../Assets/Home/landingBg.png";

const styles = {
    paperContainer: {
        backgroundImage: `url(${bg})`
    }
};

const Home = () => {
    return (
        <>
            <Paper  style={styles.paperContainer}
                sx={{
                    position: 'relative',
                    mb: 4,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height:"80Vh",

                }}
            >
                <Grid container  alignItems="left" direction="row">
                    <Grid item md={6} >
                            <Typography component="h1" variant="h3" color="inherit" gutterBottom style={{ wordWrap: "break-word" }}>
                                We Will Do
                                Your All Work
                            </Typography>
                            <Typography variant="h5" color="inherit" paragraph>
                                We Are The Best Solution For You Can Also Find Job
                                Opportunities And Avail Services. Come Join Flash Work.
                            </Typography>
                            <Link variant="subtitle1" href="#">
                                link
                            </Link>
                    </Grid>

                    <Grid item md={6}>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
};

export default Home;
