import React, {useEffect, useState} from 'react';
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
import Box from "@mui/material/Box";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import GroupIcon from "@mui/icons-material/Group";
import PaidIcon from "@mui/icons-material/Paid";
import DateRangeIcon from "@mui/icons-material/DateRange";
import CallIcon from "@mui/icons-material/Call";
import RequestProfile from "../../../Assets/JobSeeker/JobSeekerReqPro.png";
import {useAuth0} from "@auth0/auth0-react";
import axios from "axios";
import Swal from "sweetalert2";
import CircularProgress from "@mui/material/CircularProgress";

const Item = styled(Paper)(({ theme }) => ({
    //backgroundColor: theme.palette.mode === 'dark' ? '#000000' : 'none',
    // ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'start',
    color: '#1C1C1C',
    borderRadius:'20px',
    // color: theme.palette.text.secondary,
}));

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



const JobDashboardSaveJobSeeker = () => {

    // const [page, setPage] = React.useState(0);
    // const [rowsPerPage, setRowsPerPage] = React.useState(10);
    //
    // const handleChangePage = (event: unknown, newPage: number) => {
    //     setPage(newPage);
    // };
    //
    // const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setRowsPerPage(+event.target.value);
    //     setPage(0);
    // };

    const {
        user
    } = useAuth0();

    const [SaveWorker, setSaveWorkers]= useState<any>([]);
    const [loading, setLoading] = useState(false);

    async function getSaveWorkers() {
        try {
            const response = await axios.get('http://localhost:8000/jobProvider/saveWorkers');
            const data = response.data;
            data.map((item: any) => {
                setSaveWorkers((prevState: any) => [...prevState, {
                    user_id: item.user_id,
                    first_name: item.first_name,
                    last_name: item.last_name,
                    img:item.img,
                    category: item.category,
                    description: item.description,
                    complet_count: item.complet_count,
                    rate: item.rate,
                }])
                return null;
            });
        } catch (any) {
            console.error(any);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
            })
        }
    }


    const openDetails = () => {
        alert("hhhhhhhh");

    };

    useEffect(() => {
        getSaveWorkers();
        setLoading(true);

    }, [])

    return (
        <div>
            <Grid container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  style={{marginBottom:'30px'}}>

                <Grid item xs={6}>
                    <Typography variant="h6" component="h6" fontWeight='700' textAlign='left' padding='20px 0px 20px 0px'>Saved Workers</Typography>

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
                <Grid item xs={5} spacing={2}>
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
                                    {loading? SaveWorker.map((item: any) => {
                                        return(
                                            <StyledTableRow >
                                                <StyledTableCell style={{cursor: 'pointer'}} onClick={openDetails} component="th" scope="row" align="left">kkkkkkk </StyledTableCell>
                                                <StyledTableCell align="left">hhhhhhhhhhh</StyledTableCell>
                                            </StyledTableRow>
                                        );

                                    }) :<CircularProgress />}
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Paper>
                </Grid>
                <Grid item xs={7} >
                    <Paper style={{marginLeft:'25px'}}>

                        {/*<JobSeekerReqProfile />*/}

                        <div>

                            <Box  sx={{ flexGrow: 1 }} style={{ paddingLeft:'25px'}}>
                                <Grid  container spacing={2} >
                                    <Grid  item xs={12} >
                                        <Item style={{boxShadow:'none'}}><h2>Ananda Rajakaruna</h2></Item>
                                    </Grid>
                                    <Grid  item xs={6}>

                                        <Item style={{boxShadow:'none'}} >
                                            <div style={{display:"flex",flexDirection:"row",fontWeight:"bold",paddingBottom:"8px"}}><PersonPinCircleIcon />Nugegoda</div>
                                            <div style={{display:"flex",flexDirection:"row",fontWeight:"bold",paddingBottom:"8px"}}><GroupIcon />5  Members</div>
                                            <div style={{display:"flex",flexDirection:"row",fontWeight:"bold",paddingBottom:"8px"}}><PaidIcon />Online</div>
                                            <div style={{display:"flex",flexDirection:"row",fontWeight:"bold",paddingBottom:"8px"}}><DateRangeIcon />23-08-2022</div>
                                            <div style={{display:"flex",flexDirection:"row",fontWeight:"bold",paddingBottom:"8px"}}><CallIcon />+94772826357</div>

                                        </Item>


                                    </Grid>
                                    <Grid item xs={6}>
                                        <Item style={{boxShadow:'none'}}>
                                            <img src={RequestProfile} width={"150px"} height={"150px"} alt={"RequestProfile"}/>
                                        </Item>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Item style={{boxShadow:'none'}}><h3>Note</h3></Item>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Item style={{boxShadow:'none'}}>I Need A Job Today. Work From Home Sites. Work Remote. Work From Home Sites. Computer Work From Home</Item>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Item style={{boxShadow:'none'}}>Chat</Item>
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                    </Paper>

                </Grid>

            </Grid>



        </div>
    );
};

export default JobDashboardSaveJobSeeker;
