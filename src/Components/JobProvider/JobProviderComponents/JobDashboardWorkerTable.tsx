import React, {useEffect, useState} from 'react';
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Button from "@mui/material/Button";
import {styled} from "@mui/material/styles";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import SearchBar from "../../CommonComponent/SearchBar";
import axios from "axios";
import {useAuth0} from "@auth0/auth0-react";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Card from "@mui/material/Card";


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
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


const JobDashboardWorkerTable = () => {    // ----------------------- call dashboard loading

    const {
        user
    } = useAuth0();

    const [bookingWorkers, setBookingWorkers]= useState<any>([]);
    const [dailogData, setdailogData]= useState<any>({});
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (prop : any) => {   // ------------------ Open the popup box
        setdailogData(prop)
        setOpen(true);
    };
    const handleClose = () => {      // ----------------------------- Close the popup box
        setOpen(false);
    };

    async function getBookingWorkers() {          // ---------------- get the Requested worker details for the table
        let providerID:any = user?.sub;
        providerID = providerID.substring(6)

        axios.post('http://localhost:8000/jobProvider', {
            job_provider_id : providerID,

        })
            .then(function (response) {
                const data = response.data;

                data.map((item: any) => {
                    setBookingWorkers((prevState: any) => [...prevState, {
                        id : item.id,
                        category : item.category,
                        description : item.description,
                        jobSeeker_first_name : item.first_name,
                        job_seeker_id: item.job_seeker_id,
                        jobSeeker_last_name : item.last_name,
                        location : item.location,
                        mobile: item.mobile,
                        pay : item.pay,
                        payment_type : item.payment_type,
                        req_date: item.req_date,
                        required_date : item.required_date,
                        job_status : item.status,
                        type: item.type,
                        worker_count:item.worker_count,
                    }])
                    return null;
                });

            })
            .catch(function (error) {
                console.log(error);
            });
    }


    useEffect(() => {
        getBookingWorkers();


    }, [])

    return (
        <div>
            <Grid container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  style={{marginBottom:'30px'}}>

                <Grid item xs={6}>
                    <Typography variant="h6" component="h6" fontWeight='700' textAlign='left' padding='20px 0px 20px 0px'>Requested Worker</Typography>
                </Grid>
                <Grid item xs={6}>
                    <SearchBar />
                </Grid>

            </Grid>

            <Paper sx={{ width: '100%', overflow: 'hidden' }}>   {/* -------------table of requested worker */}
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="sticky table" >
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="left">Requested Date</StyledTableCell>
                                <StyledTableCell align="left">Name</StyledTableCell>
                                <StyledTableCell align="left">Type</StyledTableCell>
                                <StyledTableCell align="left">Category</StyledTableCell>
                                <StyledTableCell align="left">Status</StyledTableCell>
                                <StyledTableCell align="left">   </StyledTableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {bookingWorkers.map((item: any,index:Number) => (
                                <StyledTableRow key={item.index}>
                                    <StyledTableCell component="th" scope="row">{item.req_date}</StyledTableCell>
                                    <StyledTableCell align="left">{item.jobSeeker_first_name}{' '}{item.jobSeeker_last_name}</StyledTableCell>
                                    <StyledTableCell align="left">{item.type}</StyledTableCell>
                                    <StyledTableCell align="left">{item.category}</StyledTableCell>
                                    <StyledTableCell align="left">{item.job_status}</StyledTableCell>
                                    <StyledTableCell align="left"><Button variant="contained" size="small" onClick={() => handleClickOpen(item)}>View</Button></StyledTableCell>
                                </StyledTableRow>
                                ))}
                        </TableBody>

                    </Table>
                </TableContainer>

            </Paper>

            <Dialog open={open} onClose={handleClose} >    {/* -------------------table of requested worker full details in popup box */}
                    <DialogContent>
                        <Card style={{width:'300px', padding:'20px'}}>

                            <Grid container
                                  direction="column"
                                  justifyContent="flex-start"
                                  alignItems="flex-start">

                                <Grid item xs={4} container>
                                    <Typography variant="h4" marginBottom="20px" color="#4E2363" fontWeight="1000">{dailogData.jobSeeker_first_name} {dailogData.jobSeeker_last_name}</Typography>

                                </Grid>
                                <Grid item xs={8} container
                                      direction="column"
                                      justifyContent="flex-start"
                                      alignItems="flex-start">
                                    <Grid item xs={6}>
                                        <Typography variant="body2" marginBottom="5px" color="#878787">Type : <span style={{color:"#4E2363"}}>{dailogData.type}</span></Typography>
                                        <Typography variant="body2" marginBottom="5px" color="#878787">Category : <span style={{color:"#4E2363"}}>{dailogData.category}</span></Typography>
                                        <Typography variant="body2" marginBottom="5px" color="#878787">Worker Count : <span style={{color:"#4E2363"}}>{dailogData.worker_count}</span></Typography>
                                        <Typography variant="subtitle1" marginBottom="5px" color="#878787">Required Date : <span style={{color:"#4E2363" , fontWeight:"700"}}>{dailogData.req_date}</span></Typography>
                                        <Typography variant="body2" marginBottom="5px" color="#878787">Status : <span style={{color:"Blue"}}>{dailogData.job_status}</span></Typography>
                                    </Grid>
                                    <Grid item xs={6} style={{marginTop:"20px"}} container
                                          direction="column"
                                          justifyContent="space-between"
                                          alignItems="flex-start">
                                        <Grid  container
                                               direction="row"
                                               justifyContent="space-between"
                                               alignItems="flex-start">
                                            <Grid item xs={6} marginBottom="20px">
                                                <Typography variant="body2" color="#878787">Request Date</Typography>
                                                <Typography variant="subtitle1" color="#4E2363">{dailogData.required_date}</Typography>
                                            </Grid>
                                            <Grid item xs={6} marginBottom="20px">
                                                <Typography variant="body2" color="#878787">Location</Typography>
                                                <Typography variant="subtitle1" color="#4E2363">{dailogData.location}</Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid container
                                              direction="row"
                                              justifyContent="space-between"
                                              alignItems="flex-start">
                                            <Grid item xs={6} marginBottom="20px">
                                                <Typography variant="body2" color="#878787">Payment Type</Typography>
                                                <Typography variant="subtitle1" color="#4E2363">{dailogData.payment_type}</Typography>
                                            </Grid>
                                            <Grid item xs={6} marginBottom="20px">
                                                <Typography variant="body2" color="#878787">1 hour Payment</Typography>
                                                <Typography variant="subtitle1" color="#4E2363" fontWeight="700">LKR {dailogData.pay}</Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid>
                                            <Typography variant="body2" color="#878787">Description</Typography>
                                            <Typography variant="subtitle1" color="#4E2363">{dailogData.description}</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Card>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} variant='outlined'>Cancel</Button>
                    </DialogActions>

            </Dialog>

        </div>
    );
};

export default JobDashboardWorkerTable;
