import React, {useEffect, useState} from 'react';
import Typography from "@mui/material/Typography";
import WorkerPageSearch from "../../Components/Workers/WorkerPageSearch";
import axios from "axios";
import Swal from "sweetalert2";
import Grid from "@mui/material/Grid";
import WorkerCardMp from "../../Components/Workers/WorkerCardMP";
import {makeStyles} from "@material-ui/core/styles";
import {useNavigate} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
import Avatar from "@mui/material/Avatar";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Stack from "@mui/material/Stack";
import StarIcon from "@mui/icons-material/Star";
import {yellow} from "@mui/material/colors";
import WorkIcon from "@mui/icons-material/Work";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Card from "@mui/material/Card";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import DialogActions from "@mui/material/DialogActions";
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import withReactContent from "sweetalert2-react-content";
import CircularProgress from '@mui/material/CircularProgress';
import pc1 from "../../Assets/backgroundImages/man1.jpg";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const useStyles = makeStyles({
    cardSection: {
        backgroundColor: '#F7D6FF',
        width: '100%',
        height: 'fitcontent',
        marginTop:'20px'
    },
    cardBody: {
        backgroundColor:'white',
        width:'350px',
        height:'450px',
        borderRadius: '10px',
        border: '3px solid #4E2363',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        margin:'30px',
        position: 'relative',
    },
    line :{
        width: '300px',
        height: '0.001px',
        border: '0.5px solid #4E2363',
        marginTop:'25px',
    },
    contentCard:{
        width:'100%' ,
        height:'fitcontent',
        textalign: 'left',
    },
    booking:{
        position: 'absolute',
        bottom: '50px',
        right: '25px',
    },
    PopUpCard:{
        paddingTop: 10,
        paddingBottom: 10,
        height: '420px',
        width: '750px',
        backgroundColor:'#D9D9D9',
        borderRadius: '10px',
        border: '3px solid #4E2363',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        position:'relative',
    },
    container: {
        minWidth: 'cover',
        margin: "30px",
        paddingBottom: 20,
        minHeight: "100vh",
    },
    closeIcon:{
        position: 'absolute',
        top: '10px',
        right: '25px',
    },
    sendAdd:{
        marginLeft:'87%',
        marginBottom:'20px',
    },
    select: {
        "& :focus": {
            backgroundColor: "transparent",
        },
    },
    favourite:{
        color: 'red',
    },
})


