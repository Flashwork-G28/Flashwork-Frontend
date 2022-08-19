import React from 'react';
import Container from '@mui/material/Container';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box, { BoxProps } from '@mui/material/Box'

import bg from "../../Assets/Home/SideImage.png";
import HomeServiceCard from "../../Components/HomeCard/HomeServiceCard";
import UsersCountingSection from "../../Components/HomeCard/UsersCountingSection";
import UnicFirstPage from "../../Components/HomeCard/UnicFirstPage";

// const styles = {
//     paperContainer: {
//         backgroundImage: `url(${bg})`
//     }
// };
// function Item(props: BoxProps) {
//     const { sx, ...other } = props;
//     return (
//         <Box
//             sx={{
//                 p: 1,
//                 m: 1,
//                 fontSize: '0.875rem',
//                 fontWeight: '700',
//
//             }}
//             {...other}
//         />
//     );
// }

const Home = () => {
    return (
        <>

            {/*<div style={{ width: '100%', height:'100vh' }}>*/}
            {/*    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>*/}
            {/*        <UnicFirstPage />*/}
            {/*        <div style={{backgroundImage:`url(${bg})`}}></div>*/}

            {/*    </Box>*/}
            {/*</div>*/}
            <UnicFirstPage />

            <UsersCountingSection/>
            <HomeServiceCard/>
        </>
    );
};

export default Home;

{/*<Paper  style={styles.paperContainer}*/}
{/*    sx={{*/}
{/*        position: 'relative',*/}
{/*        mb: 4,*/}
{/*        backgroundSize: 'cover',*/}
{/*        backgroundRepeat: 'no-repeat',*/}
{/*        backgroundPosition: 'center',*/}
{/*        height:"80Vh",*/}

{/*    }}*/}
{/*>*/}
{/*    <Grid container  alignItems="left" direction="row">*/}
{/*        <Grid item md={6} >*/}
{/*                <Typography component="h1" variant="h3" color="inherit" gutterBottom style={{ wordWrap: "break-word" }}>*/}
{/*                    We Will Do*/}
{/*                    Your All Work*/}
{/*                </Typography>*/}
{/*                <Typography variant="h5" color="inherit" paragraph>*/}
{/*                    We Are The Best Solution For You Can Also Find Job*/}
{/*                    Opportunities And Avail Services. Come Join Flash Work.*/}
{/*                </Typography>*/}
{/*                <Link variant="subtitle1" href="#">*/}
{/*                    link*/}
{/*                </Link>*/}
{/*        </Grid>*/}

{/*        <Grid item md={6}>*/}
{/*        </Grid>*/}
{/*    </Grid>*/}
{/*</Paper>*/}