import React from 'react';
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TablePagination from "@mui/material/TablePagination";
import {styled} from "@mui/material/styles";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Grid from "@mui/material/Grid";


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
    count: string,
    name: string,
    category: string,
    gender: string,
    status: string,

) {
    return {count, name, category,gender, status };
}

const rows = [
    createData('1','Udesh Lakshan', 'Job Seeker', 'Male', 'Available'),
    createData('2','Rashmika Malshan', 'Job Seeker', 'Male', 'Available',),
    createData('3','Shalani Hansika', 'Manpower agency', 'Female', 'None'),
    createData('4','Lakshitha Shehan', 'Job Provider', 'Male', 'Available'),
    createData('5','Chavinda Perera', 'Job Provider', 'Male', 'Available'),
];


const ManMemberMemberTable = () => {
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
        <div>

            <Stack justifyContent='flex-end' alignItems='center' direction="row" spacing={0} textAlign='center'>
                <AddCircleOutlineIcon />
                <Button style={{marginBottom: '5px',fontSize:'16px',fontWeight:'700'}}>Add New Member</Button>
            </Stack>





            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="left">count</StyledTableCell>
                                <StyledTableCell align="left">Name</StyledTableCell>
                                <StyledTableCell align="left">Category</StyledTableCell>
                                <StyledTableCell align="left">Gender</StyledTableCell>
                                <StyledTableCell align="left">Status</StyledTableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell align="left">{row.count}</StyledTableCell>
                                    <StyledTableCell component="th" scope="row" align="left">{row.name} </StyledTableCell>
                                    <StyledTableCell align="left">{row.category}</StyledTableCell>
                                    <StyledTableCell align="left">{row.gender}</StyledTableCell>
                                    <StyledTableCell align="left">{row.status}</StyledTableCell>
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


        </div>
    );
};

export default ManMemberMemberTable;
