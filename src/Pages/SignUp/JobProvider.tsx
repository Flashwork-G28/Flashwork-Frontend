import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormHelperText } from "@mui/material";

import { useAuth0 } from "@auth0/auth0-react";



import { useFormik } from 'formik';
import * as yup from 'yup';

interface State {
    password: string;
    showPassword: boolean;
    gender:string
}

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
            paddingTop: 40,
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

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const passwordRegExp = /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/;

const validationSchema = yup.object({
    firstName: yup.string().required('First Name Required !'),
    lastName: yup.string().required('Last Name Required !'),
    gender: yup.string().required('Gender Required !'),
    // street: yup.string().required('Street Required !').max(150),
    // city: yup.string().required('City Name Required !'),
    // mobile: yup.string().min(9, "to short").max(9, "to long").required('Mobile Number Required !').matches(phoneRegExp, 'Phone number is not valid'),
    // email: yup.string().email().required('E-Mail Name Required !'),
    // password: yup.string()
    //     .required('Please Enter your password')
    //     .matches(passwordRegExp,
    //         "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    //     ),

});
const topCat = [
    { title: 'Restaurant & food services' },
    { title: 'Transportation & delivery' },
    { title: 'Retail & Production' },
    { title: 'Office work & Administration' },
    { title: 'General services' },
    { title: 'Other' },

];

