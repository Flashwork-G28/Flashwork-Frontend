import React from 'react';
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Button from "@mui/material/Button";
import TablePagination from "@mui/material/TablePagination";
import {styled} from "@mui/material/styles";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 12,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 12,

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
    userType: string,
    reg: string,
    city: string,
    status: string,

) {
    return { name, userType, reg, city, status };
}

const rows = [
    createData('Udesh Lakshan', 'Carpenter', '07/08/2022', 'Matara', 'None'),
    createData('Rashmika Malshan', 'Transportation & delivery', '13/08/2022', 'Colombo', 'None'),
    createData('Shalani Hansika', 'Transportation & delivery', '22/08/2022', 'Kandy', 'None'),
    createData('Lakshitha Shehan', 'Carpenter', '11/08/2022', 'Galle', 'Rejected'),
    createData('Chavinda Perera', 'Transportation & delivery', '09/08/2022', 'Jaffna', 'Rejected'),
];


const JobApplitedWorkersList = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="left">Job provider</StyledTableCell>
                                <StyledTableCell align="left">Gender</StyledTableCell>
                                <StyledTableCell align="left">Contact</StyledTableCell>
                                <StyledTableCell align="left">Applied Date</StyledTableCell>

                                <StyledTableCell align="right"></StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row" align="left">{row.name}</StyledTableCell>
                                    <StyledTableCell align="left">{row.userType}</StyledTableCell>
                                    <StyledTableCell align="left">{row.reg}</StyledTableCell>
                                    <StyledTableCell align="left">{row.city}</StyledTableCell>
                                    <StyledTableCell align="left">{row.status}</StyledTableCell>
                                    <StyledTableCell align="right"><Button variant="contained">Accept</Button></StyledTableCell>
                                    {/*<StyledTableCell align="right"><Button href="#text-buttons" sx={{fontSize:'12px'}}>Accept</Button></StyledTableCell>*/}
                                    <StyledTableCell align="left"><Button sx={{backgroundColor: '#d32f2f'}} variant="contained">Reject</Button></StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    );
};

export default JobApplitedWorkersList;



