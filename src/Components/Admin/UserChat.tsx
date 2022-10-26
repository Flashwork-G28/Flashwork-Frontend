import React, { useEffect, useState } from 'react';
import { Button, FormControl, FormHelperText, Grid, Input, Paper, styled, 
    Table, TableBody, TableCell, tableCellClasses, TableContainer, TableRow, 
    TextareaAutosize, TextField, TextFieldProps, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import SendIcon from '@mui/icons-material/Send';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
    //   backgroundColor: '#4E2363',
      color: theme.palette.common.white,
      fontSize: 16,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
      
    },
}));
  
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        // backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function UserChat() {
    const {user} = useAuth0();

    const defaultValues = {
        message: '',
    }

    const [ formValues, setFormValues ] = useState(defaultValues);

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (user_id: any) => {
        // e.preventDefault();

        let seeker_id:any = user?.sub;
        seeker_id = seeker_id.substring(6);
        console.log(formValues.message);
        console.log(seeker_id);

        if(seeker_id != '630362a354a0bca9c18842a9') {
            axios.post('http://localhost:8000/chat/postChat', {
                sender_id: seeker_id,
                receiver_id: '630362a354a0bca9c18842a9',
                message: formValues.message,
          })
          .then(function (response) {
            console.log(response);
            setFormValues({
                ...defaultValues,
              });
            // e.target.reset();
          })
          .catch(function (error) {
            console.log(error);
          });
        // alert(JSON.stringify(formValues, null, 5));
        }

        else {
            axios.post('http://localhost:8000/chat/postChat', {
                sender_id: '630362a354a0bca9c18842a9',
                receiver_id: user_id,
                message: formValues.message,
          })
          .then(function (response) {
            console.log(response);
            setFormValues({
                ...defaultValues,
              });
            // e.target.reset();
          })
          .catch(function (error) {
            console.log(error);
          });
        // alert(JSON.stringify(formValues, null, 5));
        }
    }

    let admin_id: '630362a354a0bca9c18842a9';

    const getChat = (user_id: any) => {
        let seeker_id:any = user?.sub;
        seeker_id = seeker_id.substring(6);
        console.log(formValues.message);

        if(seeker_id != '630362a354a0bca9c18842a9') {
            axios.get('http://localhost:8000/chat/getChat/' + admin_id)
          .then(function (response) {
            console.log(response);
            setFormValues({
                ...defaultValues,
              });
            // e.target.reset();
          })
          .catch(function (error) {
            console.log(error);
          });
        // alert(JSON.stringify(formValues, null, 5));
        }

        else {
            axios.get('http://localhost:8000/chat/getChat/' + user_id)
          .then(function (response) {
            console.log(response);
            console.log(user_id);
            // const det = response.data;
            setFormValues(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
        alert(JSON.stringify(formValues, null, 5));
        }
    }

    // Get all users
    const [details, setDetails] = useState<any>([]);

    const viewUsers = () => {
        axios.get('http://localhost:8000/users/').then((response) => {
            const det = response.data;
            // console.log(user_id);
            det.map((item: any) => {
                // const date1:any = new Date();
                // const date2:any = new Date(item.pub_date);
                // const diffTime = Math.abs(date2 - date1);
                // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                setDetails((prevState: any) => [...prevState, {
                    user_id: item.user_id,
                    img: item.img,
                    first_name: item.first_name,
                    last_name: item.last_name,
                    nid: item.nid,
                    street: item.street,
                    city: item.city,
                    mobile: item.mobile,
                    email: item.email,
                    type: item.type,
                    status: item.status,
                }])
                
            });
        }).catch(function (error) {
            if (error.response) {
                // setAlertPara("Something went wrong when creating the user!");
                // setVariant("danger");
                // setShow(true);
            }
        })
    }

    // Get selected user
    const [receiver, setReceiver] = useState<any>([]);

    useEffect(() => {
        viewUsers();
    }, []);

  return (
        <Paper sx={{marginBottom: '20px', borderRadius: '10px', boxShadow: '0 5px 20px rgba(0,0,0,0.2), 0 5px 20px rgba(0,0,0,0.2)'}}>
        {/* <form onSubmit={handleSubmit} style={{padding: '40px', paddingLeft: '70px', marginBottom: '30px'}} id="myForm" name='myForm' noValidate={false}> */}
            <Grid container spacing={4} paddingTop={5}>
                <Grid item xs={4} textAlign={'left'} sx={{borderRight: '8px solid #ECEFF1', borderRadius: '20%', paddingRight: '12px'}}>
                    <TableContainer component={Grid} sx={{borderRadius: '0px 30px 30px 0px', maxHeight: '600px', overflow: 'scroll', }}>
                        <Table aria-label="customized table" >
                        {details.map((item: any) => {          
                            return (
                        <TableBody sx={{borderBottom: '0px solid grey'}}>
                            <StyledTableRow key={item.first_name}>
                                {/* <StyledTableCell align="center">{item.status}</StyledTableCell> */}
                                {/* <StyledTableCell align="center">{item.user_id}</StyledTableCell> */}
                                <StyledTableCell align="left"><img style={{paddingLeft: '5px', borderRadius: "50%", width: "45px", height: "45px"}} src={item.img} alt='profile_pic' /></StyledTableCell>
                                <StyledTableCell component="th" scope="row" align="left" style={{cursor:'pointer'}} onClick={() => {setReceiver(item.user_id); getChat(item.user_id)}}>
                                {item.first_name} {item.last_name}
                                </StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                        )
                        })}
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={8} sx={{padding: '40px 30px'}}>
                    <Grid item xs={12} sx={{padding: '40px 10px 40px 30px', minHeight: '600px', background: 'linear-gradient(90deg, #ffffff, #d1c4e9, #ffffff)', display: 'flex', justifyContent: 'right', alignItems: 'right'}}>
                        <Typography sx={{maxWidth: '200px', height: 'fit-content', overflowWrap: 'break-word', padding: '10px 10px 10px 40px', backgroundColor: '#ff1744', borderRadius: '20px 0px 0px 20px'}} component="h4">
                            {formValues.message}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{padding: '20px 10px', display: 'flex', justifyContent: 'right', alignItems: 'right'}}>
                        <Grid item xs={9.5}>
                            <TextField
                                fullWidth
                                id='message'
                                name='message'
                                label='Message...'
                                value={formValues.message}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={2.5} sx={{display: 'flex', justifyContent: 'right', alignItems: 'right'}}>
                            <Button color='secondary' variant='contained' fullWidth type='submit' onClick={() => handleSubmit(receiver)}
                            sx={{padding: '10px 30px', fontSize: '14px', borderRadius: '10px', maxWidth: 'fit-content', transition: 'ease .3s'}}>
                                <SendIcon sx={{padding: '0px 10px 0px 0px'}}/> Send
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>    
        {/* </form> */}
        </Paper>
  )
}
