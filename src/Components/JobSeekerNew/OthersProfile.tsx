import { Avatar, Grid, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import * as React from 'react';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function OthersProfile() {
    return (
        <Box sx={{padding: '0px 10px 10px 10px'}}>
        {/* <Grid container sx={{backgroundImage: 'linear-gradient(white, white, #e1bee7, #7A3293)', borderRadius: '0% 0% 10% 10%', boxShadow: '0 5px 20px rgba(0,0,0,0.30), 0 5px 20px rgba(0,0,0,0.22)'}}> */}
        <Grid container sx={{borderRadius: '10%', boxShadow: '0 5px 20px rgba(0,0,0,0.30), 0 5px 20px rgba(0,0,0,0.22)'}}>
            <Grid padding="20px" item xs={12}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'}}><Avatar sx={{width: '100px', height: '100px'}} alt="User image"/></div>
            </Grid>
            <Grid item xs={12}>
                <Typography sx={{overflowWrap: 'break-word'}} variant="h4" component="h4" color="primary">
                    Name
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography sx={{overflowWrap: 'break-word', padding: '5px 0px'}} component="legend" color="#9e9e9e">
                    City
                </Typography>
            </Grid>
            {/* <Grid padding= '10px 0px' item xs={6} sx={{display: 'flex', alignItems: 'center', justifyContent: 'right', paddingRight: '6px'}}>
                <PhoneIcon />
            </Grid>
            <Grid padding= '10px 0px' item xs={6} sx={{display: 'flex', alignItems: 'center', justifyContent: 'left', paddingLeft: '6px'}}>
                <MailIcon />
            </Grid> */}
            <Grid xs={12}>
                <Rating name="read-only" value={3} sx={{overflowWrap: 'break-word', padding: '10px 0px'}} readOnly/>
            </Grid>
            <Grid item xs={12}>
                <div>
                <Typography sx={{overflowWrap: 'break-word'}} padding="40px 30px">
                    Bio
                </Typography>
                </div>
            </Grid>
            </Grid>
    </Box>
    )
}