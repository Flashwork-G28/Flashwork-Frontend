import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from '@mui/material/Grid';
import pc1 from "../../Assets/backgroundImages/man1.jpg";
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from "@mui/material/Button";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import WorkIcon from '@mui/icons-material/Work';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Stack from '@mui/material/Stack';
import { yellow } from '@mui/material/colors';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Card from "@mui/material/Card";
import TextField from '@mui/material/TextField';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";


import InputAdornment from '@mui/material/InputAdornment';
// import TextField from '@mui/material/TextField';
import FormControl from "@mui/material/FormControl"

const useStyles = makeStyles({
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
        // backgroundColor: 'red',
        textalign: 'left',

    },
    booking:{
        // marginTop:'80px',
        position: 'absolute',
        bottom: '50px',
        right: '25px',


    },
    PopUpCard:{
        // minWidth: 'cover',
        // margin: "0 auto",
        paddingTop: 10,
        paddingBottom: 10,
        // minHeight: "100vh",
        // height: 'fit-content',
        height: '420px',
        width: '750px',
        backgroundColor:'#D9D9D9',
        borderRadius: '10px',
        border: '3px solid #4E2363',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        position:'relative',
//         margin:'30px',
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
        // position: 'relative',
        // bottom: '50px',
        // right: '25px',
    },

    select: {
        "& :focus": {
            backgroundColor: "transparent",
        },
    },

});


const WorkerCard = () => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                                src= {pc1}
                                sx={{ width: 100, height: 100 }}
                            />
                        </Grid>
                        <Grid item xs={6} container
                              direction="column"
                              alignItems="flex-end"
                        >

                            <FavoriteBorderIcon fontSize='medium' sx={{mr:5.8}} />
                            <Stack direction="row" spacing={0.5} sx={{mt:7 ,mr:5.8}} alignItems="flex-end">
                                <StarIcon sx={{color:yellow[600]}}/>
                                <Typography variant="subtitle2" fontWeight='500'>4.5</Typography>
                                <Typography variant="subtitle2" fontWeight='500'>(2 reviews)</Typography>
                            </Stack>

                        </Grid>

                    </Grid>
                    <Grid alignItems="flex-start" className={classes.contentCard}>
                        <div className={classes.line}></div>
                        <Typography variant="h6" component="h6" fontWeight='700' textAlign='left'>
                            Mohomad Faalil
                        </Typography>
                        <Typography variant="subtitle2" fontWeight='700' textAlign='left'>
                            <span><WorkIcon fontSize='small' /></span> Home Repairs
                        </Typography>
                        <Typography variant="subtitle2" fontWeight='500' textAlign='left'>
                            <span><CheckCircleOutlineIcon fontSize='small' /></span> 49 Minor Tasks Completed
                        </Typography>

                        <Typography variant="body2" fontWeight='500' textAlign='left' marginTop='30px' marginRight='25px' position='absolute' >
                            I have been repairing anything that needed it for 35 years.
                            I have an engineering degree, tools, and a truck. How can I help you?
                        </Typography>
                    </Grid>
                    <Grid className={classes.booking} >
                        <Button variant="contained" onClick={handleClickOpen}>Booking</Button>
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
                                                defaultValue="Date"
                                            />
                                        </FormControl>

                                    </Grid>
                                    <Grid item xs={4} sx={{ m: 2 }}>
                                        <FormControl>
                                            <Select
                                                // fullWidth
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                label="Category">
                                                <MenuItem value={"Restaurant & food services"}>Restaurant & food services</MenuItem>
                                                <MenuItem value={"Transportation & delivery"}>Transportation & delivery</MenuItem>
                                                <MenuItem value={"Retail & Production"}>Retail & Production</MenuItem>
                                                <MenuItem value={"Office work & Administration"}>Office work & Administration</MenuItem>
                                                <MenuItem value={"General services"}>General services</MenuItem>
                                                <MenuItem value={"Others"}>Others</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={4} sx={{ m: 2 }}>
                                        <TextField
                                            label="Mobile"
                                            id="outlined-start-adornment"
                                            InputProps={{startAdornment: <InputAdornment position="start">+94</InputAdornment>,
                                            }}/>
                                    </Grid>
                                </Grid>
                                <Grid xs={4} direction="column">
                                    <Grid item xs={6} sx={{ m: 2 }}>
                                        <TextField
                                            id="outlined-number"
                                            label="Number"
                                            type="number"
                                            sx={{width: 1/1}}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sx={{ m: 2 }}>
                                        <Select
                                            fullWidth
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Payment Method">
                                            <MenuItem value={"Cash"}>Chash</MenuItem>
                                            <MenuItem value={"Online"}>Online</MenuItem>
                                        </Select>
                                    </Grid>


                                </Grid>
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
                    <Button onClick={handleClose} variant="contained">Booking</Button>
                    <Button onClick={handleClose} variant='outlined'>Cancel</Button>

                </DialogActions>
            </Dialog>
        </div>
    );
};

export default WorkerCard;
