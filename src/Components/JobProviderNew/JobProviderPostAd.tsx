import { Button, FormControl, FormHelperText, Grid, Input, Paper, styled, TextareaAutosize, TextField, TextFieldProps, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import PostAddIcon from '@mui/icons-material/PostAdd';
import Swal from 'sweetalert2';

export default function JobProviderPostAd() {
    const {user} = useAuth0();
    // const axios = require('axios').default;
    var today = new Date();
    // var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

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
        title: '',
        category: '',
        apply_type: '',
        city: '',
        rmc: '',
        amc: '',
        pay: 1000,
        job_date: '',
        description: '',
    }

    const [ formValues, setFormValues ] = useState(defaultValues);

    const [value, setValue] = React.useState<Date | null>(null);

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (e: {target: any; preventDefault: () => void;}) => {
        e.preventDefault();

        let seeker_id:any = user?.sub;
        seeker_id = seeker_id.substring(6);

        axios.post('http://localhost:8000/jobs/JobAdPost', {
            title: formValues.title,
            category: formValues.category,
            apply_type: formValues.apply_type,
            city: formValues.city,
            rmc: formValues.rmc,
            amc: formValues.rmc,
            pay: formValues.pay,
            job_date: value,
            description: formValues.description,
            status: 1,
            seeker_id,
          })
          .then(function (response) {
            console.log(response);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Job has been successfully posted',
                showConfirmButton: false,
                timer: 3000
            });
            setFormValues({
                ...defaultValues,
              });
            setValue(null);
            // e.target.reset();
          })
          .catch(function (error) {
            console.log(error);
          });
        // alert(JSON.stringify(formValues, null, 5));
    }

    // Cancel button popup
    const cancelButton = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'All the changes will be discarded!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: 'btn btn-success',
            confirmButtonText: 'Confirm',
        }).then((result) => {
            if (result.isConfirmed) {
                setFormValues({...defaultValues,});
                setValue(null);
                // Swal.fire(
                //     'Cancelled!',
                //     'All changes have been cancelled',
                //     'error'
                // )
            }
        })
    }

  return (
    <Paper>
        <Typography sx={{backgroundColor: '#ECD2F2'}} variant="h5" component="h5" fontWeight='700' color='primary' padding={2} paddingLeft={5} textAlign='left'>
            Job Advertisement
        </Typography> <br />
        <form onSubmit={handleSubmit} style={{padding: '40px', paddingLeft: '70px'}} id="myForm" name='myForm' noValidate={false}>
            <Grid container spacing={4} sx={{padding: '25px', borderRadius: '10px', boxShadow: '0 5px 20px rgba(0,0,0,0.2), 0 5px 20px rgba(0,0,0,0.2)'}}>
                <Grid item xs={4}>
                    <TextField
                        required
                        // feedback="Looks good!"
                        fullWidth
                        id='title'
                        name='title'
                        type='text'
                        label='Title'
                        value={formValues.title}
                        onChange={handleInputChange}
                        // error={formik.touched.title && Boolean(formik.errors.title)}
                        // helperText={formik.touched.title && formik.errors.title}
                        inputProps={{ readOnly: false, }}
                    />
                </Grid>
                <Grid item xs={4}>
                    <FormControl fullWidth>
                        <InputLabel id='selectJob'>Job Category</InputLabel>
                        <Select
                            required
                            labelId='selectJob'
                            id='category'
                            name='category'
                            value={formValues.category}
                            onChange={handleInputChange}
                            // error={formik.touched.category && Boolean(formik.errors.category)}
                            fullWidth
                            label='Job Category'
                        >
                            <MenuItem value="">
                            <em>All Categories</em>
                            </MenuItem>
                            <MenuItem value={1}>Restaurant & Food Services</MenuItem>
                            <MenuItem value={2}>Transportation & Delivery</MenuItem>
                            <MenuItem value={3}>Retail & Production</MenuItem>
                            <MenuItem value={4}>Office Work & Administration</MenuItem>
                            <MenuItem value={5}>General Services</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl fullWidth>
                        <InputLabel id='selectWorker'>Prefer Worker Type</InputLabel>
                        <Select
                            required
                            labelId='selectWorker'
                            id='apply_type'
                            name='apply_type'
                            value={formValues.apply_type}
                            onChange={handleInputChange}
                            // error={formik.touched.apply_type && Boolean(formik.errors.apply_type)}
                            fullWidth
                            label='Prefer Worker Type'
                        >
                            <MenuItem value="0">Both</MenuItem>
                            <MenuItem value='1'>Manpower Agency</MenuItem>
                            <MenuItem value='2'>Job Seeker</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel id='selectCity'>City</InputLabel>
                        <Select
                            required
                            labelId='selectCity'
                            id='city'
                            name='city'
                            value={formValues.city}
                            onChange={handleInputChange}
                            fullWidth
                            label='City'
                        >
                            <MenuItem value=""><em>All Cities</em></MenuItem>
                            <MenuItem value="Ampara">Ampara</MenuItem>
                            <MenuItem value="Anuradhapura">Anuradhapura</MenuItem>
                            <MenuItem value="Badulla">Badulla</MenuItem>
                            <MenuItem value="Batticaloa">Batticaloa</MenuItem>
                            <MenuItem value="Colombo">Colombo</MenuItem>
                            <MenuItem value="Galle">Galle</MenuItem>
                            <MenuItem value="Gampaha">Gampaha</MenuItem>
                            <MenuItem value="Hambantota">Hambantota</MenuItem>
                            <MenuItem value="Jaffna">Jaffna</MenuItem>
                            <MenuItem value="Kalutara">Kalutara</MenuItem>
                            <MenuItem value="Kandy">Kandy</MenuItem>
                            <MenuItem value="Kegalle">Kegalle</MenuItem>
                            <MenuItem value="Kilinochchi">Kilinochchi</MenuItem>
                            <MenuItem value="Kurunegala">Kurunegala</MenuItem>
                            <MenuItem value="Mannar">Mannar</MenuItem>
                            <MenuItem value="Matale">Matale</MenuItem>
                            <MenuItem value="Matara">Matara</MenuItem>
                            <MenuItem value="Monaragala">Monaragala</MenuItem>
                            <MenuItem value="Mullaitivu">Mullaitivu</MenuItem>
                            <MenuItem value="Nuwara Eliya">Nuwara Eliya</MenuItem>
                            <MenuItem value="Polonnaruwa">Polonnaruwa</MenuItem>
                            <MenuItem value="Puttalam">Puttalam</MenuItem>
                            <MenuItem value="Ratnapura">Ratnapura</MenuItem>
                            <MenuItem value="Trincomalee">Trincomalee</MenuItem>
                            <MenuItem value="Vavuniya">Vavuniya</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        required
                        fullWidth
                        id='rmc'
                        name='rmc'
                        type='number'
                        label='Required Member Count'
                        value={formValues.rmc}
                        onChange={handleInputChange}
                        // error={formik.touched.rmc && Boolean(formik.errors.rmc)}
                        // helperText={formik.touched.rmc && formik.errors.rmc}
                        inputProps={{ readOnly: false, }}           
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        required
                        fullWidth
                        id='pay'
                        name='pay'
                        type='number'

                        label='Payment Per Worker (Rs.)'
                        value={formValues.pay}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    {/* <TextField 
                        fullWidth
                        id='date'
                        name='date'
                        label='Date'
                        value={formValues.date}
                        disabled
                    /> */}
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Required Date"
                            value={value}
                            onChange={(newValue) => {
                            setValue(newValue);
                            }}
                            renderInput={(params) => <TextField fullWidth required {...params} />}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        id='description'
                        name='description'
                        label='Description'
                        value={formValues.description}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid xs={6}></Grid>
                <Grid item xs={6} textAlign="right">
                    <Button color='secondary' variant='contained' fullWidth type='submit'
                    sx={{marginBottom: '20px', marginTop: '30px', marginRight: '30px', padding: '15px 40px', fontSize: '16px', borderRadius: '10px', maxWidth: 'fit-content', transition: 'ease .3s', boxShadow: '0 5px 20px rgba(0,0,0,0.30), 0 5px 20px rgba(0,0,0,0.22)' }}>
                        <PostAddIcon sx={{padding: '0px 10px 0px 0px'}}/> Post Advertisement
                    </Button>

                    <Button color='error' variant='contained' fullWidth type='reset' onClick={cancelButton}
                    sx={{marginBottom: '20px', marginTop: '30px', padding: '15px 40px', fontSize: '16px', borderRadius: '10px', maxWidth: 'fit-content', transition: 'ease .3s', boxShadow: '0 5px 20px rgba(0,0,0,0.30), 0 5px 20px rgba(0,0,0,0.22)' }}>
                        Cancel
                    </Button>
                </Grid>
            </Grid>
        </form>
    </Paper>
  )
}
