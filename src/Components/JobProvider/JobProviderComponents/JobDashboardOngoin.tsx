import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import JobDashboardSaveJobSeeker from "./JobDashboardSaveJobSeeker";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";

import { styled } from '@mui/material/styles';

import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

import Paper from '@mui/material/Paper';
import { createTheme } from '@mui/material/styles';
import {useEffect, useState} from "react";
import axios from "axios";
import {useAuth0} from "@auth0/auth0-react";
import CircularProgress from "@mui/material/CircularProgress";


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



const JobDashboardOngoin = () => {
    const {
        user
    } = useAuth0();

    const [expanded, setExpanded] = React.useState<string | false>(false);
    const [job, setJob]= useState<any>([]);
    const [loading, setLoading] = useState(false);

    // const [bookingWorkers, setBookingWorkers]= useState<any>([]);
    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    async function ongoinJob() {
        let providerID:any = user?.sub;
        providerID = providerID.substring(6)

        axios.post('http://localhost:8000/jobProvider/ongoinAdvertiesment', {
            job_provider_id : providerID,

        })
            .then(function (response) {
                const data = response.data;

                data.map((item: any) => {
                    setJob((prevState: any) => [...prevState, {
                        id : item.id,
                        title : item.title,
                        job_date : item.job_date,
                    }])
                });

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        ongoinJob();

    }, [])


        return (
            <div>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header">
                        <Typography sx={{width: '33%', flexShrink: 0}}>
                            Clean Car
                        </Typography>
                        <Typography sx={{color: 'text.secondary'}}>Task Date : 2022/11/05</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Table sx={{minWidth: 400}} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell style={{fontWeight: "bold"}}>Job Provider</StyledTableCell>
                                    <StyledTableCell style={{fontWeight: "bold"}}
                                                     align="left">Location</StyledTableCell>
                                    <StyledTableCell style={{fontWeight: "bold"}} align="left">Mobile
                                        No</StyledTableCell>
                                    <StyledTableCell style={{fontWeight: "bold"}} align="left">Email</StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {/*{rows.map((row) => (*/}
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">Amila Disanayaka</StyledTableCell>
                                    <StyledTableCell align="left">Nugegoda</StyledTableCell>
                                    <StyledTableCell align="left">0778545664</StyledTableCell>
                                    <StyledTableCell align="left">amiladisanayaka@gmail.com</StyledTableCell>
                                    <StyledTableCell align="left">
                                        <button style={{
                                            padding: "5px",
                                            backgroundColor: "#43BA5D",
                                            border: "none",
                                            fontWeight: "bold",
                                            color: "white",
                                            borderRadius: "3px"
                                        }}>Accept
                                        </button>
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        <button style={{
                                            padding: "5px",
                                            backgroundColor: "red",
                                            border: "none",
                                            fontWeight: "bold",
                                            color: "white",
                                            borderRadius: "3px"
                                        }}>Reject
                                        </button>
                                    </StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">Nuwan Gamage</StyledTableCell>
                                    <StyledTableCell align="left">Galle</StyledTableCell>
                                    <StyledTableCell align="left">0711545677</StyledTableCell>
                                    <StyledTableCell align="left">nuwangamage@gmail.com</StyledTableCell>
                                    <StyledTableCell align="left">
                                        <button style={{
                                            padding: "5px",
                                            backgroundColor: "#43BA5D",
                                            border: "none",
                                            fontWeight: "bold",
                                            color: "white",
                                            borderRadius: "3px"
                                        }}>Accept
                                        </button>
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        <button style={{
                                            padding: "5px",
                                            backgroundColor: "red",
                                            border: "none",
                                            fontWeight: "bold",
                                            color: "white",
                                            borderRadius: "3px"
                                        }}>Reject
                                        </button>
                                    </StyledTableCell>
                                </StyledTableRow>
                                {/*))}*/}
                            </TableBody>
                        </Table>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header">
                        <Typography sx={{width: '33%', flexShrink: 0}}>
                            Clean Garden
                        </Typography>
                        <Typography sx={{color: 'text.secondary'}}>Task Date : 2022/11/10</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Table sx={{minWidth: 400}} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell style={{fontWeight: "bold"}}>Job Provider</StyledTableCell>
                                    <StyledTableCell style={{fontWeight: "bold"}}
                                                     align="left">Location</StyledTableCell>
                                    <StyledTableCell style={{fontWeight: "bold"}} align="left">Mobile
                                        No</StyledTableCell>
                                    <StyledTableCell style={{fontWeight: "bold"}} align="left">Email</StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                    <StyledTableCell align="left"></StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {/*{rows.map((row) => (*/}
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">Amila Disanayaka</StyledTableCell>
                                    <StyledTableCell align="left">Nugegoda</StyledTableCell>
                                    <StyledTableCell align="left">0778545664</StyledTableCell>
                                    <StyledTableCell align="left">amiladisanayaka@gmail.com</StyledTableCell>
                                    <StyledTableCell align="left">
                                        <button style={{
                                            padding: "5px",
                                            backgroundColor: "#43BA5D",
                                            border: "none",
                                            fontWeight: "bold",
                                            color: "white",
                                            borderRadius: "3px"
                                        }}>Accept
                                        </button>
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        <button style={{
                                            padding: "5px",
                                            backgroundColor: "red",
                                            border: "none",
                                            fontWeight: "bold",
                                            color: "white",
                                            borderRadius: "3px"
                                        }}>Reject
                                        </button>
                                    </StyledTableCell>
                                </StyledTableRow>
                                {/*))}*/}
                            </TableBody>
                        </Table>
                    </AccordionDetails>
                </Accordion>

            </div>


        );




}

export default JobDashboardOngoin;