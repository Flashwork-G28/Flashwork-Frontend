import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import InputAdornment from '@mui/material/InputAdornment';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';

const useStyles = makeStyles({
        root:{
            backgroundColor: "#D89EE7",
            backgroundAttachment: "fixed",
            minHeight: "100vh",
            backgroundSize: "cover",
            alignItem: "center",
            justifyContent: "center"

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

const JobProvider = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container className={classes.container} >
                <Card >
                    <CardContent sx={{display: 'flex',alignItems: 'left'}}>
                        <Typography gutterBottom variant="h5" component="div">
                            Job Seeker Sign Up
                        </Typography>
                    </CardContent>
                    <form >
                        <Grid container
                              direction="row"
                              justifyContent="flex-start"
                              alignItems="flex-start" >
                            <Grid  xs={4} direction="column"  >
                                <Grid item xs={12} sx={{ m: 2 }}>
                                    <Typography gutterBottom variant="h6" component="div"  align={"left"} >
                                        Basic Details
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ m: 2 }}>
                                    <TextField fullWidth id="firstName" label="First Name" variant="outlined" required />
                                </Grid>
                                <Grid item xs={12} sx={{ m: 2 }}>
                                    <TextField id="last-name" label="Last Name" variant="outlined" required />
                                </Grid>
                                <Grid item xs={12} sx={{ m: 2 }}>
                                    <Select
                                            sx={{ minWidth: 140 }}
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Gender"

                                    >
                                        <MenuItem value={"male"}>Male</MenuItem>
                                        <MenuItem value={"female"}>Female</MenuItem>
                                    </Select>
                                </Grid>
                                <Grid item xs={12} sx={{ m: 2 }}>
                                    <Typography gutterBottom variant="h6" component="div"  align={"left"} >
                                        About
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ m: 2 }}>
                                    <TextField id="first-name" label="First Name" variant="outlined" required />
                                </Grid>
                                <Grid item xs={12} sx={{ m: 2 }}>
                                    <TextField id="last-name" label="Last Name" variant="outlined" required />
                                </Grid>
                                <Grid item xs={12} sx={{ m: 2 }}>
                                    <Typography gutterBottom variant="overline" component="div"  align={"left"} >
                                        Have a account already? <Link to="/SignIn">Sign In</Link>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid xs={4} direction="column">
                                <Grid item xs={12} sx={{ m: 2 }}>
                                    <Typography gutterBottom variant="h6" component="div"  align={"left"} >
                                        Location
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ m: 2 }}>
                                    <TextField id="first-name" label="Street" variant="outlined" required />
                                </Grid>
                                <Grid item xs={12} sx={{ m: 2 }}>
                                    <TextField id="last-name" label="City" variant="outlined" required />
                                </Grid>
                                <Grid item xs={12} sx={{ m: 2 }}>
                                    <Typography gutterBottom variant="h6" component="div"  align={"left"} >
                                        Contact Details
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ m: 2 }}>
                                    <TextField
                                        label="Mobile"
                                        id="outlined-start-adornment"
                                        sx={{ m: 1, width: '25ch' }}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">+98</InputAdornment>,
                                        }}/>
                                </Grid>

                            </Grid>
                            <Grid  xs={4} direction="column">
                                <Grid item xs={12} sx={{ m: 2 }}>
                                    <Typography gutterBottom variant="h6" component="div"  align={"left"} >
                                        Login Credentials
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ m: 2 }}>
                                    <TextField id="first-name" label="E-mail Address" variant="outlined" required />
                                </Grid>
                                <Grid item xs={12} sx={{ m: 2 }}>
                                    <TextField id="last-name" label="Password*" variant="outlined" required />
                                </Grid>
                                <Grid item xs={12} sx={{ m: 2 }}>
                                    <Typography gutterBottom variant="body2" component="div"  align={"left"} >
                                        Please make sure that your password contain at least,
                                        <ul>8 characters</ul>
                                        <ul>1 uppercase lettes</ul>
                                        <ul>1 lowercase letters</ul>
                                        <ul>1 number and 1 special characters</ul>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ m: 2 }}>
                                    <Stack spacing={2} direction="row">
                                        <Button variant="contained">Sign Up</Button>
                                        <Button variant="outlined">Cancel</Button>
                                    </Stack>

                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                </Card>
            </Container>
        </div>
    );
};

export default JobProvider;