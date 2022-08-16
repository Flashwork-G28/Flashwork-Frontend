import React from 'react';
import Container from '@mui/material/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const useStyles = makeStyles({
    root:{
        backgroundColor: "#D89EE7",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        backgroundSize: "cover",
    },
    container: {
        width: "auto",
        margin: "0 auto",
        paddingTop: 10,
        paddingBottom: 10,
        minHeight: "100vh",
    },
        select: {
            "& :focus": {
           backgroundColor: "transparent",
       },
    },


    })
;

const JobSeeker = () => {
    const classes= useStyles();
    return (
        <div className={classes.root}>
            <Container className={classes.container}>
                <Card >
                    <CardContent sx={{display: 'flex',alignItems: 'left'}}>
                        <Typography gutterBottom variant="h5" component="div">
                            Job Seeker Sign Up
                        </Typography>
                    </CardContent>
                    <form>
                        <Grid container justifyContent="flex-start" spacing={3} >
                            <Grid item xs={4} container justifyContent="flex-start" alignItems="flex-start">
                                <Typography gutterBottom variant="h6" component="div"  align={"left"} sx={{ m: 2 }}>
                                    Basic Details
                                </Typography>
                                <Box sx={{ m: 2, display: 'flex' }} >
                                    <TextField id="first-name" label="First Name" variant="outlined" required />
                                    <TextField id="last-name" label="Last Name" variant="outlined" required />
                                </Box>
                                <TextField id="nid" label="National ID" variant="outlined" required sx={{ m: 2,width: 380}}/>

                                <Box sx={{ m: 2}}>
                                    <InputLabel id="demo-simple-select-outlined-label">
                                        Gender
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined"
                                        label="Gender"
                                        className={classes.select}
                                    >
                                        <MenuItem value="Male">Male</MenuItem>
                                        <MenuItem value="Female">Female</MenuItem>
                                        <MenuItem value="Other">Other</MenuItem>
                                    </Select>
                                </Box>
                                <Typography gutterBottom variant="h6" component="div"  align={"left"} sx={{ m: 2 }}>
                                    About
                                </Typography>

                            </Grid>



                            <Grid item xs={4}>
                                <Typography gutterBottom variant="h6" component="div"  align={"left"} sx={{ m: 2 }}>
                                    Location
                                </Typography>
                                <Box sx={{ m: 2, display: 'flex' }} >
                                    <TextField id="street" label="Street" variant="outlined" />
                                    <TextField id="city" label="City" variant="outlined" />
                                </Box>
                                <Typography gutterBottom variant="h6" component="div"  align={"left"} sx={{ m: 2 }}>
                                    Contact Details
                                </Typography>
                                <TextField id="mobile" label="Mobile" variant="outlined" required sx={{ m: 2,width: 380}}/>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography gutterBottom variant="h6" component="div"  align={"left"} sx={{ m: 2 }}>
                                    Login Credentials
                                </Typography>
                                <TextField id="mobile" label="Mobile" variant="outlined" required sx={{ m: 2,width: 380}}/>
                                <TextField id="mobile" label="Mobile" variant="outlined" required sx={{ m: 2,width: 380}}/>
                                <TextField id="mobile" label="Mobile" variant="outlined" required sx={{ m: 2,width: 380}}/>

                                <Typography variant="caption" display="block">
                                    Please make sure that your password contains at
                                    least,
                                    <ul>
                                        <li>8 characters</li>
                                        <li>1 uppercase letter</li>
                                        <li>1 lowercase letter</li>
                                        <li>1 number and 1 special character</li>
                                    </ul>
                                </Typography>
                            </Grid>
                        </Grid>
                    </form>
                </Card>
            </Container>
        </div>
    );
};

export default JobSeeker;
