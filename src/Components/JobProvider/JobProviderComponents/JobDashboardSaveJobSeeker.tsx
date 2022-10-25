import React, {useEffect, useState} from 'react';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SearchBar from "../../CommonComponent/SearchBar";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TablePagination from "@mui/material/TablePagination";
import {styled} from "@mui/material/styles";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import JobSeekerReqProfile from "../../JobSeeker/JobSeekerRequest/JobSeekerReqProfile";
import Box from "@mui/material/Box";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import GroupIcon from "@mui/icons-material/Group";
import PaidIcon from "@mui/icons-material/Paid";
import DateRangeIcon from "@mui/icons-material/DateRange";
import CallIcon from "@mui/icons-material/Call";
import RequestProfile from "../../../Assets/JobSeeker/JobSeekerReqPro.png";
import {useAuth0} from "@auth0/auth0-react";
import axios from "axios";
import Swal from "sweetalert2";
import CircularProgress from "@mui/material/CircularProgress";
import StarIcon from '@mui/icons-material/Star';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Card from "@mui/material/Card";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import DialogActions from "@mui/material/DialogActions";
import {useNavigate} from "react-router-dom";
import {blue} from "@material-ui/core/colors";


const Item = styled(Paper)(({ theme }) => ({
    //backgroundColor: theme.palette.mode === 'dark' ? '#000000' : 'none',
    // ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'start',
    color: '#1C1C1C',
    borderRadius:'20px',
    // color: theme.palette.text.secondary,
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#ECD2F2',
        color: '#1C1C1C',
        fontSize: 14,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,

    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



const JobDashboardSaveJobSeeker = () => {

    // const [page, setPage] = React.useState(0);
    // const [rowsPerPage, setRowsPerPage] = React.useState(10);
    //
    // const handleChangePage = (event: unknown, newPage: number) => {
    //     setPage(newPage);
    // };
    //
    // const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setRowsPerPage(+event.target.value);
    //     setPage(0);
    // };

    const {
        user
    } = useAuth0();

    const [SaveWorker, setSaveWorkers]= useState<any>([]);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = React.useState(false);


    // async function getSaveWorkers() {
    //     try {
    //         const response = await axios.get('http://localhost:8000/jobProvider/saveWorkers');
    //         const data = response.data;
    //         data.map((item: any) => {
    //             setSaveWorkers((prevState: any) => [...prevState, {
    //                 user_id: item.user_id,
    //                 first_name: item.first_name,
    //                 last_name: item.last_name,
    //                 img:item.img,
    //                 category: item.category,
    //                 description: item.description,
    //                 complet_count: item.complet_count,
    //                 rate: item.rate,
    //             }])
    //             return null;
    //         });
    //     } catch (any) {
    //         console.error(any);
    //         Swal.fire({
    //             icon: 'error',
    //             title: 'Oops...',
    //             text: 'Something went wrong!'
    //         })
    //     }
    // }

    async function getSaveWorkers() {          // ---------------- get the saved worker details for the table
        let providerID:any = user?.sub;
        providerID = providerID.substring(6)
        console.log("hiiii");
        axios.post('http://localhost:8000/jobProvider/saveWorkers', {
            job_provider_id : providerID,

        })
            .then(function (response) {
                console.log(response.data);
                const data = response.data;

                data.map((item: any) => {
                    setSaveWorkers((prevState: any) => [...prevState, {
                        user_id: item.user_id,
                        first_name: item.first_name,
                        last_name: item.last_name,
                        img:item.img,
                        mobile:item.mobile,
                        category: item.category,
                        description: item.description,
                        complet_count: item.complet_count,
                        rate: item.rate,
                    }])
                    return null;
                });

            })
            .catch(function (error) {
                        console.error(error);
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong!'
                        })
            });
    }

    const [dailogData, setdailogData]= useState<any>({});

    const openDetails = (prop : any) => {
        setdailogData(prop)

    };
    const [seeker_id, setSeeker_id] = useState('');
    const navigate = useNavigate();
    const [required_date, setRequired_date] = React.useState<Date | null>(null);

    const handleClickOpen = (id:any) => {
        if(user?.family_name==="JobProvider"){
            setSeeker_id(id);
            setOpen(true);
        }else {
            navigate("/signUp/JobProvider", { replace: false });
        }
    };

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

    useEffect(() => {
        getSaveWorkers();
        setLoading(true);

    }, [])

    return (
        <div>
            <Grid container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  style={{marginBottom:'30px'}}>

                <Grid item xs={6}>
                    <Typography variant="h6" component="h6" fontWeight='700' textAlign='left' padding='20px 0px 20px 0px'>Saved Workers</Typography>

                </Grid>
                <Grid item xs={6}>
                    <SearchBar />
                </Grid>

            </Grid>


            <Grid container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  >
                <Grid item xs={5} spacing={2}>
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 270 }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>

                                        <StyledTableCell align="left">Name</StyledTableCell>
                                        <StyledTableCell align="left">Category</StyledTableCell>


                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {loading? SaveWorker.map((item: any) => {
                                        return(
                                            <StyledTableRow >
                                                <StyledTableCell style={{cursor: 'pointer'}} onClick={() => openDetails(item)} component="th" scope="row" align="left">{item.first_name} {item.last_name} </StyledTableCell>
                                                <StyledTableCell align="left">{item.category}</StyledTableCell>
                                            </StyledTableRow>
                                        );

                                    }) :<CircularProgress />}
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Paper>
                </Grid>
                <Grid item xs={7} >
                    <Paper style={{marginLeft:'25px', boxShadow: "3px 3px 3px 2px rgba(0, 0, 0, 0.3)" }}>

                        {/*<JobSeekerReqProfile />*/}

                        <div>

                            <Box  sx={{ flexGrow: 1 }} style={{ paddingLeft:'25px',paddingTop:'10px',paddingBottom:'25px'}}>
                                <Grid  container spacing={2} >
                                    <Grid  item xs={12} >
                                        <Item style={{boxShadow:'none'}}><h1 color="blue">{dailogData.first_name} {dailogData.last_name}</h1></Item>
                                    </Grid>
                                    <Grid  item xs={6}>

                                        <Item style={{boxShadow:'none'}} >
                                            <div style={{display:"flex",flexDirection:"row",fontWeight:"bold",paddingBottom:"8px"}}><BusinessCenterIcon style={{ color: "#afafaf" }} /> {dailogData.category}</div>
                                            <div style={{display:"flex",flexDirection:"row",fontWeight:"bold",paddingBottom:"8px"}}><CallIcon style={{ color: "#afafaf" }} /> {dailogData.mobile}</div>
                                            <div style={{display:"flex",flexDirection:"row",fontWeight:"bold",paddingBottom:"8px"}}><StarIcon style={{ color: "#afafaf" }} /> Rate : {dailogData.rate}</div>
                                            <div style={{display:"flex",flexDirection:"row",fontWeight:"bold",paddingBottom:"8px"}}><AssignmentTurnedInIcon style={{ color: "#afafaf" }} /> {dailogData.complet_count} Task Completed</div>

                                        </Item>


                                    </Grid>
                                    <Grid item xs={6}>
                                        <Item style={{boxShadow:'none'}}>
                                            <Avatar
                                                alt="RequestProfile"
                                                src={dailogData.img}
                                                sx={{width: 150, height: 150}}/>
                                        </Item>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Item style={{boxShadow:'none'}}><h3>Discreption</h3></Item>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Item style={{boxShadow:'none'}}>{dailogData.description}</Item>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Button variant="contained"  onClick={() => handleClickOpen(dailogData.user_id)}>Book Now</Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                    </Paper>

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
                                            <InputLabel id="demo-select-small">Payment
                                                Type</InputLabel>
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

        </div>
    );
};

export default JobDashboardSaveJobSeeker;
