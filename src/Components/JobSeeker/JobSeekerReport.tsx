



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
        backgroundColor: '#4E2363',
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





const JobSeekerReport = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <h2 style={{paddingRight:"540px"}} >All  Currenrt job</h2>
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

                            </Grid>
                            <Grid item xs={12} style={{backgroundColor:"lightgrey",marginLeft:"5%"}}>
                                <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
                                    <div><h3>Upcoming All Task 24</h3></div>
                                    <div><ArrowDropDownIcon /></div>
                                </div>
                            </Grid>
                            <Grid item xs={12} style={{backgroundColor:"lightgrey",marginLeft:"5%"}}>
                                <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
                                    <div><h3>Daily Task 2</h3></div>
                                    <div><ArrowDropDownIcon /></div>
                                </div>
                            </Grid>

                            <Grid item xs={12} style={{backgroundColor:"#E5E5E5",marginLeft:"5%"}}>
                                <div style={{display:"flex",flexDirection:"row"}}>
                                    <div><h4>BlueMarket Privet Limited</h4></div>
                                    <div><ArrowDropDownIcon /></div>
                                </div>
                            </Grid>
                            <Grid item xs={12} style={{backgroundColor:"#E5E5E5",marginLeft:"5%"}}>
                                <div style={{display:"flex",flexDirection:"row"}}>
                                    <div><h4>FrockMe Textile</h4></div>
                                    <div><ArrowDropDownIcon /></div>
                                </div>
                            </Grid>
                            <Grid item xs={12} style={{backgroundColor:"#E5E5E5",marginLeft:"5%",display:"flex",flexDirection:"column"}}>
                                <Grid item xs={12} style={{backgroundColor:"lightgrey",fontWeight:"bold"}}>
                                    Date:
                                </Grid>
                                <Grid item xs={12} style={{backgroundColor:"lightgrey"}}>
                                    2022 july 23
                                </Grid>
                                <Grid item xs={12} style={{backgroundColor:"lightgrey",fontWeight:"bold"}}>
                                    Time:
                                </Grid>
                                <Grid item xs={12} style={{backgroundColor:"lightgrey"}}>
                                    9.00 am
                                </Grid>
                                <Grid item xs={12} style={{backgroundColor:"lightgrey",fontWeight:"bold"}}>
                                    Venue:
                                </Grid>
                                <Grid item xs={12} style={{backgroundColor:"lightgrey"}}>
                                    FrockMe, No 133/02/01
                                    Highlevel Road
                                    Kirulapana.
                                </Grid>




                            </Grid>

                        </Grid>
                    </Grid>

                </Grid>
            </Box>
        </div>
    );
};

export default JobSeekerReport;
