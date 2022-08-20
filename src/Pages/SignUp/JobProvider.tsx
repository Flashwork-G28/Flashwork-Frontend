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
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';

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
                <Card sx={{ mt: 6 }}>
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
                                    <TextField fullWidth id="last-name" label="Last Name" variant="outlined" required />
                                </Grid>
                                <Grid item xs={12} sx={{ m: 2 }}>
                                    <InputLabel id="demo-simple-select-helper-label" >Gender</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="gender"
                                        id="gender"
                                        label="gender"
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
                                    <TextField fullWidth id="tagile" label="Tagile" variant="outlined" required />
                                </Grid>
                                <Grid item xs={12} sx={{ m: 2 }}>
                                    <TextField fullWidth id="description" label="Description" variant="outlined" required />
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
                                    <TextField fullWidth id="street" label="Street" variant="outlined" required />
                                </Grid>
                                <Grid item xs={12} sx={{ m: 2 }}>
                                    <TextField fullWidth id="city" label="City" variant="outlined" required />
                                </Grid>
                                <Grid item xs={12} sx={{ m: 2 }}>
                                    <Typography gutterBottom variant="h6" component="div"  align={"left"} >
                                        Contact Details
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ m: 2 }}>
                                    <TextField
                                        fullWidth
                                        id="mobile"
                                        label="Mobile"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">+94</InputAdornment>,
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
                                    <TextField fullWidth id="email" label="E-mail Address" variant="outlined" required />
                                </Grid>
                                <Grid item xs={12} sx={{ m: 2 }}>
                                    <TextField  fullWidth id="password" label="Password*" variant="outlined" required />
                                </Grid>
                                <Grid item xs={12} sx={{ m: 2 }}>
                                    <Typography gutterBottom variant="body2" component="div"  align={"left"} >
                                        Please make sure that your password contain at least,
                                        <ul> 8 characters</ul>
                                        <ul> 1 uppercase lettes</ul>
                                        <ul> 1 lowercase letters</ul>
                                        <ul> 1 number and 1 special characters</ul>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ m: 4 }}>
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
