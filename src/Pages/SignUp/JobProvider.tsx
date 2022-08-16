import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";


const useStyles = makeStyles({
        root:{
            backgroundColor: "#D89EE7",
            backgroundAttachment: "fixed",
            minHeight: "100vh",
            backgroundSize: "cover",
        },
        container: {
            width: "auto",
            margin: "0 auto",
            paddingTop: 10,
            paddingBottom: 10,
            minHeight: "100vh",
        },
        select: {
            "& :focus": {
                backgroundColor: "transparent",
            },
        },


    })
;

const JobProvider = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container className={classes.container}>
                <Card >
                    <CardContent sx={{display: 'flex',alignItems: 'left'}}>
                        <Typography gutterBottom variant="h5" component="div">
                            Job Seeker Sign Up
                        </Typography>
                    </CardContent>
                    <form>
                        <Grid container spacing={2}>

                        </Grid>
                    </form>
                </Card>
            </Container>
        </div>
    );
};

export default JobProvider;
