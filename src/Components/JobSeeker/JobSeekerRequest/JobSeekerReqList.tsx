import React, {useEffect, useState} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { createTheme } from '@mui/material/styles';
import axios from "axios";


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
    name: string,
    location: string,
    catogory: string,

) {
    return { name, location,  catogory };
}

// const rows = [
//     createData('Ananda Rajapaksha', 'Nugegoda', 'Car penter'),
//     createData('Lakshitha Dhananjaya', 'Kalutara', 'Electrition'),
//     createData('Pasindu  Dhananajaya ', 'Panadura', 'Car penter'),
//     createData('Bhashitha  Sandeepa ', 'Galle', 'Electrit'),
//     createData('Sameera  Sankapal', 'Matara', 'Car penter'),
//     createData('Sameera  Sankapal ', 'Matara', 'Car penter'),
//
//
// ];



//
// useEffect(()=>{
//     getRequestWorker();
// },[])

const JobSeekerReqList = () => {
    const [rows, setRows] = useState<any[]>([]);
    useEffect(() => {
        axios({
            url: "http://localhost:8000/jobs/appliedJobs",
            method: "GET",
        })
            .then((res) => {
                console.log(res.data);
                setRows(res.data);

            })
            .catch((err) => {
                console.log(err)
            });
    }, []);
    return (
        <div style={{display:"flex",flexDirection:"column"}}>
            <div style={{color:"#46225F",paddingRight:"500px"}} >
            <h2>Request</h2>
            </div>
            <div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 1000 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell style={{fontWeight:"bold"}}>Job Provider</StyledTableCell>
                                <StyledTableCell style={{fontWeight:"bold"}} align="left">Location</StyledTableCell>
                                <StyledTableCell style={{fontWeight:"bold"}} align="left">Catogory</StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.category}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.city}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">{row.first_name}</StyledTableCell>
                                    <StyledTableCell align="left">{row.last_name}</StyledTableCell>
                                    <StyledTableCell align="left"><button style={{padding:"5px",backgroundColor:"#43BA5D",border:"none",fontWeight:"bold",color:"white",borderRadius:"3px"}}>Accept</button></StyledTableCell>
                                    <StyledTableCell align="left"><button style={{padding:"5px",backgroundColor:"red",border:"none",fontWeight:"bold",color:"white",borderRadius:"3px"}}>Reject</button></StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default JobSeekerReqList;