const JobProvider = () => {
    const classes = useStyles();
    const {
        loginWithRedirect,
    } = useAuth0();

    // const [values, setValues] = React.useState<State>({
    //     password: '',
    //     showPassword: false,
    // });

    const formik = useFormik({
        initialValues: {
            // firstName: '',
            // lastName: '',
            gender:'',
            // street:'',
            // city:'',
            // mobile:'',
            // email:'',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            console.log('about to submit:', values);
        },
    });


    // const handleChangeGender = (prop:keyof State) => (event: SelectChangeEvent) => {
    //     setValues({ ...values, [prop]: event.target.value });
    //
    // };

    // const handleChange =
    //     (prop:keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    //         setValues({ ...values, [prop]: event.target.value });
    //     };
    //
    // const handleClickShowPassword = () => {
    //     setValues({
    //         ...values,
    //         showPassword: !values.showPassword,
    //     });
    // };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <div className={classes.root}>
            <Container className={classes.container} >
                <Card >
                    <CardContent sx={{display: 'flex',alignItems: 'left'}}>
                        <Typography gutterBottom variant="h5" component="div">
                            Job Seeker Sign Up
                        </Typography>
                    </CardContent>
                    <form onSubmit={formik.handleSubmit}>
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
                                {/*<Grid item xs={12} sx={{ m: 2 }}>*/}
                                {/*    <TextField fullWidth id="firstName" label="First Name" variant="outlined"*/}
                                {/*               value={formik.values.firstName}*/}
                                {/*               onChange={formik.handleChange}*/}
                                {/*               error={formik.touched.firstName && Boolean(formik.errors.firstName)}*/}
                                {/*               helperText={formik.touched.firstName && formik.errors.firstName}/>*/}
                                {/*</Grid>*/}
                                {/*<Grid item xs={12} sx={{ m: 2 }}>*/}
                                {/*    <TextField fullWidth id="lastName" label="Last Name" variant="outlined"*/}
                                {/*               value={formik.values.lastName}*/}
                                {/*               onChange={formik.handleChange}*/}
                                {/*               error={formik.touched.lastName && Boolean(formik.errors.lastName)}*/}
                                {/*               helperText={formik.touched.lastName && formik.errors.lastName}/>*/}
                                {/*</Grid>*/}
                                <Grid item xs={12} sx={{ m: 2 }}>
                                    <FormControl fullWidth id={"gender"}>
                                        <InputLabel id="genderSelect">Gender</InputLabel>
                                        <Select
                                            labelId="genderSelect"
                                            id="gender"
                                            label="Gender"
                                            value={formik.values.gender}
                                            onChange={formik.handleChange}
                                            error={
                                                Boolean(formik.touched.gender && formik.errors.gender)
                                            }
                                        >
                                            <MenuItem value={"Male"}>Male</MenuItem>
                                            <MenuItem value={"Female"}>Female</MenuItem>
                                        </Select>
                                        {formik.touched.gender && formik.errors.gender ? (
                                            <FormHelperText
                                                sx={{ color: "#bf3333", marginLeft: "16px !important" }}
                                            >
                                                {formik.touched.gender && formik.errors.gender}
                                            </FormHelperText>
                                        ) : null}
                                    </FormControl>
                                </Grid>
                                    <Grid item xs={12} sx={{ m: 2 }}>
                                        <Typography gutterBottom variant="overline" component="div"  align={"left"} >
                                            Have a account already? <Link to={"/"} onClick={() => loginWithRedirect()}>Sign In</Link>
                                        </Typography>
                                    </Grid>
                            </Grid>
                            <Grid xs={4} direction="column">
                                    <Grid item xs={12} sx={{ m: 2 }}>
                                        <Typography gutterBottom variant="h6" component="div"  align={"left"} >
                                            Location
                                        </Typography>
                                    </Grid>
                                    {/*<Grid item xs={12} sx={{ m: 2 }}>*/}
                                    {/*    <TextField fullWidth id="street" label="Street" variant="outlined"*/}
                                    {/*               value={formik.values.street}*/}
                                    {/*               onChange={formik.handleChange}*/}
                                    {/*               error={formik.touched.street && Boolean(formik.errors.street)}*/}
                                    {/*               helperText={formik.touched.street && formik.errors.street}/>*/}
                                    {/*</Grid>*/}
                                    {/*<Grid item xs={12} sx={{ m: 2 }}>*/}
                                    {/*    <TextField fullWidth id="city" label="City" variant="outlined"*/}
                                    {/*               value={formik.values.city}*/}
                                    {/*               onChange={formik.handleChange}*/}
                                    {/*               error={formik.touched.city && Boolean(formik.errors.city)}*/}
                                    {/*               helperText={formik.touched.city && formik.errors.city}/>*/}
                                    {/*</Grid>*/}
                                    <Grid item xs={12} sx={{ m: 2 }}>
                                        <Typography gutterBottom variant="h6" component="div"  align={"left"} >
                                            Contact Details
                                        </Typography>
                                    </Grid>
                                    {/*<Grid item xs={12} sx={{ m: 2 }}>*/}
                                    {/*    <TextField*/}
                                    {/*        fullWidth*/}
                                    {/*        id="mobile"*/}
                                    {/*        label="Mobile"*/}
                                    {/*        InputProps={{*/}
                                    {/*            startAdornment: <InputAdornment position="start">+94</InputAdornment>,*/}
                                    {/*        }}*/}
                                    {/*        value={formik.values.mobile}*/}
                                    {/*        onChange={formik.handleChange}*/}
                                    {/*        error={formik.touched.mobile && Boolean(formik.errors.mobile)}*/}
                                    {/*        helperText={formik.touched.mobile && formik.errors.mobile}/>*/}

                                    {/*</Grid>*/}

                                </Grid>
                            <Grid  xs={4} direction="column">
                                    <Grid item xs={12} sx={{ m: 2 }}>
                                        <Typography gutterBottom variant="h6" component="div"  align={"left"} >
                                            Login Credentials
                                        </Typography>
                                    </Grid>
                                    {/*<Grid item xs={12} sx={{ m: 2 }}>*/}
                                    {/*    <TextField fullWidth id="email" label="E-mail Address" variant="outlined"*/}
                                    {/*               value={formik.values.email}*/}
                                    {/*               onChange={formik.handleChange}*/}
                                    {/*               error={formik.touched.email && Boolean(formik.errors.email)}*/}
                                    {/*               helperText={formik.touched.email && formik.errors.email}/>*/}
                                    {/*</Grid>*/}
                                    {/*<Grid item xs={12} sx={{ m: 2 }}>*/}
                                    {/*    <FormControl fullWidth variant="outlined">*/}
                                    {/*        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>*/}
                                    {/*        <OutlinedInput*/}
                                    {/*            id="outlined-adornment-password"*/}
                                    {/*            type={values.showPassword ? 'text' : 'password'}*/}
                                    {/*            value={values.password}*/}
                                    {/*            onChange={handleChange('password')}*/}
                                    {/*            endAdornment={*/}
                                    {/*                <InputAdornment position="end">*/}
                                    {/*                    <IconButton*/}
                                    {/*                        aria-label="toggle password visibility"*/}
                                    {/*                        onClick={handleClickShowPassword}*/}
                                    {/*                        onMouseDown={handleMouseDownPassword}*/}
                                    {/*                        edge="end"*/}
                                    {/*                    >*/}
                                    {/*                        {values.showPassword ? <VisibilityOff /> : <Visibility />}*/}
                                    {/*                    </IconButton>*/}
                                    {/*                </InputAdornment>*/}
                                    {/*            }*/}
                                    {/*            label="Password"*/}
                                    {/*        />*/}
                                    {/*    </FormControl>*/}
                                    {/*</Grid>*/}
                                <Grid item xs={12} sx={{ m: 2 }}>
                                    <Typography gutterBottom variant="body2" component="div"  align={"left"} >
                                        Please make sure that your password contain at least,
                                        <ul>- 8 characters</ul>
                                        <ul>- 1 uppercase letters</ul>
                                        <ul>- 1 lowercase letters</ul>
                                        <ul>- 1 number and 1 special characters</ul>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ m: 2 }} >
                                    <Stack spacing={4} direction="row" sx={{ mt: 8 }}>
                                        <Button variant="contained" type="submit">Sign Up</Button>
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
