import React from 'react';
import Grid from '@mui/material/Grid';
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@mui/material/Button";

const useStyles = makeStyles({
    cardback_1:{
        padding:'10px',
        color:'#4E2363',
    },

});
const Payment = () => {
    const  classes= useStyles();

    return (
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={4}>
                    {/*{[0, 1, 2].map((value) => (*/}
                    <Grid item>
                        <Card
                            sx={{
                                height: 500,
                                width: 300,
                                backgroundColor: '#E5E5E5',
                            }}
                        ><Grid container
                               spacing="4"
                               direction="column"
                               justifyContent="flex-start"
                               alignItems="flex-start"
                               sx={{p:'30px'}}

                        >
                            <Grid justifyContent={"left"} style={{textAlign:'left'}}>
                                <Typography variant={'h5'} className={classes.cardback_1}>Pro Member</Typography>
                                <Typography >•	Unlimited advertisement posting.<br/>
                                    •	Unlimited requests of workers.<br/>
                                    •	Priority when an advertisement is posted.<br/>
                                    •	Priority when requesting a job seeker.</Typography>
                            </Grid>
                            <Grid justifyContent={"left"} style={{textAlign:'left'}}>
                                <Typography variant={'h5'} className={classes.cardback_1}>Free Member</Typography>
                                <Typography >•	Advertisement can be posted once a day<br/>
                                    •	Limited requests of workers<br/>
                                    •	Less priority when an advertisement is posted.<br/>
                                    •	Less priority when requesting a job seeker.</Typography>
                            </Grid>
                        </Grid>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card sx={{
                            height: 230,
                            width: 200,
                            backgroundColor: '#E5E5E5',
                            padding:'20px',}}>
                            <Typography variant={'h5'} fontWeight={'700'} textAlign='left'>1 Year</Typography>
                            <Typography fontSize={'24px'} fontWeight={'700'} color={'#7A3293'} textAlign='left'>833.33 LKR<span style={{fontSize:'16px'}}> / month</span></Typography>
                            <Typography variant={'subtitle1'} textAlign='left' marginBottom={'50px'} >10000 LKR every 12 month</Typography>
                            <Typography fontSize={'11px'} textAlign='left'marginBottom={'10px'}>•	VAT and local taxes may apply</Typography>

                            <Button variant="contained" sx={{backgroundColor:'#4E2363'}} >Subscribe Now</Button>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card sx={{
                            height: 230,
                            width: 200,
                            backgroundColor: '#E5E5E5',
                            padding:'20px',}}>
                            <Typography variant={'h5'} fontWeight={'700'} textAlign='left'>1 Month</Typography>
                            <Typography fontSize={'24px'} fontWeight={'700'} color={'#7A3293'} textAlign='left'>1000 LKR<span style={{fontSize:'16px'}}> / month</span></Typography>
                            <Typography variant={'subtitle1'} textAlign='left' marginBottom={'50px'} >12000 LKR every 12 month</Typography>
                            <Typography fontSize={'11px'} textAlign='left'marginBottom={'10px'}>•	VAT and local taxes may apply</Typography>

                            <Button variant="contained" sx={{backgroundColor:'#4E2363'}} >Subscribe Now</Button>
                        </Card>
                    </Grid>
                    {/*))}*/}
                </Grid>
            </Grid>

        </Grid>
    );
};

export default Payment;