const Workers = () => {
    const classes = useStyles();
    const {
        user,
        isAuthenticated
    } = useAuth0();

    const [workers, setWorkers]= useState<any>([]);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [seeker_id, setSeeker_id] = useState('');
    const [ma_id, setMAseeker_id] = useState('');
    const [required_date, setRequired_date] = React.useState<Date | null>(null);
    const [form_category, setMAcategory] = useState('');
    const [payment_type, setPayment_type] = React.useState("Cash");
    const navigate = useNavigate();
    const [favourite, setFavourite] = useState(false);

    const [manpower, setMAWorkers]= useState<any>([]);
    const [maLoading, setMALoading] = useState(false);
    const [openMP, setOpenMP] = React.useState(false);


    const defaultValues = {
        city:'',
        payment_type:'',
        pay: '',
        description: '',
        category:'',
        worker_count :'',
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

    const handleChangePayment_type = (event: SelectChangeEvent) => {
        setPayment_type(event.target.value);
    };




    const handleClickFavorite = (user_id:any) => {
        if(user?.family_name==="JobProvider"){
            let provider_id:any = user?.sub;
            provider_id = provider_id.substring(6);
            alert(user_id +" and "+ provider_id);

            axios.post('http://localhost:8000/workers/favourite', {
                job_seeker_id: user_id,
                job_provider_id: provider_id

            })
                .then(function (response) {
                    let timerInterval
                    Swal.fire({
                        title: 'Save Worker',
                        html: 'Add your Favourite Worker...',
                        timer: 2000,
                        timerProgressBar: true,
                        didOpen: () => {
                            Swal.showLoading()
                            // const b = Swal.getHtmlContainer().querySelector('b')
                            timerInterval = setInterval(() => {
                                // b.textContent = Swal.getTimerLeft()
                            }, 100)
                        },
                        willClose: () => {
                            clearInterval(500)
                        }
                    }).then((result) => {
                        /* Read more about handling dismissals below */
                        if (result.dismiss === Swal.DismissReason.timer) {
                            console.log('I was closed by the timer')
                        }
                    })
                // setFavourite(true);


                })
                .catch(function (error) {
                    console.log(error);
                });
        }else {
            navigate("/signUp/JobProvider", { replace: false });
        }
    };


// ------------------------------  Job Seeker ----------------------------------------------------------
    async function getWorkers() {

        // {isAuthenticated && ()}
        try {
            const response = await axios.get('http://localhost:8000/workers/');
            const data = response.data;
            data.map((item: any) => {
                setWorkers((prevState: any) => [...prevState, {
                    user_id: item.user_id,
                    first_name: item.first_name,
                    last_name: item.last_name,
                    img:item.img,
                    category: item.category,
                    description: item.description,
                    complet_count: item.complet_count,
                    rate: item.rate,
                    favorite: false
                }])
                return null;
            });
        } catch (any) {
            console.error(any);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
            })
        }
    }

    const handleClickOpen = (id:any) => {
        if(user?.family_name==="JobProvider"){
            setSeeker_id(id);
            setOpen(true);
        }else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please login to the system as a Job Provider!'
            })

            navigate("/signUp/JobProvider", { replace: false });
        }
    };

    const onSubmitBooking = (e: {target: any; preventDefault: () => void;}) => {
        e.preventDefault();

        let provider_id:any = user?.sub;
        provider_id = provider_id.substring(6);

        axios.post('http://localhost:8000/workers/booking', {
            job_seeker_id: seeker_id,
            job_provider_id: provider_id,
            req_date: required_date,
            city: formValues.city,
            payment_type: formValues.payment_type,
            pay: formValues.pay,
            description: formValues.description,

        })
            .then(function (response) {
                setOpen(false);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Booking success',
                    showConfirmButton: false,
                    timer: 2500
                })

                setFormValues({
                    ...defaultValues,
                });
                setValue(null);

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleClose = () => {
        setOpen(false);
    };

    //---------------------- manpower aguncy --------------------------------------------------------
    async function getMAWorkers() {
        try {
            const response = await axios.get('http://localhost:8000/workers/ManPower');
            const data = response.data;
            data.map((item: any) => {
                setMAWorkers((prevState: any) => [...prevState, {
                    user_id: item.user_id,
                    company_name: item.company_name,
                    img:item.img,
                    category: item.category,
                    description: item.description,
                    complet_count: item.complet_count,
                    rate: item.rate,
                }])
                return null;
            });
        } catch (any) {
            console.error(any);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
            })
        }
    }

    const handleClickOpenMP = (id:any,category:any) => {
        if(user?.family_name==="JobProvider"){
            setMAseeker_id(id);
            setMAcategory(category);
            setOpenMP(true);
        }else {
            navigate("/signUp/JobProvider", { replace: false });
        }
    };

    const OnsubmitMP = (e: {target: any; preventDefault: () => void;}) => {
        e.preventDefault();

        let provider_id:any = user?.sub;
        provider_id = provider_id.substring(6);

        axios.post('http://localhost:8000/workers/bookingMA', {
            ma_id: ma_id ,
            job_provider_id: provider_id,
            req_date: required_date,
            city: formValues.city,
            payment_type: formValues.payment_type,
            pay: formValues.pay,
            category:formValues.category,
            worker_count: formValues.worker_count,
            description: formValues.description,

        })
            .then(function (response) {
                setOpenMP(false);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Booking success',
                    showConfirmButton: false,
                    timer: 2500
                })

                setFormValues({
                    ...defaultValues,
                });
                setValue(null);

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleCloseMP = () => {
        setOpenMP(false);
    };


    useEffect(() => {
        getWorkers();
        setLoading(true);

        getMAWorkers();
        setMALoading(true);

    }, [isAuthenticated])



    return (
      <>
          <WorkerPageSearch />
          <div>
              <Typography variant="h6" component="h6" fontWeight='700' textAlign='left' margin='50px 0px 0px 30px'>
                  Suggested For You
              </Typography>
              <Grid className={classes.cardSection}  container  spacing={0.0}  direction="row" justifyContent="center"  alignItems="center">

                  {loading? workers.map((item: any) => {

                     return (<div className={classes.cardBody}>
                              <Grid
                                  container
                                  direction="column"
                                  margin='25px'>
                                  <Grid className={classes.contentCard} sx={{width: '100%', height: 'fitContent'}}
                                        container
                                        justifyContent="space-between"
                                        alignItems="flex-start">
                                      <Grid item xs={6}>
                                          <Avatar
                                              alt="Remy Sharp"
                                              src={item.img}
                                              // uri:{{item.img}}
                                              sx={{width: 100, height: 100}}/>
                                      </Grid>
                                      <Grid item xs={6} container
                                            direction="column"
                                            alignItems="flex-end">
                                          {/*className={classes.favourite}*/}
                                          <div style={{
                                              marginRight: '50px',
                                              backgroundColor: 'none',
                                              color: 'blueviolet',
                                              cursor: 'pointer'
                                          }} onClick={() => handleClickFavorite(item.user_id)}>
                                              {item.favourite == true ? <FavoriteIcon/> : <FavoriteBorderIcon/>}</div>
                                          <Stack direction="row" spacing={0.5} sx={{mt: 6.5, mr: 5.8}}
                                                 alignItems="flex-end">
                                              <StarIcon sx={{color: yellow[600]}}/>
                                              <Typography variant="subtitle2" fontWeight='500'>{item.rate}</Typography>
                                              <Typography variant="subtitle2"
                                                          fontWeight='500'>({item.complet_count} reviews)</Typography>
                                          </Stack>
                                      </Grid>
                                  </Grid>
                                  <Grid alignItems="flex-start" className={classes.contentCard}>
                                      <div className={classes.line}></div>
                                      <Typography variant="h6" component="h6" fontWeight='700' textAlign='left'>
                                          {item.first_name}{' '} {item.last_name}
                                      </Typography>
                                      <Typography variant="subtitle2" fontWeight='700' textAlign='left'>
                                          <span><WorkIcon fontSize='small'/></span> {item.category}
                                      </Typography>
                                      <Typography variant="subtitle2" fontWeight='500' textAlign='left'>
                                          <span><CheckCircleOutlineIcon
                                              fontSize='small'/></span>{item.complet_count} Tasks Completed
                                      </Typography>

                                      <Typography variant="body2" fontWeight='500' textAlign='left' marginTop='30px'
                                                  marginRight='25px' position='absolute'>
                                          {item.description}
                                      </Typography>
                                  </Grid>
                                  <Grid className={classes.booking}>
                                      <Button variant="contained" onClick={() => handleClickOpen(item.user_id)}>Book
                                          Now</Button>
                                  </Grid>
                              </Grid>


                              {/*--------------------------- Popup box for the booking workers --------------------------------------------------------*/}
                              <Dialog open={open} onClose={handleClose}>
                                  <DialogContent>
                                      <Card>
                                          <form onSubmit={onSubmitBooking} id="myForm" name='myForm' noValidate={false}>
                                              <Grid container
                                                    direction="row"
                                                    justifyContent="flex-start"
                                                    alignItems="flex-start">
                                                  <Grid xs={4} direction="column">
                                                      <Grid item xs={6} sx={{m: 2}}>
                                                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                              <DatePicker

                                                                  label="Date"
                                                                  value={required_date}
                                                                  onChange={(newValue) => {
                                                                      setRequired_date(newValue);
                                                                  }}
                                                                  renderInput={(params) => <TextField {...params}/>}
                                                              />
                                                          </LocalizationProvider>
                                                      </Grid>
                                                      <Grid item xs={6} sx={{m: 2}}>
                                                          <FormControl fullWidth>
                                                              <InputLabel id="demo-select-small">Payment Type</InputLabel>
                                                              <Select
                                                                  labelId="demo-simple-select-label"
                                                                  id="demo-simple-select"
                                                                  label="Payment Method"
                                                                  name='payment_type'
                                                                  value={formValues.payment_type}
                                                                  onChange={handleInputChange}>

                                                                  <MenuItem value={"0"}>Cash</MenuItem>
                                                                  <MenuItem value={"1"}>Online</MenuItem>
                                                              </Select>
                                                          </FormControl>
                                                      </Grid>
                                                  </Grid>
                                                  <Grid xs={4} direction="column">
                                                      <Grid item xs={6} sx={{m: 2}}>
                                                          <FormControl fullWidth>
                                                              <InputLabel id="demo-select-small">City</InputLabel>
                                                              <Select
                                                                  required
                                                                  labelId='selectCity'
                                                                  id='city'
                                                                  name='city'
                                                                  value={formValues.city}
                                                                  onChange={handleInputChange}
                                                                  fullWidth
                                                                  label='City'>
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
                                                      <Grid item xs={6} sx={{m: 2}}>
                                                          <TextField
                                                              required
                                                              label="(LKR)One hour Payment "
                                                              id='pay'
                                                              name='pay'
                                                              type='number'
                                                              value={formValues.pay}
                                                              onChange={handleInputChange}/>
                                                      </Grid>
                                                  </Grid>
                                              </Grid>

                                              <Grid container
                                                    direction="row"
                                                    justifyContent="flex-start"
                                                    alignItems="flex-start">
                                                  <Grid item xs={12} sx={{m: 2}}>
                                                      <TextField required
                                                                 fullWidth
                                                                 id='description'
                                                                 name='description'
                                                                 label='Description'
                                                                 value={formValues.description}
                                                                 onChange={handleInputChange}/>
                                                  </Grid>
                                              </Grid>
                                          </form>
                                      </Card>
                                  </DialogContent>
                                  <DialogActions>
                                      <Button variant="contained" type="submit"
                                              onClick={onSubmitBooking}>Booking</Button>
                                      <Button onClick={handleClose} variant='outlined'>Cancel</Button>
                                  </DialogActions>
                              </Dialog>
                          </div>);

                  }) :<CircularProgress />}
              </Grid>
          </div>


{/*------------------------- ManPower Aguncy Card and Form -------------------------------------------------------*/}

                  <div>
                      <Typography variant="h6" component="h6" fontWeight='700' textAlign='left' margin='50px 0px 0px 30px'>
                          ManPower Aguncy For You
                      </Typography>

                      <Grid className={classes.cardSection} container spacing={0.0} direction="row" justifyContent="center"
                            alignItems="center">

                          {maLoading? manpower.map((item: any) => {
                                  return(
                                      <div className={classes.cardBody}>

                                      <Grid
                                          container
                                          direction="column"
                                          margin='25px'>

                                          <Grid className={classes.contentCard} sx={{width: '100%', height: 'fitContent'}}
                                                container
                                                justifyContent="space-between"
                                                alignItems="flex-start">
                                              <Grid item xs={6}>
                                                  <Avatar
                                                      alt="Remy Sharp"
                                                      src={item.img}
                                                      sx={{width: 100, height: 100}}/>
                                              </Grid>
                                              <Grid item xs={6} container
                                                    direction="column"
                                                    alignItems="flex-end">
                                                  <FavoriteIcon fontSize='medium' sx={{mr: 5.8}}/>
                                                  <Stack direction="row" spacing={0.5} sx={{mt: 7, mr: 5.8}} alignItems="flex-end">
                                                      <StarIcon sx={{color: yellow[600]}}/>
                                                      <Typography variant="subtitle2" fontWeight='500'>{item.rate}</Typography>
                                                      <Typography variant="subtitle2" fontWeight='500'>({item.complet_count} reviews)</Typography>
                                                  </Stack>

                                              </Grid>

                                          </Grid>
                                          <Grid alignItems="flex-start" className={classes.contentCard}>
                                              <div className={classes.line}></div>
                                              <Typography variant="h6" component="h6" fontWeight='700' textAlign='left'>
                                                  {item.company_name} {' '}Aguncy
                                              </Typography>
                                              <Typography variant="subtitle2" fontWeight='700' textAlign='left'>
                                                  <span><WorkIcon fontSize='small'/></span> {item.category}
                                              </Typography>
                                              <Typography variant="subtitle2" fontWeight='500' textAlign='left'>
                                                  <span><CheckCircleOutlineIcon fontSize='small'/></span>{item.complet_count} Completed All Task
                                              </Typography>

                                              <Typography variant="body2" fontWeight='500' textAlign='left' marginTop='30px'
                                                          marginRight='25px' position='absolute'>{item.description}
                                              </Typography>
                                          </Grid>
                                          <Grid className={classes.booking}>
                                              <Button variant="contained" onClick={() => handleClickOpenMP(item.user_id , item.category)}>Booking</Button>
                                          </Grid>
                                      </Grid>

{/*--------------------------------------- ManPower Aguncy Popup page --------------------------------------------------*/}

                                      <Dialog open={openMP} onClose={handleCloseMP}>
                                          <DialogContent>
                                              <Card>
                                                  <form>
                                                      <Grid container
                                                            direction="row"
                                                            justifyContent="flex-start"
                                                            alignItems="flex-start">
                                                          <Grid xs={4} direction="column">
                                                              <Grid item xs={6} sx={{m: 2}}>
                                                                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                                      <DatePicker
                                                                          label="Date"
                                                                          value={required_date}
                                                                          onChange={(newValue) => {
                                                                              setRequired_date(newValue);
                                                                          }}
                                                                          renderInput={(params) => <TextField {...params}/>}
                                                                      />
                                                                  </LocalizationProvider>

                                                              </Grid>
                                                              <Grid item xs={4} sx={{m: 2}}>
                                                                  <FormControl fullWidth>
                                                                      <InputLabel id="demo-select-small">Category</InputLabel>
                                                                      <Select
                                                                          required
                                                                          labelId='selectCity'
                                                                          id='category'
                                                                          name='category'
                                                                          value={formValues.category}
                                                                          onChange={handleInputChange}
                                                                          fullWidth
                                                                          label='Category'>
                                                                          <MenuItem value={form_category}>{form_category}</MenuItem>
                                                                          <MenuItem value="Others">Others</MenuItem>
                                                                      </Select>
                                                                  </FormControl>
                                                              </Grid>

                                                          </Grid>
                                                          <Grid xs={4} direction="column">
                                                              <Grid item xs={6} sx={{m: 2}}>
                                                                  <TextField
                                                                      required
                                                                      label="Number"
                                                                      id='worker_count'
                                                                      name='worker_count'
                                                                      type='number'
                                                                      value={formValues.worker_count}
                                                                      onChange={handleInputChange}/>
                                                              </Grid>
                                                              <Grid item xs={6} sx={{m: 2}}>
                                                                  <FormControl fullWidth>
                                                                      <InputLabel id="demo-select-small">Payment Type</InputLabel>
                                                                      <Select
                                                                          labelId="demo-simple-select-label"
                                                                          id="demo-simple-select"
                                                                          label="Payment Method"
                                                                          name='payment_type'
                                                                          value={formValues.payment_type}
                                                                          onChange={handleInputChange}>
                                                                          <MenuItem value={"0"}>Cash</MenuItem>
                                                                          <MenuItem value={"1"}>Online</MenuItem>
                                                                      </Select>
                                                                  </FormControl>
                                                              </Grid>
                                                          </Grid>
                                                          <Grid xs={4} direction="column">
                                                              <Grid item xs={6} sx={{m: 2}}>
                                                                  <FormControl fullWidth>
                                                                      <InputLabel id="demo-select-small">City</InputLabel>
                                                                      <Select
                                                                          required
                                                                          labelId='selectCity'
                                                                          id='city'
                                                                          name='city'
                                                                          value={formValues.city}
                                                                          onChange={handleInputChange}
                                                                          fullWidth
                                                                          label='City'>
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

                                                              <Grid item xs={6} sx={{m: 2}}>
                                                                  <TextField
                                                                      required
                                                                      label="(LKR)One hour Payment "
                                                                      id='pay'
                                                                      name='pay'
                                                                      type='number'
                                                                      value={formValues.pay}
                                                                      onChange={handleInputChange}/>
                                                              </Grid>

                                                          </Grid>

                                                      </Grid>

                                                      <Grid container
                                                            direction="row"
                                                            justifyContent="flex-start"
                                                            alignItems="flex-start">
                                                          <Grid item xs={12} sx={{m: 2}}>
                                                              <TextField required
                                                                         fullWidth
                                                                         id='description'
                                                                         name='description'
                                                                         label='Description'
                                                                         value={formValues.description}
                                                                         onChange={handleInputChange}/>

                                                          </Grid>

                                                      </Grid>
                                                  </form>
                                              </Card>
                                          </DialogContent>
                                          <DialogActions>
                                              <Button onClick={OnsubmitMP} variant="contained">Booking</Button>
                                              <Button onClick={handleClose} variant='outlined'>Cancel</Button>

                                          </DialogActions>
                                      </Dialog>


                                  </div>
                                  );
                          }) :<CircularProgress />}


                          {/*);*/}
                      </Grid>
                  </div>


          <div>
              <Typography variant="h6" component="h6" fontWeight='700' textAlign='left' margin='50px 0px 0px 30px'>
                  Favourites
              </Typography>
          </div>
      </>
  );
};

export default Workers;

