import React, {useEffect, useState} from 'react';
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
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import SearchBar from "../../CommonComponent/SearchBar";
import axios from "axios";
import Swal from "sweetalert2";
import {useAuth0} from "@auth0/auth0-react";


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
    category: string,
    reg: string,
    pymMethod: string,
    status: string,

) {
    return { name, category, reg, pymMethod, status };
}

const rows = [
    createData('Udesh Lakshan', 'Job Seeker', '07/08/2022', 'Cash', 'None'),
    createData('Rashmika Malshan', 'Job Seeker', '13/08/2022', 'Cash', 'None'),
    createData('Shalani Hansika', 'Manpower agency', '22/08/2022', 'Cash', 'None'),
    createData('Lakshitha Shehan', 'Job Provider', '11/08/2022', 'Online', 'Accept'),
    createData('Chavinda Perera', 'Job Provider', '09/08/2022', 'Cash', 'Accept'),
];


const JobDashboardWorkerTable = () => {

    const {
        user
    } = useAuth0();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [workers, setBookingWorkers]= useState<any>([]);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    async function getBookingWorkers() {
        let providerID:any = user?.sub;
        providerID = providerID.substring(6)
        let provider_id:any = user?.sub;
        provider_id = provider_id.substring(6);

        axios.post('http://localhost:8000/workers/booking', {



        })
            .then(function (response) {
                console.log(response);

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        getBookingWorkers();
        // setLoading(true);
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


            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="left">Requested Date</StyledTableCell>
                                <StyledTableCell align="left">Name</StyledTableCell>
                                <StyledTableCell align="left">Category</StyledTableCell>
                                <StyledTableCell align="left">Payment Method</StyledTableCell>
                                <StyledTableCell align="left">Status</StyledTableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell align="left">{row.reg}</StyledTableCell>
                                    <StyledTableCell component="th" scope="row" align="left">{row.name} </StyledTableCell>
                                    <StyledTableCell align="left">{row.category}</StyledTableCell>
                                    <StyledTableCell align="left">{row.pymMethod}</StyledTableCell>
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

export default JobDashboardWorkerTable;
