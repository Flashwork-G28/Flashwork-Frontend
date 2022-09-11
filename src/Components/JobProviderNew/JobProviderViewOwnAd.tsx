import { Button, Dialog, DialogContent, Grid, Paper, Typography } from '@mui/material';
import * as React from 'react';
import JobProviderPostAd from './JobProviderPostAd';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function JobProviderViewOwnAd() {

    const [isShown, setIsShown] = useState(false);

    const handleClick = () => {
        // toggle shown state
        setIsShown(current => !current);
        // or simply set it to true
        // setIsShown(true);
    };

    const [details, setDetails] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8000/jobs/").then((response) => {
            setDetails(response.data);
            console.log(details);
            // const dataObj = {
            //     city: response.data[2].city,
            //     title: response.data[2].title,
            //     category: response.data[2].category,
            // };
            // console.log(dataObj);
            // var det = JSON.stringify(details, null, 4);
            // const sampleJSON = {details};
        });  
    }, []);
    if (!details) return null;
    
  return (
    
    <Paper sx={{padding: '0px 0px 20px 0px'}}>
        <Typography sx={{backgroundColor: '#ECD2F2'}} variant="h5" component="h5" fontWeight='700' color='primary' padding={2} paddingLeft={5} textAlign='left'>
            Job Advertisements
        </Typography> <br />
        <Grid container spacing={2} >
            <Grid item xs={12}>
                <Button variant='contained' onClick={handleClick} sx={{padding: '10px 20px', fontSize: '15px'}}>New Advertisement</Button>
                {/* show elements on click */}
                {isShown && (
                    <div>
                        <Typography variant="h5" component="h5" fontWeight='700' color='primary' marginTop={4} textAlign='center'>
                            Post A New Advertisement
                        </Typography> <br />
                    </div>
                )}

                {/* show component on click */}
                {isShown && <JobProviderPostAd />}
            </Grid>
            <Grid item xs={12}>
                {/* <p>{JSON.stringify(details, null, 4)}</p> */}
                <p>{}</p>
            </Grid>
        </Grid>
    </Paper>
  )
}
