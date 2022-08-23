import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useAuth0 } from "@auth0/auth0-react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import YupPassword from 'yup-password';
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
const axios = require('axios');

YupPassword(yup);

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

const validationSchema = yup.object({
    firstName: yup.string().required('First Name Required !'),
    lastName: yup.string().required('Last Name Required !'),
    // gender: yup.string().required('Gender Required !'),
    street: yup.string().required('Street Required !').max(150),
    city: yup.string().required('City Name Required !'),
    mobile: yup.string().min(9, "to short").max(9, "to long").required('Mobile Number Required !').matches(phoneRegExp, 'Phone number is not valid'),
    email: yup.string().email().required('E-Mail Name Required !'),
    password: yup.string()
        .required('Please Enter your password')
        .min(8,"Must Contain 8 Characters").minLowercase(1, 'password must contain at least 1 lower case letter')
        .minUppercase(1, 'password must contain at least 1 upper case letter')
        .minNumbers(1, 'password must contain at least 1 number')
        .minSymbols(1, 'password must contain at least 1 special character'),
    nid:yup.string().required('National ID Required !').min(10, "to short").max(12, "to long"),
    description:yup.string().required('Description Required !'),
});


const JobProvider = () => {
    const navigate = useNavigate()
    const classes = useStyles();
    const {
        loginWithRedirect,
    } = useAuth0();


    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            street:'',
            city:'',
            mobile:'',
            email:'',
            password:'',
            nid:'',
            description:''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('about to submit:', values);
            axios.post('http://localhost:8000/register/jobseeker', {
                firstName: values.firstName,
                lastName: values.lastName,
                street: values.street,
                city: values.city,
                mobile:values.mobile,
                email: values.email,
                password: values.password,
                nid:values.nid,
                description:values.description
            })
                .then(function (response: any) {
                    console.log(response);
                    const MySwal = withReactContent(Swal)
                    MySwal.fire({
                        title: 'Create Account Successfully',
                        timer: 2000,
                        timerProgressBar: true,
                        didOpen: () => {
                            Swal.showLoading()
                        },
                        willClose: () => {
                        }
                    }).then((result) => {
                        /* Read more about handling dismissals below */
                        if (result.dismiss === Swal.DismissReason.timer) {
                            navigate("/", { replace: false });
                        }
                    })

                })
                .catch(function (error: any) {
                    console.log(error);
                });
        },
    });

    const [catagoris, setCatagoris] = React.useState('');

    const handleChangeCatagoris = (event: SelectChangeEvent) => {
        setCatagoris(event.target.value);
    };


    return (
        <div className={classes.root}>
            <Container className={classes.container} >
                <Card >
                    <CardContent sx={{display: 'flex',alignItems: 'left',paddingBottom:0}}>
                        <Typography gutterBottom variant="h5" component="div">
                            Job Seeker Sign Up
                        </Typography>
                    </CardContent>
                    <form onSubmit={formik.handleSubmit}>
                        <Grid container
                              direction="row"
                              justifyContent="flex-start"
                              alignItems="flex-start" sx={{pt:0}}>
                            <Grid  xs={4} direction="column"  >
                                <Grid item xs={12} sx={{ m: 2 }}>
                                    <Typography gutterBottom variant="h6" component="div"  align={"left"} >
                                        Basic Details
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ m: 2 }}>
                                    <TextField fullWidth id="firstName" label="First Name" variant="outlined"
                                               value={formik.values.firstName}
                                               onChange={formik.handleChange}
                                               error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                               helperText={formik.touched.firstName && formik.errors.firstName}/>
                                </Grid>
                                <Grid item xs={12} sx={{ m: 2 }}>
                                    <TextField fullWidth id="lastName" label="Last Name" variant="outlined"
                                               value={formik.values.lastName}
                                               onChange={formik.handleChange}
                                               error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                               helperText={formik.touched.lastName && formik.errors.lastName}/>
                                </Grid>
                                <Grid item xs={12} sx={{ m: 2 }}>
                                    <TextField fullWidth id="nid" label="ID Number" variant="outlined"
                                               value={formik.values.nid}
                                               onChange={formik.handleChange}
                                               error={formik.touched.nid && Boolean(formik.errors.nid)}
                                               helperText={formik.touched.nid && formik.errors.nid}/>
                                </Grid>
                                <Grid item xs={12} sx={{ m: 2 }}>
                                    <FormControl>
                                        <FormLabel id="demo-row-radio-buttons-group-label" sx={{fontSize:"18px"}}>Gender</FormLabel>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                            sx={{ml:2}}
                                        >
                                            <FormControlLabel value="male" control={<Radio />} label="Male" defaultValue="male" />
                                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sx={{ m: 2 }}>
                                    <Typography gutterBottom variant="h6" component="div"  align={"left"} >
                                        About
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ m: 2 }}>
                                    <FormControl fullWidth >
                                        <InputLabel id="demo-select-small">All Catagoris</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={catagoris}
                                            label="Catagoris"
                                            onChange={handleChangeCatagoris}>
                                            <MenuItem value="">
                                                <em>All Catagoris</em>
                                            </MenuItem>
                                            <MenuItem value={1}>Restaurant & food services</MenuItem>
                                            <MenuItem value={2}>Transportation & delivery</MenuItem>
                                            <MenuItem value={3}>Retail & Production</MenuItem>
                                            <MenuItem value={4}>Office work & Administration</MenuItem>
                                            <MenuItem value={5}>General services</MenuItem>
                                        </Select>
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
                                <Grid item xs={12} sx={{ m: 2 }}>
                                    <TextField fullWidth id="street" label="Street" variant="outlined"
                                               value={formik.values.street}
                                               onChange={formik.handleChange}
                                               error={formik.touched.street && Boolean(formik.errors.street)}
                                               helperText={formik.touched.street && formik.errors.street}/>
                                </Grid>
                                <Grid item xs={12} sx={{ m: 2 }}>
                                    <TextField fullWidth id="city" label="City" variant="outlined"
                                               value={formik.values.city}
                                               onChange={formik.handleChange}
                                               error={formik.touched.city && Boolean(formik.errors.city)}
                                               helperText={formik.touched.city && formik.errors.city}/>
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
                                        }}
                                        value={formik.values.mobile}
                                        onChange={formik.handleChange}
                                        error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                                        helperText={formik.touched.mobile && formik.errors.mobile}/>

                                </Grid>
                                <Grid item xs={12} sx={{ m: 2,mt:12 }}>
                                    <TextField fullWidth id="description" label="Description" variant="outlined"
                                               value={formik.values.description}
                                               onChange={formik.handleChange}
                                               error={formik.touched.description && Boolean(formik.errors.description)}
                                               helperText={formik.touched.description && formik.errors.description}/>
                                </Grid>
                            </Grid>
                            <Grid  xs={4} direction="column">
                                <Grid item xs={12} sx={{ m: 2 }}>
                                    <Typography gutterBottom variant="h6" component="div"  align={"left"} >
                                        Login Credentials
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ m: 2 }}>
                                    <TextField fullWidth id="email" label="E-mail Address" variant="outlined"
                                               value={formik.values.email}
                                               onChange={formik.handleChange}
                                               error={formik.touched.email && Boolean(formik.errors.email)}
                                               helperText={formik.touched.email && formik.errors.email}/>
                                </Grid>
                                <Grid item xs={12} sx={{ m: 2 }}>
                                    <TextField fullWidth id="password" label="Password" variant="outlined"
                                               value={formik.values.password}
                                               onChange={formik.handleChange}
                                               error={formik.touched.password && Boolean(formik.errors.password)}
                                               helperText={formik.touched.password && formik.errors.password}/>
                                </Grid>
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
                                    <Stack spacing={4} direction="row" sx={{ ml: 2, mt: 7 }}>
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
