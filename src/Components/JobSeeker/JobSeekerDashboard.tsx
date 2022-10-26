import * as React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BlueMarket from '../../Assets/JobSeeker/BlueMarket.png'
import FrockMe from '../../Assets/JobSeeker/FrockMe.png'
import profile from '../../Assets/JobSeeker/profile.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from "@material-ui/core/Typography";
import {useEffect, useState} from "react";
import axios from "axios";


const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),

    textAlign: 'center',
    color: '#1C1C1C',
    //color: theme.palette.text.secondary,
}));

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#4E2363',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(
    jobProvider: string,
    location: string,
    category: string,
    status: string,
) {
    return {jobProvider, location, category, status};
}

function createData2(
    jobProvider: string,
    location: string,
    payment: string,
    mobile: string,
) {
    return {jobProvider, location, payment,mobile};
}

// const rows = [
//     createData('Ananda Rajapaksha', 'kalutara', 'Car penter','Accept'),
//     createData('Lakshitha Dhananjaya', 'Matara', 'Electrition','Accept'),
//     createData('Pasindu  Dhananajaya', 'Panadura', 'Car penter','Reject'),
//     createData('Bhashitha  Sandeepa', 'MAradana', 'Electrition','Reject'),
//     createData('Sameera  Sankapal ', 'Galle', 'Electrition','None',),
//
// ];



const rows = [
    createData2('Ananda Rajapaksha', 'kalutara', 'Cash', '0145689765'),
    createData2('Lakshitha Dhananjaya', 'Matara', 'Cash', '0145689765'),
    createData2('Pasindu  Dhananajaya', 'Panadura', 'Cash', '0145689765'),
    createData2('Bhashitha  Sandeepa', 'Maradana', 'Cash', '0145689765'),
    createData2('Sameera  Sankapal', 'Galle', 'Cash', '0145689765')
];


