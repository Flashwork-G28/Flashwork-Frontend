import React from 'react';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SearchBar from "../../CommonComponent/SearchBar";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TablePagination from "@mui/material/TablePagination";
import {styled} from "@mui/material/styles";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import JobSeekerReqProfile from "../../JobSeeker/JobSeekerRequest/JobSeekerReqProfile";


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

) {
    return { name, category};
}

const rows = [
    createData('Udesh Lakshan', 'Job Seeker'),
    createData('Rashmika Malshan', 'Job Seeker'),
    createData('Shalani Hansika', 'Manpower agency'),
    createData('Lakshitha Shehan', 'Job Provider'),
    createData('Chavinda Perera', 'Job Provider'),
];



const JobDashboardSaveJobSeeker = () => {

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


            <Grid container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  >
                <Grid style={{backgroundColor:'red'}} item xs={4} spacing={2}>
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 270 }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>

                                        <StyledTableCell align="left">Name</StyledTableCell>
                                        <StyledTableCell align="left">Category</StyledTableCell>


                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <StyledTableRow key={row.name}>
                                            <StyledTableCell component="th" scope="row" align="left">{row.name} </StyledTableCell>
                                            <StyledTableCell align="left">{row.category}</StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Paper>
                </Grid>
                <Grid style={{backgroundColor:'red'}} item xs={8} >
                    <Paper style={{backgroundColor:'blue',marginLeft:'25px'}}>
                        <JobSeekerReqProfile />
                    </Paper>

                </Grid>

            </Grid>




        </div>
    );
};

export default JobDashboardSaveJobSeeker;
