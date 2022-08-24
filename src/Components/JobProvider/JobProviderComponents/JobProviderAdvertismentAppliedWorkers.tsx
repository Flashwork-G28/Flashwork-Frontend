import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TablePagination from '@mui/material/TablePagination';
import Typography from '@mui/material/Typography';


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

function createData(
    name: string,
    gender: string,
    reg: string,
    contact: string,
    email: string,

) {
    return { name, gender, reg, contact, email };
}

const rows = [
    createData('Udesh Lakshan', 'Job Seeker', '07/08/2022', '764599874', 'lak98@gmail.com'),
    createData('Rashmika Malshan', 'Job Seeker', '13/08/2022', '745562158', 'rm97@gmail.com'),
    createData('Shalani Hansika', 'Manpower agency', '22/08/2022', '772564877', 'shala.hans89@gmail.com'),
    createData('Lakshitha Shehan', 'Job Provider', '11/08/2022', '715469887', 'shehanLak@gmail.com'),
    createData('Chavinda Perera', 'Job Provider', '09/08/2022', '705562412', 'chaviPP@gmail.com'),
];

const JobProviderAdvertismentAppliedWorkers = () => {
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
                                <StyledTableCell align="left">Name</StyledTableCell>
                                <StyledTableCell align="left">Gender</StyledTableCell>
                                <StyledTableCell align="left">Applied Date</StyledTableCell>
                                <StyledTableCell align="left">Contact</StyledTableCell>
                                <StyledTableCell align="left">Email</StyledTableCell>
                                <StyledTableCell align="right"></StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row" align="left">{row.name} </StyledTableCell>
                                    <StyledTableCell align="left">{row.gender}</StyledTableCell>
                                    <StyledTableCell align="left">{row.reg}</StyledTableCell>
                                    <StyledTableCell align="left">{row.contact}</StyledTableCell>
                                    <StyledTableCell align="left">{row.email}</StyledTableCell>
                                    <StyledTableCell align="right"><Button variant="contained" sx={{fontSize:14 }}>Accept</Button></StyledTableCell>
                                    <StyledTableCell align="left"><Button sx={{backgroundColor: '#d32f2f', fontSize:14 }} variant="contained">Reject</Button></StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 15, 90]}
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

export default JobProviderAdvertismentAppliedWorkers;
