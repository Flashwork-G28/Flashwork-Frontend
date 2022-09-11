import React, {useEffect, useState} from 'react';
import Typography from "@mui/material/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@mui/material/Grid";
import {useAuth0} from "@auth0/auth0-react";
import Swal from "sweetalert2";
import Avatar from "@mui/material/Avatar";
import pc1 from "../../Assets/backgroundImages/man1.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {purple} from "@mui/material/colors";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";

const axios = require('axios');

const useStyles = makeStyles({
    cardSection: {
        backgroundColor: '#F7D6FF',
        width: '100%',
        height: 'fitcontent',
        marginTop:'20px'

    },
    JobcardBody: {
        backgroundColor:'white',
        width:'650px',
        borderRadius: '10px',
        border: '3px solid #4E2363',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        margin:'30px',
    },
    wrapIcon: {
        verticalAlign: 'middle',
        display: 'inline-flex'
    }
})

const Jobs = () => {
    const classes = useStyles();
    const {
        user
    } = useAuth0();

    const confirmJob = (id:any) => {
        if(user?.family_name==="JobSeeker"){
            Swal.fire({
                title: 'You Are About Apply for this Job ? ',
                icon: 'question',
                iconHtml: '?',
                cancelButtonText: 'Cancel',
                confirmButtonText: 'Yes',
                showCancelButton: true,
                showCloseButton: true
            }).then((result) => {
                if (result.isConfirmed) {
                    let seekerId:any = user?.sub;
                    seekerId = seekerId.substring(6);
                    console.log(id,seekerId );
                    axios.post('http://localhost:8000/jobs/apply', {
                        job_id: id,
                        seeker_id: seekerId
                    })
                        .then(function (response:any) {
                            // console.log(response);
                            Swal.fire(
                                'Apply!',
                                'Your Succesfully Apply this Job.',
                                'success'
                            )
                        })
                        .catch(function (error:any) {
                            console.log(error);
                        });
                }
            })
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Please Log as a Job Seeker !"
            })
        }
    };

    const [jobs, setJobs] = useState<any>([]);
    const [ljobs, setLjobs] = useState<any>([]);
    const [loading, setLoading] = useState(false);

    const [jsize, setSize] = React.useState('');
    const handleChangeSize = (event: SelectChangeEvent) => {
        setSize(event.target.value);
        console.log(event.target.value);
    };


    const [categories, setCategories] = React.useState('');
    const handleChangeCatagoris = (event: SelectChangeEvent) => {
        setCategories(event.target.value);
        console.log(event.target.value);
    };


    const [Location, setLocation] = React.useState('');
    const handleChangeLocation = (event: SelectChangeEvent) => {
        setLocation(event.target.value);
        console.log(event.target.value);
    };
    async function getJobs() {
        try {
            const response = await axios.get('http://localhost:8000/jobs');
            // console.log(response);
            const dataj = response.data;
            dataj.map((item: any) => {
                const date1:any = new Date();
                const date2:any = new Date(item.pub_date);
                const diffTime = Math.abs(date2 - date1);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                setJobs((prevState: any) => [...prevState, {
                    id: item.id,
                    img: item.img,
                    first_name: item.first_name,
                    last_name: item.last_name,
                    city: item.city,
                    category: item.category,
                    description: item.description,
                    amc: item.amc,
                    pay: item.pay,
                    pub_date: diffDays,
                }])
                return null;
            });
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
            })
        }
    }

    async function getLatestJobs() {
        try {
            const response = await axios.get('http://localhost:8000/jobs/last');
            console.log(response);
            const datal = response.data;
            datal.map((item: any) => {
                const date1:any = new Date();
                const date2:any = new Date(item.pub_date);
                const diffTime = Math.abs(date2 - date1);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));


                setLjobs((prevState: any) => [...prevState, {
                    id: item.id,
                    img: item.img,
                    first_name: item.first_name,
                    last_name: item.last_name,
                    city: item.city,
                    category: item.category,
                    description: item.description,
                    amc: item.amc,
                    pay: item.pay,
                    pub_date: diffDays,
                }])
                return null;
            });
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
            })
        }
    }

    useEffect(() => {
        getJobs();
        getLatestJobs();
        setLoading(true);


    }, [])

    return (
        <>
            <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" sx={{paddingTop:5}}>
                <Box sx={{ minWidth: 300 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">All Categories</InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={categories}
                            label="categories"
                            onChange={handleChangeCatagoris}
                        >
                            <MenuItem value="">
                                <em>All Categories</em>
                            </MenuItem>
                            <MenuItem value={1}>Restaurant & food services</MenuItem>
                            <MenuItem value={2}>Transportation & delivery</MenuItem>
                            <MenuItem value={3}>Retail & Production</MenuItem>
                            <MenuItem value={4}>Office work & Administration</MenuItem>
                            <MenuItem value={5}>General services</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box sx={{ minWidth: 300 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-select-small">Any Location</InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={Location}
                            label="Location"
                            onChange={handleChangeLocation}>
                            <MenuItem value="">
                                <em>Any Location</em>
                            </MenuItem>
                            <MenuItem value={1}>Galle</MenuItem>
                            <MenuItem value={2}>Matara</MenuItem>
                            <MenuItem value={3}>Nugegoda</MenuItem>
                            <MenuItem value={4}>Maharagama</MenuItem>
                            <MenuItem value={5}>Kirulapana</MenuItem>
                            <MenuItem value={6}>Kahawaththa</MenuItem>
                            <MenuItem value={7}>Panadura</MenuItem>
                            <MenuItem value={8}>Kohuwala</MenuItem>
                            <MenuItem value={9}>Delkanda</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box sx={{ minWidth: 300 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-select-small">Number of Workers</InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={jsize}
                            label="jsizq"
                            onChange={handleChangeSize}>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                {/*<Button variant="contained" color="secondary" >Search</Button>*/}
            </Stack>
            <div>
                <Typography variant="h6" component="h6" fontWeight='700' textAlign='left' margin='10px 0px 0px 30px'>
                    Work That You Prefer
                </Typography>
                <Grid className={classes.cardSection}
                      container
                      spacing={0.0}
                      direction="row"
                      justifyContent="center"
                      alignItems="center">
                    {loading ? jobs.map((item: any) => {
                        return (
                            <div className={classes.JobcardBody} key={item.id}>
                                <Grid container  sx={{m:2}} width={"fit-content"}>
                                    <Grid item xs={3}>
                                        <Avatar
                                            alt="Remy Sharp"
                                            src= {pc1}
                                            sx={{ width: 100, height: 100 }}
                                        />
                                    </Grid>
                                    <Grid item xs={9} display={"flex"} flexDirection={"column"} >
                                        <Typography  variant="h5"  fontWeight='700'  >
                                            {item.first_name} {item.last_name}
                                        </Typography>
                                        <Grid container>
                                            <Grid item xs={4}>
                                                <Typography variant="body2" fontWeight='500' sx={{mt:1}} className={classes.wrapIcon}  >
                                                    <  LocationOnIcon sx={{mr:1,color:purple[900]}} />{item.city}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Typography variant="body2" fontWeight='500' sx={{mt:1}} className={classes.wrapIcon}  >
                                                    <  WorkIcon sx={{mr:1,color: purple[900]}} />{item.category}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Typography variant="body2" fontWeight='500' sx={{mt:1}} className={classes.wrapIcon}  >
                                                    <  PersonIcon sx={{mr:1,color: purple[900]}} />{item.amc} Members
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Typography  variant="subtitle1"  fontWeight='400'   sx={{mt:2}}>
                                            1 Worker Paymet : {item.pay} LKR
                                        </Typography>
                                    </Grid>


                                    <Grid item xs={12}>
                                        <Typography variant="body2" fontWeight='500' sx={{m:1}}  >
                                            {item.description}
                                        </Typography>

                                    </Grid>
                                    <Grid container item  alignItems="center" xs={12}  sx={{mt:1,ml:1}}>
                                        <Grid item xs={6}>
                                            <Typography variant="subtitle2" fontWeight='700' >
                                                {item.pub_date} Days Ago
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6} >
                                            <Box display="flex" justifyContent="flex-end">
                                                <Button sx={{mr:2}} variant="contained" onClick={() => confirmJob(item.id)}>Apply</Button>
                                            </Box>

                                        </Grid>
                                    </Grid>
                                </Grid>
                            </div>

                        )
                    }) : <p>Loading...</p>}
                </Grid>
            </div>

            <div>
                <Typography variant="h6" component="h6" fontWeight='700' textAlign='left' margin='50px 0px 0px 30px'>
                    Latest Jobs
                </Typography>
                <Grid className={classes.cardSection}
                      container
                      spacing={0.0}
                      direction="row"
                      justifyContent="center"
                      alignItems="center">
                    {loading ? ljobs.map((item: any) => {
                        return (
                            <div className={classes.JobcardBody} key={item.id}>
                                <Grid container  sx={{m:2}} width={"fit-content"}>
                                    <Grid item xs={3}>
                                        <Avatar
                                            alt="Remy Sharp"
                                            src= {pc1}
                                            sx={{ width: 100, height: 100 }}
                                        />
                                    </Grid>
                                    <Grid item xs={9} display={"flex"} flexDirection={"column"} >
                                        <Typography  variant="h5"  fontWeight='700'  >
                                            {item.first_name} {item.last_name}
                                        </Typography>
                                        <Grid container>
                                            <Grid item xs={4}>
                                                <Typography variant="body2" fontWeight='500' sx={{mt:1}} className={classes.wrapIcon}  >
                                                    <  LocationOnIcon sx={{mr:1,color:purple[900]}} />{item.city}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Typography variant="body2" fontWeight='500' sx={{mt:1}} className={classes.wrapIcon}  >
                                                    <  WorkIcon sx={{mr:1,color: purple[900]}} />{item.category}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Typography variant="body2" fontWeight='500' sx={{mt:1}} className={classes.wrapIcon}  >
                                                    <  PersonIcon sx={{mr:1,color: purple[900]}} />{item.amc} Members
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Typography  variant="subtitle1"  fontWeight='400'   sx={{mt:2}}>
                                            1 Worker Paymet : {item.pay} LKR
                                        </Typography>
                                    </Grid>


                                    <Grid item xs={12}>
                                        <Typography variant="body2" fontWeight='500' sx={{m:1}}  >
                                            {item.description}
                                        </Typography>

                                    </Grid>
                                    <Grid container item  alignItems="center" xs={12}  sx={{mt:1,ml:1}}>
                                        <Grid item xs={6}>
                                            <Typography variant="subtitle2" fontWeight='700' >
                                                {item.pub_date} Days Ago
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6} >
                                            <Box display="flex" justifyContent="flex-end">
                                                <Button sx={{mr:2}} variant="contained" onClick={confirmJob}>Apply</Button>
                                            </Box>

                                        </Grid>
                                    </Grid>
                                </Grid>
                            </div>

                        )
                    }) : <p>Loading...</p>}
                </Grid>
            </div>

        </>
    );
};

export default Jobs;

