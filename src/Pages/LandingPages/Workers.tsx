import React, {useEffect, useState} from 'react';
import WorkerMainComponents from "../../Components/Workers/WorkerMainComponents";
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
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
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
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import DialogActions from "@mui/material/DialogActions";

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
        // paddingTop: 30,
        paddingBottom: 20,
        minHeight: "100vh",

    },
    closeIcon:{
        position: 'absolute',
        top: '10px',
        right: '25px',
        // paddingTop: 10,
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

    const [workers, setWorkers]= useState<any>([]);
    const [loading, setLoading] = useState(false);

    async function getWorkers() {
        try {
            const response = await axios.get('http://localhost:8000/workers/');
            // console.log(response.data);
            const data = response.data;
            console.log("data");
            console.log(data.data);
            data?.data.map((item: any) => {
                setWorkers((prevState: any) => [...prevState, {
                    first_name: item.first_name,
                    last_name: item.last_name,
                    category: item.category,
                    description: item.description,
                }])});

        } catch (any) {
            console.error(any);
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Oops...',
            //     text: 'Something went wrong!'
            // })
        }
    }

    useEffect(() => {
        getWorkers();
        setLoading(true);

    }, [])


    const navigate = useNavigate()
    const {
        user
    } = useAuth0();


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClickFavorite = () => {


    };

    const handleBookig = () => {
        if(user?.family_name==="JobProvider"){
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Save it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Saved!',
                        'Your booking has been saved.',
                        'success'
                    )
                }
            })
            handleClose();
        }else {
            navigate("/signUp/JobProvider", { replace: false });
        }

    };

    const handleClose = () => {
        setOpen(false);
    };



    return (
      <>
          <WorkerPageSearch />
          <div>
              <Typography variant="h6" component="h6" fontWeight='700' textAlign='left' margin='50px 0px 0px 30px'>
                  Suggested For You
              </Typography>
              <Grid className={classes.cardSection}
                    container
                    spacing={0.0}
                    direction="row"
                    justifyContent="center"
                    alignItems="center">

                  {/*<WorkerCard />*/}
                  <WorkerCardMp />
                  {/*<WorkerCard />*/}
                  {loading? workers.map((item: any) => {
                      // const cars = [
                      //     {first_name: item.first_name, last_name: item.last_name ,catagory:item.catagory ,description:item.description},
                      // ];
                      // <WorkerCard arr={cars} />

                      return (
                          <div className={classes.cardBody}>

                              <Grid
                                  container
                                  direction="column"
                                  margin='25px' >

                                  <Grid className={classes.contentCard} sx={{ width:'100%' , height:'fitContent'} }
                                        container
                                        justifyContent="space-between"
                                        alignItems="flex-start">
                                      <Grid item xs={6}>
                                          <Avatar
                                              alt="Remy Sharp"
                                              // src= {post.image}
                                              sx={{ width: 100, height: 100 }}/>
                                      </Grid>
                                      <Grid item xs={6} container
                                            direction="column"
                                            alignItems="flex-end">
                                          <FavoriteBorderIcon className={classes.favourite} onClick={handleClickFavorite} fontSize='medium' sx={{mr:5.8}} />
                                          <Stack direction="row" spacing={0.5} sx={{mt:6.5 ,mr:5.8}} alignItems="flex-end">
                                              <StarIcon sx={{color:yellow[600]}}/>
                                              <Typography variant="subtitle2" fontWeight='500'>4.5</Typography>
                                              <Typography variant="subtitle2" fontWeight='500'>(2 reviews)</Typography>
                                          </Stack>

                                      </Grid>

                                  </Grid>
                                  <Grid alignItems="flex-start" className={classes.contentCard}>
                                      <div className={classes.line}></div>
                                      <Typography variant="h6" component="h6" fontWeight='700' textAlign='left'>
                                          {item.first_name}{' '} {item.last_name}
                                      </Typography>
                                      <Typography variant="subtitle2" fontWeight='700' textAlign='left'>
                                          <span><WorkIcon fontSize='small' /></span> {item.category}
                                      </Typography>
                                      <Typography variant="subtitle2" fontWeight='500' textAlign='left'>
                                          <span><CheckCircleOutlineIcon fontSize='small' /></span>05 Minor Tasks Completed
                                      </Typography>

                                      <Typography variant="body2" fontWeight='500' textAlign='left' marginTop='30px' marginRight='25px' position='absolute' >
                                          {item.description}
                                      </Typography>
                                  </Grid>
                                  <Grid className={classes.booking} >
                                      <Button variant="contained" onClick={handleClickOpen}>Book Now</Button>
                                  </Grid>
                              </Grid>



                              <Dialog open={open} onClose={handleClose}>
                                  <DialogContent>
                                      <Card >
                                          <form >
                                              <Grid container
                                                    direction="row"
                                                    justifyContent="flex-start"
                                                    alignItems="flex-start" >
                                                  <Grid  xs={4} direction="column"  >
                                                      <Grid item xs={6} sx={{ m: 2 }}>
                                                          <FormControl >
                                                              {/*<LocalizationProvider dateAdapter={AdapterDateFns} >*/}
                                                              {/*<DesktopDatePicker*/}
                                                              {/*    label="Date desktop"*/}
                                                              {/*    inputFormat="MM/dd/yyyy"*/}
                                                              {/*    value={value}*/}
                                                              {/*    onChange={handleChange}*/}
                                                              {/*    renderInput={(params) => <TextField {...params} sx={{ width: 1/1 }}/>}/>*/}
                                                              {/*</LocalizationProvider>*/}

                                                              <TextField
                                                                  required
                                                                  id="outlined-required"
                                                                  label="Date"
                                                                  defaultValue=''
                                                              />
                                                          </FormControl>

                                                      </Grid>
                                                      <Grid item xs={6} sx={{ m: 2 }}>
                                                          <FormControl fullWidth >
                                                              <InputLabel id="demo-select-small">Payment Type</InputLabel>
                                                              <Select
                                                                  labelId="demo-simple-select-label"
                                                                  id="demo-simple-select"
                                                                  label="Payment Method">
                                                                  <MenuItem value={"Cash"}>Chash</MenuItem>
                                                                  <MenuItem value={"Online"}>Online</MenuItem>
                                                              </Select>
                                                          </FormControl>
                                                      </Grid>
                                                      <Grid item xs={6} sx={{ m: 2 }}>
                                                          <TextField
                                                              label="Mobile"
                                                              id="outlined-start-adornment"
                                                              InputProps={{startAdornment: <InputAdornment position="start">+94</InputAdornment>,
                                                              }}/>
                                                      </Grid>
                                                  </Grid>
                                                  {/*<Grid xs={4} direction="column">*/}
                                                  {/*     <Grid item xs={6} sx={{ m: 2 }}>*/}
                                                  {/*         <TextField*/}
                                                  {/*             id="outlined-number"*/}
                                                  {/*             label="Number"*/}
                                                  {/*             type="number"*/}
                                                  {/*             sx={{width: 1/1}}*/}
                                                  {/*             InputLabelProps={{*/}
                                                  {/*                 shrink: true,*/}
                                                  {/*             }}*/}
                                                  {/*         />*/}
                                                  {/*     </Grid>*/}
                                                  {/*     <Grid item xs={6} sx={{ m: 2 }}>*/}
                                                  {/*         <Select*/}
                                                  {/*             fullWidth*/}
                                                  {/*             labelId="demo-simple-select-label"*/}
                                                  {/*             id="demo-simple-select"*/}
                                                  {/*             label="Payment Method">*/}
                                                  {/*             <MenuItem value={"Cash"}>Chash</MenuItem>*/}
                                                  {/*             <MenuItem value={"Online"}>Online</MenuItem>*/}
                                                  {/*         </Select>*/}
                                                  {/*     </Grid>*/}


                                                  {/* </Grid>*/}
                                                  <Grid  xs={4} direction="column">
                                                      <Grid item xs={6} sx={{ m: 2 }}>
                                                          <TextField fullWidth id="last-name" label="City" variant="outlined" required />
                                                      </Grid>

                                                      <Grid item xs={6} sx={{ m: 2 }}>
                                                          <TextField
                                                              label="One Worker Payment "
                                                              id="outlined-start-adornment"
                                                              InputProps={{
                                                                  startAdornment: <InputAdornment position="start">LKR</InputAdornment>,
                                                              }}
                                                          />
                                                      </Grid>

                                                  </Grid>
                                                  {/*<Grid  xs={3} direction="column"  >*/}
                                                  {/*    <TextField fullWidth label="Description" id="fullWidth" />*/}
                                                  {/*</Grid>*/}

                                              </Grid>

                                              <Grid container
                                                    direction="row"
                                                    justifyContent="flex-start"
                                                    alignItems="flex-start" >
                                                  <Grid item xs={12} sx={{ m: 2 }} >
                                                      <TextField fullWidth label="Description" id="fullWidth" />

                                                  </Grid>

                                              </Grid>

                                              {/*<Grid className={classes.sendAdd} >*/}
                                              {/*    <Button className={classes.closeIcon} variant="contained" >Booking</Button>*/}
                                              {/*</Grid>*/}
                                          </form>
                                      </Card>
                                  </DialogContent>
                                  <DialogActions>
                                      <Button onClick={handleBookig} variant="contained">Booking</Button>
                                      <Button onClick={handleClose} variant='outlined'>Cancel</Button>

                                  </DialogActions>
                              </Dialog>
                          </div>
                      );


                  }) : <p>Loading...</p> }


              </Grid>

          </div>

          <div>
              <Typography variant="h6" component="h6" fontWeight='700' textAlign='left' margin='50px 0px 0px 30px'>
                  Top Rate Workers
              </Typography>
              {/*<WorkerMainComponents />*/}
          </div>

          <div>
              <Typography variant="h6" component="h6" fontWeight='700' textAlign='left' margin='50px 0px 0px 30px'>
                  Favourites
              </Typography>
              {/*<WorkerMainComponents />*/}
          </div>


      </>
  );
};

export default Workers;

