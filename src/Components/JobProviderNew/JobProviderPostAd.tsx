import { Button, FormControl, FormHelperText, Grid, Input, Paper, styled, TextareaAutosize, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useAuth0 } from "@auth0/auth0-react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';



export default function JobProviderPostAd() {
    const {user} = useAuth0();
    // const axios = require('axios').default;
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    const ButtonHover = styled(Button)({
        '&:hover': {
            marginBottom: '10px', 
            marginTop: '10px',
            backgroundColor: 'transparent',
            border: '2px solid purple',
            color: 'black',
            transform: 'scale(1.05)',
            transition: 'ease .4s',
        }
    })

    const defaultValues = {
        name: '',
        jobCatgeory: '',
        city: '',
        reqMemberCount: null,
        paymentPerWorker: null,
        date: date,
        description: '',
    }

    const [ formValues, setFormValues ] = useState(defaultValues);

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        axios.post('/JobAdPost', {
            name: formValues.name,
            jobCatgeory: formValues.jobCatgeory,
            city: formValues.city,
            reqMemberCount: formValues.reqMemberCount,
            paymentPerWorker: formValues.paymentPerWorker,
            date: formValues.date,
            description: formValues.description,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        alert(JSON.stringify(formValues, null, 5));
    }

  return (
    <Paper>
        <Typography variant="h6" component="h6" fontWeight='700' textAlign='left' padding='50px 0px 0px 40px'>
            Job Advertisement
        </Typography>
        <form onSubmit={handleSubmit} style={{padding: '20px'}}>
            <Grid container spacing={2} sx={{padding: '20px'}}>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        id='name'
                        name='name'
                        type='text'
                        label='Name'
                        value={formValues.name}
                        onChange={handleInputChange}
                        // error={formik.touched.name && Boolean(formik.errors.name)}
                        // helperText={formik.touched.name && formik.errors.name}
                        inputProps={{ readOnly: false, }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel id='selectJob'>Job Category</InputLabel>
                        <Select
                            labelId='selectJob'
                            id='jobCatgeory'
                            name='jobCatgeory'
                            value={formValues.jobCatgeory}
                            onChange={handleInputChange}
                            // error={formik.touched.category && Boolean(formik.errors.category)}
                            fullWidth
                            label='Job Category'
                        >
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value='carp'>Carpentary</MenuItem>
                            <MenuItem value='elec'>Electrical</MenuItem>
                            <MenuItem value='plum'>Plumbing</MenuItem>
                            <MenuItem value='gard'>Gardening</MenuItem>
                            <MenuItem value='mas'>Mason</MenuItem>
                            <MenuItem value='paint'>Painting</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel id='selectCity'>City</InputLabel>
                        <Select
                            labelId='selectCity'
                            id='city'
                            name='city'
                            value={formValues.city}
                            onChange={handleInputChange}
                            fullWidth
                            label='City'
                        >
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value="1">Colombo</MenuItem>
                            <MenuItem value="2">Galle</MenuItem>
                            <MenuItem value="3">Kandy</MenuItem>
                            <MenuItem value="4">Matara</MenuItem>
                            <MenuItem value="5">Negombo</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        id='reqMemberCount'
                        name='reqMemberCount'
                        type='text'
                        label='Required Member Count'
                        value={formValues.reqMemberCount}
                        onChange={handleInputChange}
                        // error={formik.touched.reqMemberCount && Boolean(formik.errors.reqMemberCount)}
                        // helperText={formik.touched.reqMemberCount && formik.errors.reqMemberCount}
                        inputProps={{ readOnly: false, }}           
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField 
                        fullWidth
                        id='paymentPerWorker'
                        name='paymentPerWorker'
                        type='text'
                        label='Payment Per Worker (Rs.)'
                        value={formValues.paymentPerWorker}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField 
                        fullWidth
                        id='date'
                        name='date'
                        label='Date'
                        value={formValues.date}
                        disabled
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id='description'
                        name='description'
                        label='Description'
                        value={formValues.description}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <ButtonHover color='secondary' variant='contained' fullWidth type='submit'
                    sx={{marginBottom: '10px', marginTop: '20px', padding: '15px 40px', fontSize: '16px', borderRadius: '50px', maxWidth: 'fit-content', transition: 'ease .4s', boxShadow: '0 5px 20px rgba(0,0,0,0.30), 0 5px 20px rgba(0,0,0,0.22)' }}>
                        Post Advertisement
                    </ButtonHover>
                </Grid>
            </Grid>
        </form>
    </Paper>
  )
}
