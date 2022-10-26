



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
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import {useState} from "react";





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
    createData('Ananda Rajapaksha', 'kalutara', 'cash','current','0145689765'),
    createData('Lakshitha Dhananjaya', 'Matara', 'cash','progrs','0145689765'),
    createData('Pasindu  Dhananajaya', 'Panadura', 'cash','current','0145689765'),
    createData('Bhashitha  Sandeepa', 'MAradana', 'cash','current','0145689765'),
    createData('Sameera  Sankapal', 'Galle', 'cash','current','0145689765')
];





const JobSeekerReport = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);


    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
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
                            <Grid item xs={12} style={{marginLeft:"5%",marginBottom:"10px"}}>
                                <div style={{display:"flex",flexDirection:"row",justifyContent:"center",backgroundColor:"#ECD2F2",borderRadius:"10px"}}>
                                    <div><h3>Upcoming All Task 24</h3></div>

                                </div>
                            </Grid>
                            <Grid item xs={12} style={{marginLeft:"5%",marginBottom:"10px"}}>
                                <div style={{display:"flex",flexDirection:"row",justifyContent:"center",backgroundColor:"#ECD2F2",borderRadius:"10px"}}>
                                    <div><h3>Daily Task 4</h3></div>

                                </div>
                            </Grid>

                            <Grid item xs={12} style={{marginLeft:"5%"}}>

                                <div>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            style={{backgroundColor:"#ECD2F2"}}
                                        >
                                            <Typography><h4>FrockMe Textile</h4></Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div style={{display:"flex",flexDirection:"column"}}>
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
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                            style={{backgroundColor:"#ECD2F2"}}
                                        >
                                            <Typography><h4>BlueMarket Privet Limited</h4></Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                <div style={{display:"flex",flexDirection:"column"}}>
                                                    <Grid item xs={12} style={{backgroundColor:"lightgrey",fontWeight:"bold"}}>
                                                        Date:
                                                    </Grid>
                                                    <Grid item xs={12} style={{backgroundColor:"lightgrey"}}>
                                                        2022 May 23
                                                    </Grid>
                                                    <Grid item xs={12} style={{backgroundColor:"lightgrey",fontWeight:"bold"}}>
                                                        Time:
                                                    </Grid>
                                                    <Grid item xs={12} style={{backgroundColor:"lightgrey"}}>
                                                        10.00 am
                                                    </Grid>
                                                    <Grid item xs={12} style={{backgroundColor:"lightgrey",fontWeight:"bold"}}>
                                                        Venue:
                                                    </Grid>
                                                    <Grid item xs={12} style={{backgroundColor:"lightgrey"}}>
                                                        BlueMArket, No 134/02/01
                                                        Highlevel Road
                                                        Kirulapana.
                                                    </Grid>
                                                </div>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>

                                </div>
                                {/*<div style={{backgroundColor:"#ECD2F2",borderRadius:"10px"}}>*/}
                                {/*    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>*/}
                                {/*        FrockMe Textile*/}
                                {/*        <ArrowDropDownIcon />*/}
                                {/*    </Button>*/}
                                {/*    <Menu*/}
                                {/*        id="simple-menu"*/}
                                {/*        anchorEl={anchorEl}*/}
                                {/*        keepMounted*/}
                                {/*        open={Boolean(anchorEl)}*/}
                                {/*        onClose={handleClose}*/}
                                {/*    >*/}
                                {/*        <MenuItem onClick={handleClose}>*/}
                                {/*            <div style={{display:"flex",flexDirection:"column"}}>*/}
                                {/*                <Grid item xs={12} style={{backgroundColor:"lightgrey",fontWeight:"bold"}}>*/}
                                {/*                    Date:*/}
                                {/*                </Grid>*/}
                                {/*                <Grid item xs={12} style={{backgroundColor:"lightgrey"}}>*/}
                                {/*                    2022 july 23*/}
                                {/*                </Grid>*/}
                                {/*                <Grid item xs={12} style={{backgroundColor:"lightgrey",fontWeight:"bold"}}>*/}
                                {/*                    Time:*/}
                                {/*                </Grid>*/}
                                {/*                <Grid item xs={12} style={{backgroundColor:"lightgrey"}}>*/}
                                {/*                    9.00 am*/}
                                {/*                </Grid>*/}
                                {/*                <Grid item xs={12} style={{backgroundColor:"lightgrey",fontWeight:"bold"}}>*/}
                                {/*                    Venue:*/}
                                {/*                </Grid>*/}
                                {/*                <Grid item xs={12} style={{backgroundColor:"lightgrey"}}>*/}
                                {/*                    FrockMe, No 133/02/01*/}
                                {/*                    Highlevel Road*/}
                                {/*                    Kirulapana.*/}
                                {/*                </Grid>*/}
                                {/*            </div>*/}

                                {/*        </MenuItem>*/}

                                {/*    </Menu>*/}
                                {/*</div>*/}
                            </Grid>

                        </Grid>
                    </Grid>

                </Grid>
            </Box>
        </div>
    );
};

export default JobSeekerReport;
