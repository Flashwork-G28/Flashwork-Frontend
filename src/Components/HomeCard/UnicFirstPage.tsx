import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import bg from "../../Assets/Home/SideImage.png";
import {makeStyles} from "@material-ui/core/styles";
import Button from '@mui/material/Button';
import SearchBar from "../CommonComponent/SearchBar";


const useStyles = makeStyles({
    root: {
        backgroundImage: `url(${bg})`,
        // backgroundColor:'red',
        width:'340px',
        height:'427px',
        margin:'70px 10px 10px 90px'
    }
})

export default function UnicFirstPage() {
    const classes = useStyles();
    return (

        <div style={{marginLeft:'20px'}}>
            <Grid container spacing={2}>

                <Grid xs={6}
                      container
                      justifyContent="space-between"
                      alignItems="flex-end"
                      margin='60px'>
                    <Grid>

                        <Typography variant="subtitle1" component="div" fontWeight='1000' fontSize='72px' textAlign='left' lineHeight='1' color='#4E2363'>
                            We Will Do Your All Work
                        </Typography>
                        <Typography variant="body2" fontWeight='500' fontSize='24px' textAlign='left' marginTop='50px' >
                            We Are The Best Solution For You Can Also Find Job
                            Opportunities And Avail Services. Come Join Flash Work.
                        </Typography>

                    </Grid>
                    <Button variant="contained">Get Start</Button>
                    <SearchBar />

                    </Grid>


                <Grid style={{width:'500px', height:'600px'}}>
                    <div className={classes.root}></div>
                </Grid>
            </Grid>
        </div>
    );
}