const JobSeekerDashboard = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [currentState, setCurrentState] = useState(false);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const [row, setRows] = useState<any[]>([]);
    const [dataLoading, setIsDataLoading] = useState(false);
    useEffect(() => {
        axios({
            url: "http://localhost:8000/jobs/appliedJobs",
            method: "GET",
        })
            .then((res) => {
                console.log(res.data);
                // setRows(res.data);
                res.data.map((item: any) => {
                    console.log(res.data)
                    if (item.status == 1) {
                        setRows(prevState => [...prevState, {
                            jobProvider: item.first_name + ' ' + item.last_name,
                            location: item.city,
                            category: item.category,
                            status: "Accept"
                        }])
                    } else {
                        setRows(prevState => [...prevState, {
                            jobProvider: item.first_name + ' ' + item.last_name,
                            location: item.city,
                            category: item.category,
                            status: "Reject"
                        }])
                    }

                    setIsDataLoading(true);
                })
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);

    // const handleClose = () => {
    //     setAnchorEl(null);
    // };
    return (
        <div>
            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={12}>
                    <Grid item xs={12}>
                        <Grid item xs={12} style={{display: "flex", flexDirection: "row"}}>
                            <Grid item xs={6}>
                                <div style={{
                                    color: "#46225F",
                                    paddingTop: "20px",
                                    fontWeight: "bold",
                                    fontSize: "30px"
                                }}>
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <div style={{paddingTop: "20px"}}>
                                    {currentState == false &&
                                        <button onClick={() => setCurrentState(true)} style={{
                                            color: "white",
                                            backgroundColor: "#7A3293",
                                            borderRadius: "5px",
                                            border: "none",
                                            fontWeight: "bold",
                                            padding: "10px"
                                        }}>All current job
                                        </button>}
                                    {currentState == true &&
                                        <button onClick={() => setCurrentState(false)} style={{
                                            color: "white",
                                            backgroundColor: "#7A3293",
                                            borderRadius: "5px",
                                            border: "none",
                                            fontWeight: "bold",
                                            padding: "10px"
                                        }}>All Applied job
                                        </button>}
                                </div>
                            </Grid>
                            {/*<div style={{display:"flex",flexDirection:"row"}}>*/}
                            {/*    <div style={{color:"#46225F",paddingLeft:"50px",paddingTop:"20px",fontWeight:"bold",fontSize:"30px"}}>Time Schedule</div>*/}
                            {/*    <div  style={{paddingLeft:"300px",paddingTop:"20px"}}><button style={{color:"white",backgroundColor:"#7A3293",borderRadius:"5px",border:"none",fontWeight:"bold",padding:"10px"}}>All current job</button></div>*/}
                            {/*</div>*/}
                        </Grid>
                        {/*<Grid item xs={12} >*/}
                        {/*    <Item>Activity Calender</Item>*/}
                        {/*</Grid>*/}
                        {currentState == false &&
                            <>
                                <Grid item xs={12}>
                                    <h2>Applied Job</h2>
                                </Grid>
                                <Grid item xs={12}>
                                    <TableContainer component={Paper}>
                                        <Table sx={{minWidth: 500}} aria-label="customized table">
                                            <TableHead>
                                                <TableRow>
                                                    <StyledTableCell style={{fontWeight: "bold"}}>Job
                                                        Provider</StyledTableCell>
                                                    <StyledTableCell align="left"
                                                                     style={{fontWeight: "bold"}}>Location</StyledTableCell>
                                                    <StyledTableCell align="left"
                                                                     style={{fontWeight: "bold"}}>Category</StyledTableCell>
                                                    <StyledTableCell align="left"
                                                                     style={{fontWeight: "bold"}}>Status</StyledTableCell>

                                                </TableRow>
                                            </TableHead>
                                            {dataLoading && <TableBody>
                                                {row.map((row) => (
                                                    <StyledTableRow key={row.jobProvider}>
                                                        <StyledTableCell component="th" scope="row">
                                                            {row.jobProvider}
                                                        </StyledTableCell>
                                                        <StyledTableCell align="left">{row.location}</StyledTableCell>
                                                        <StyledTableCell align="left">{row.category}</StyledTableCell>
                                                        <StyledTableCell align="left">{row.status}</StyledTableCell>

                                                    </StyledTableRow>
                                                ))}
                                            </TableBody>}
                                        </Table>
                                    </TableContainer>

                                </Grid>
                            </>
                        }

                        {currentState === true &&
                            <>
                                <Grid item xs={12}>
                                    <h2>Current Job</h2>
                                </Grid>
                                <Grid item xs={12}>
                                    <TableContainer component={Paper}>
                                        <Table sx={{minWidth: 500}} aria-label="customized table">
                                            <TableHead>
                                                <TableRow>
                                                    <StyledTableCell style={{fontWeight: "bold"}}>Job Provider</StyledTableCell>
                                                    <StyledTableCell align="left"
                                                                     style={{fontWeight: "bold"}}>Location</StyledTableCell>
                                                    <StyledTableCell align="left" style={{fontWeight: "bold"}}>Payment
                                                        Methoud</StyledTableCell>
                                                    <StyledTableCell align="left"
                                                                     style={{fontWeight: "bold"}}>Contact</StyledTableCell>
                                                    {/*<StyledTableCell align="left"*/}
                                                    {/*                 style={{fontWeight: "bold"}}>Contact</StyledTableCell>*/}
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {rows.map((row) => (
                                                    <StyledTableRow key={row.jobProvider}>
                                                        <StyledTableCell component="th" scope="row">
                                                            {row.jobProvider}
                                                        </StyledTableCell>
                                                        <StyledTableCell align="left">{row.location}</StyledTableCell>
                                                        <StyledTableCell align="left">{row.payment}</StyledTableCell>
                                                        {/*<StyledTableCell align="left">{row.status}</StyledTableCell>*/}
                                                        <StyledTableCell align="left">{row.mobile}</StyledTableCell>
                                                    </StyledTableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Grid>
                            </>
                        }


                    </Grid>
                    {/*<Grid item xs={4}>*/}
                    {/*    <Grid container spacing={2}>*/}
                    {/*        <Grid item xs={12}>*/}

                    {/*        </Grid>*/}
                    {/*        <Grid item xs={12} style={{marginLeft: "5%", marginBottom: "10px"}}>*/}
                    {/*            <div style={{*/}
                    {/*                display: "flex",*/}
                    {/*                flexDirection: "row",*/}
                    {/*                justifyContent: "center",*/}
                    {/*                backgroundColor: "#ECD2F2",*/}
                    {/*                borderRadius: "10px"*/}
                    {/*            }}>*/}
                    {/*                <div><h3>Upcoming All Task 24</h3></div>*/}

                    {/*            </div>*/}
                    {/*        </Grid>*/}
                    {/*        <Grid item xs={12} style={{marginLeft: "5%", marginBottom: "10px"}}>*/}
                    {/*            <div style={{*/}
                    {/*                display: "flex",*/}
                    {/*                flexDirection: "row",*/}
                    {/*                justifyContent: "center",*/}
                    {/*                backgroundColor: "#ECD2F2",*/}
                    {/*                borderRadius: "10px"*/}
                    {/*            }}>*/}
                    {/*                <div><h3>Daily Task 4</h3></div>*/}

                    {/*            </div>*/}
                    {/*        </Grid>*/}

                    {/*        <Grid item xs={12} style={{marginLeft: "5%"}}>*/}

                    {/*            <div>*/}
                    {/*                <Accordion>*/}
                    {/*                    <AccordionSummary*/}
                    {/*                        expandIcon={<ExpandMoreIcon/>}*/}
                    {/*                        aria-controls="panel1a-content"*/}
                    {/*                        id="panel1a-header"*/}
                    {/*                        style={{backgroundColor: "#ECD2F2"}}*/}
                    {/*                    >*/}
                    {/*                        <Typography><h4>FrockMe Textile</h4></Typography>*/}
                    {/*                    </AccordionSummary>*/}
                    {/*                    <AccordionDetails>*/}
                    {/*                        <div style={{display: "flex", flexDirection: "column"}}>*/}
                    {/*                            <Grid item xs={12}*/}
                    {/*                                  style={{backgroundColor: "lightgrey", fontWeight: "bold"}}>*/}
                    {/*                                Date:*/}
                    {/*                            </Grid>*/}
                    {/*                            <Grid item xs={12} style={{backgroundColor: "lightgrey"}}>*/}
                    {/*                                2022 july 23*/}
                    {/*                            </Grid>*/}
                    {/*                            <Grid item xs={12}*/}
                    {/*                                  style={{backgroundColor: "lightgrey", fontWeight: "bold"}}>*/}
                    {/*                                Time:*/}
                    {/*                            </Grid>*/}
                    {/*                            <Grid item xs={12} style={{backgroundColor: "lightgrey"}}>*/}
                    {/*                                9.00 am*/}
                    {/*                            </Grid>*/}
                    {/*                            <Grid item xs={12}*/}
                    {/*                                  style={{backgroundColor: "lightgrey", fontWeight: "bold"}}>*/}
                    {/*                                Venue:*/}
                    {/*                            </Grid>*/}
                    {/*                            <Grid item xs={12} style={{backgroundColor: "lightgrey"}}>*/}
                    {/*                                FrockMe, No 133/02/01*/}
                    {/*                                Highlevel Road*/}
                    {/*                                Kirulapana.*/}
                    {/*                            </Grid>*/}
                    {/*                        </div>*/}
                    {/*                    </AccordionDetails>*/}
                    {/*                </Accordion>*/}


                    {/*            </div>*/}

                    {/*        </Grid>*/}


                    {/*    </Grid>*/}
                    {/*</Grid>*/}

                </Grid>
            </Box>
        </div>
    );
};

export default JobSeekerDashboard;














