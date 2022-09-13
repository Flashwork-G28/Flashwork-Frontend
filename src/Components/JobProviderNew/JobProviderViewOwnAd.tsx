import { Button, Dialog, DialogContent, Grid, Paper, Typography } from '@mui/material';
import * as React from 'react';
import JobProviderPostAd from './JobProviderPostAd';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useAuth0 } from '@auth0/auth0-react';

export default function JobProviderViewOwnAd() {
    // const {user} = useAuth0();
    // let user_id:any = user?.sub;
    // user_id = user_id.substring(6);

    const [isShown, setIsShown] = useState(false);

    const handleClick = () => {
        // toggle shown state
        setIsShown(current => !current);
        // or simply set it to true
        // setIsShown(true);
    };

    const [details, setDetails] = useState<any>([]);

    useEffect(() => {
        axios.get("http://localhost:8000/jobs/").then((response) => {
            const det = response.data;
            // console.log(det);
            det.map((item: any) => {
                // const date1:any = new Date();
                // const date2:any = new Date(item.pub_date);
                // const diffTime = Math.abs(date2 - date1);
                // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                setDetails((prevState: any) => [...prevState, {
                    id: item.id,
                    // img: item.img,
                    title: item.title,
                    city: item.city,
                    pub_date: item.pub_date,
                    category: item.category,

                    description: item.description,
                    // amc: item.amc,
                    // pay: item.pay,
                    // pub_date: diffDays,
                }])
                return null;
            });
        }).catch(function (error) {
            if (error.response) {
                // setAlertPara("Something went wrong when creating the user!");
                // setVariant("danger");
                // setShow(true);
            }
        })
    }, []);
    // if (!details) return null;

    function createData(
        title: string,
        city: string,
        category: string,
        description: string,
        // protein: string,
    ) {
        return { title, city, category, description };
    }

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: 'purple',
          color: theme.palette.common.white,
          fontSize: 16,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 16,
          
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
    
  return (
    
    <Paper sx={{maxHeight: '80vh', overflow: 'scroll'}}>
        <Typography sx={{backgroundColor: '#ECD2F2'}} variant="h5" component="h5" fontWeight='700' color='black' padding={3} textAlign='left'>
            Job Advertisements
        </Typography><br />
        <Grid container spacing={2} sx={{padding: '10px 20px 40px 20px'}}>
            <Grid item xs={12}>
                <Button variant='contained' onClick={handleClick} sx={{padding: '10px 30px 10px 30px', fontSize: '15px', display: 'flex', borderRadius: '20px'}}>
                    New Advertisement &nbsp; &nbsp;
                    <ArrowDropDownCircleIcon />
                </Button>
                {/* show elements on click */}
                {isShown && (
                    <div>
                        <Typography variant="h5" component="h5" fontWeight='700' color='primary' marginTop={4} textAlign='center'>
                            Post A New Advertisement
                        </Typography> <br />
                    </div>
                )}

                {/* show component on click */}
                {isShown && <JobProviderPostAd />}
            </Grid>
            <Grid item xs={12}>
                {/* {details.map((val, key) => {
                    return (
                        <h6 >{val}</h6>
                        // <h6 >{val}</h6>
                    );
                })} */}
                {/* <p>{JSON.stringify(details, null, 4)}</p> */}
                
                <TableContainer component={Paper} sx={{borderRadius: '20px', maxHeight: '40vh', overflow: 'scroll', boxShadow: '0 5px 20px rgba(0,0,0,0.2), 0 5px 20px rgba(0,0,0,0.2)'}}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell sx={{padding: '20px 30px'}} align="left">Title</StyledTableCell>
                            <StyledTableCell align="left">City</StyledTableCell>
                            <StyledTableCell align="left">Category</StyledTableCell>
                            <StyledTableCell align="left">Published Date</StyledTableCell>
                            <StyledTableCell align="left">Description</StyledTableCell>
                            <StyledTableCell align="left"></StyledTableCell>
                        </TableRow>
                        </TableHead>
                        {details.map((item: any) => {
                            if(item.category==1) {
                                item.category='Restaurant & Food Services'
                            }
                            if(item.category==2) {
                                item.category='Transportation & Delivery'
                            }
                            if(item.category==3) {
                                item.category='Retail & Production'
                            }
                            if(item.category==4) {
                                item.category='Office Work & Administration'
                            }
                            if(item.category==5) {
                                item.category='General Services'
                            }
                            return (
                                <TableBody sx={{borderBottom: '0.1px solid purple'}}>
                                    <StyledTableRow
                                        key={item.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                    <StyledTableCell sx={{padding: '0px 30px'}}
                                        component="th" scope="row">{item.title}
                                    </StyledTableCell>
                                    <StyledTableCell 
                                        align="left">{item.city}
                                    </StyledTableCell>
                                    <StyledTableCell 
                                        align="left"> {item.category}
                                    </StyledTableCell>
                                    <StyledTableCell 
                                        align="left"> {item.pub_date}
                                    </StyledTableCell>
                                    <StyledTableCell sx={{maxWidth: '200px'}}
                                        align="left">{item.description}
                                    </StyledTableCell>
                                    <StyledTableCell sx={{maxWidth: '200px'}}
                                        align="left">
                                        <div style={{display: 'flex'}}>
                                            <Button>
                                                <VisibilityIcon />
                                            </Button>
                                            <Button>
                                                <DeleteIcon color='error'/>
                                            </Button>
                                        </div>
                                    </StyledTableCell>
                                    </StyledTableRow>
                                </TableBody>
                            )
                        })}
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    </Paper>
  )
}
