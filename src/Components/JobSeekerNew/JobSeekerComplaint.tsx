import React from "react";
import { Button, Card, Paper, Rating, TextField, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box } from "@mui/system";
import { shadows } from '@mui/system';
import { Session } from "inspector";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Swal from 'sweetalert2';
// import { CKEditor } from 'ckeditor4-react';

export default function JobSeekerComplaint() {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    
    const {user} = useAuth0();

    const validationSchema = yup.object({
        email: yup
            .string()
            .email('Enter a valid email')
            .required('Email is required'),
        // password: yup
        //     .string()
        //     .min(8, 'Password should be of minimum 8 characters length')
        //     .required('Password is required'),
        reason: yup
            .string()
            .required('Please provide a reason for your complaint'),
        rating: yup
            .string()
            .required('Rate your complaint'),        
    });
    
    const formik = useFormik({
        initialValues: {
          email: user?.email,
        //   password: '',
          date: date,
          reason: '',
          rating: null,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            axios.post('http://localhost:8000/complaints/JobSeekerCompl', {
                email: values.email,
                reason: values.reason,
                rating: values.rating,
            })
            .then(function (response) {
                console.log(response);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Complaint has been successfully posted',
                    showConfirmButton: false,
                    timer: 3000
                });
                formik.resetForm();
              })
              .catch(function (error) {
                //console.log(error);
              });
          //alert(JSON.stringify(values, null, 5));
        },
    })

    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
          color: '#ff6d75',
        },
        '& .MuiRating-iconHover': {
          color: '#ff3d47',
        },
    });

    const ButtonHover = styled(Button)({
        '&:hover': {
            backgroundColor: 'red',
            color: 'black',
            transform: 'scale(1.05)',
            transition: 'ease .4s',
            // borderRadius: '0px'
        }
    });

    return (
        <div>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <Typography sx={{backgroundColor: '#ECD2F2'}} variant="h4" component="h4" fontWeight='700' color='primary' padding={2} textAlign='left'>
                    Complaints
                </Typography> <br />
                <form onSubmit={formik.handleSubmit} style={{padding: '20px'}}>
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        type="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        placeholder="example@example.com"
                    /> <br /><br />
                    {/* <TextField
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    /> <br /><br /> */}
                    <TextField
                        fullWidth
                        id="date"
                        name="date"
                        label="Date"
                        value={formik.values.date}
                        disabled
                    /> <br /><br />
                    <TextField
                        fullWidth
                        id="reason"
                        name="reason"
                        label="Reason"
                        value={formik.values.reason}
                        onChange={formik.handleChange}
                        error={formik.touched.reason && Boolean(formik.errors.reason)}
                        helperText={formik.touched.reason && formik.errors.reason}
                    /><br /><br />
                    {/* <CKEditor /> */}
                    <Typography color="primary" align="center" variant="h5" sx={{marginTop: '20px', marginBottom: '10px'}}>
                        Rate your complaint (Higher the rating, worse the case!!)
                    </Typography>
                    <StyledRating 
                        id="rating" 
                        name="rating"
                        defaultValue={0} max={10} 
                        size="large" 
                        sx={{marginBottom: '40px'}}
                        value={formik.values.rating}
                        onChange={formik.handleChange}
                    /> <br />

                    <ButtonHover color="secondary" variant="contained" fullWidth type="submit" 
                    sx={{marginBottom: '10px', padding: '15px 8px', fontSize: '18px', borderRadius: '10px', width: '20%', transition: 'ease .4s', boxShadow: '0 5px 20px rgba(0,0,0,0.30), 0 5px 20px rgba(0,0,0,0.22)' }}>
                        Submit
                    </ButtonHover> <br /><br />
                </form>
            </Paper>
            
        </div>  
    )
}