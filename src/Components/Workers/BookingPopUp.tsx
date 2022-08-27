import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {makeStyles} from "@material-ui/core/styles";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Button from '@mui/material/Button'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';


const useStyles = makeStyles({
        PopUpCard:{
            // minWidth: 'cover',
            // margin: "0 auto",
            paddingTop: 10,
            paddingBottom: 10,
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

        },
    closeIcon:{
        position: 'absolute',
        top: '10px',
        right: '25px',
        // paddingTop: 10,
    },
    sendAdd:{
        marginLeft:'83%',
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
    })
;
const BookingPopUp = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState<Date | null>(
        new Date('2014-08-18T21:11:54'),
    );

    const handleChange = (newValue: Date | null) => {
        setValue(newValue);
    };

    const [category, setCategory] = React.useState('');

    const handleChangeCategory = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
    };
    const [method, setMethod] = React.useState('');

    const handleChangeMethod = (event: SelectChangeEvent) => {
        setMethod(event.target.value as string);
    };


    return (
        <div className={classes.PopUpCard}>
            <Grid item xs={12} sx={{ m: 2 }} >
                <CloseIcon className={classes.closeIcon} />
            </Grid>
            <Container className={classes.container} >
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
                                            id="outlined-required"
                                            label="Date"
                                            defaultValue="Date"
                                        />
                                    </FormControl>

                                </Grid>
                                <Grid item xs={4} sx={{ m: 2 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={category}
                                            label="Category"
                                            onChange={handleChangeCategory}
                                        >
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
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Payment Method</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={method}
                                            label="Method"
                                            onChange={handleChangeMethod}
                                        >
                                            <MenuItem value={"Cash"}>Cash</MenuItem>
                                            <MenuItem value={"Online"}>Online</MenuItem>
                                        </Select>
                                    </FormControl>

                                </Grid>


                            </Grid>
                            <Grid  xs={4} direction="column">
                                <Grid item xs={6} sx={{ m: 2 }}>
                                    <TextField fullWidth id="last-name" label="City" variant="outlined"  />
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

                        <Grid className={classes.sendAdd} >
                            <Button className={classes.closeIcon} variant="contained" >Booking</Button>
                        </Grid>
                    </form>
                </Card>
            </Container>
        </div>
    );
};

export default BookingPopUp;

