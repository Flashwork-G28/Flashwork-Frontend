import * as React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BlueMarket from '../../Assets/JobSeeker/BlueMarket.png'
import FrockMe from '../../Assets/JobSeeker/FrockMe.png'
import profile from '../../Assets/JobSeeker/profile.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#1C1C1C',
    //color: theme.palette.text.secondary,
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: 'purple',
        color: theme.palette.common.white,
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

function createData(
    jobSeeker: string,
    location: string,
    payment: string,
    status: string,
    mobile: string,
) {
    return { jobSeeker, location, payment,status,mobile };
}

const rows = [
    createData('Ananda Rajapaksha -No 04 | Aug 23 2022', 'kalutara', 'cash','current','0145689765'),
    createData('Lakshitha Dhananjaya -No 05 | Aug 23 2022', 'Matara', 'cash','progrs','0145689765'),
    createData('Pasindu  Dhananajaya -No 06 | Aug 23 2022', 'Panadura', 'cash','current','0145689765'),
    createData('Bhashitha  Sandeepa -No 07 | Aug 23 2022', 'MAradana', 'cash','current','0145689765'),
    createData('Sameera  Sankapal -No 09 | Aug 23 2022', 'Galle', 'cash','current','0145689765'),

];





const JobSeekerDashboard = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <h2>All  currenrt job</h2>
                        <Item>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 500 }} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell style={{fontWeight:"bold"}}>Job Seeker</StyledTableCell>
                                            <StyledTableCell align="left" style={{fontWeight:"bold"}}>Location</StyledTableCell>
                                            <StyledTableCell align="left" style={{fontWeight:"bold"}}>Payment Methoud</StyledTableCell>
                                            <StyledTableCell align="left" style={{fontWeight:"bold"}}>Status</StyledTableCell>
                                            <StyledTableCell align="left" style={{fontWeight:"bold"}}>Contact</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <StyledTableRow key={row.jobSeeker}>
                                                <StyledTableCell component="th" scope="row">
                                                    {row.jobSeeker}
                                                </StyledTableCell>
                                                <StyledTableCell align="left">{row.location}</StyledTableCell>
                                                <StyledTableCell align="left">{row.payment}</StyledTableCell>
                                                <StyledTableCell align="left">{row.status}</StyledTableCell>
                                                <StyledTableCell align="left">{row.mobile}</StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </Item>

                    </Grid>
                    <Grid item xs={4}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <Item>calender</Item>
                            </Grid>
                            <Grid item xs={12}>

                                    <h3>Upcoming All Task <div style={{color:'purple',fontWeight:"bold"}}>24</div> </h3>

                            </Grid>
                            <Grid item xs={12} style={{backgroundColor:"lightgray"}}>

                                    <Grid item xs={12} >
                                        <h3>Daily Task <div style={{color:'purple',fontWeight:"bold"}}>24</div> </h3>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <div style={{display:"flex",flexDirection:"row"}}>
                                            <div> <img src={BlueMarket} alt={BlueMarket} style={{borderRadius:"100%",paddingLeft:"5px"}}/></div>
                                            <div style={{paddingLeft:"30px"}}><h5>BlueMarket Privet Limited 8.00 am</h5></div>

                                            <ArrowDropDownIcon />
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <div style={{display:"flex",flexDirection:"row",backgroundColor:"darkgrey"}}>
                                            <div> <img src={FrockMe} alt={FrockMe} width={"50px"} height={"50px"} style={{borderRadius:"100%",paddingLeft:"5px"}}/></div>
                                            <div style={{paddingLeft:"28px",color:"#7A3293"}}><h5>FrockMe Textile 8.00 am</h5></div>
                                            <ArrowDropUpIcon />
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} >
                                        FrockMe, No 133/02/01
                                        Highlevel Road,
                                        Kirulapana.
                                    </Grid>
                                    <Grid item xs={12} >
                                        0772595548 / 0705594661
                                    </Grid>
                                    <Grid item xs={12} >
                                       <h3>Description</h3>
                                        This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                                    </Grid>
                                    <Grid item xs={12} >
                                        <div style={{display:"flex",flexDirection:"row"}}>
                                            <div> <img src={profile} alt={profile} style={{borderRadius:"100%",paddingLeft:"5px"}}/></div>
                                            <div style={{paddingLeft:"30px"}}><h5>BlueMarket Privet Limited 8.00 am</h5></div>

                                            <ArrowDropDownIcon />
                                        </div>
                                    </Grid>

                            </Grid>

                        </Grid>
                    </Grid>

                </Grid>
            </Box>
        </div>
    );
};

export default JobSeekerDashboard;
