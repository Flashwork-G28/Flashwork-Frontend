import React from 'react';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import {ListItem} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        background: `#E3C7ED`,
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        backgroundSize: "cover",
    },
    link:{
        textDecoration: 'none',
    },
    containerBox:{
        width: 500,
        height: 100,
    }
});


const SignUp = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Dialog open={true}>
                <DialogTitle id="customized-dialog-title">
                    Sign up as
                </DialogTitle>
                <Grid container direction="row" justifyContent="center" className={classes.containerBox}>
                    <Grid item xs="auto" >
                        <Link to="/signUp/JobSeeker" className={classes.link}>
                            <ListItem button>
                                <Box mt={5} mb={5} ml={10} mr={10}>
                                    <Typography>Job Seeker</Typography>
                                </Box>
                            </ListItem>
                        </Link>
                    </Grid>
                    <Grid item xs="auto" >
                        <Link to="/signUp/JobProvider" className={classes.link}>
                            <ListItem button>
                                <Box mt={5} mb={5} ml={10} mr={10}>
                                    <Typography>Job Provider</Typography>
                                </Box>
                            </ListItem>
                        </Link>
                    </Grid>
                    <Grid item xs="auto" >
                        <Link to="/signUp/Company" className={classes.link}>
                            <ListItem button>
                                <Box mt={5} mb={5} ml={10} mr={10}>
                                    <Typography>ManPower Agency</Typography>
                                </Box>
                            </ListItem>
                        </Link>
                    </Grid>
                </Grid>
            </Dialog>
        </div>
    );
};

export default SignUp;

