import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Grid from "@mui/material/Grid";
import bg1 from "../../../Assets/backgroundImages/myPub.png";
import bg2 from "../../../Assets/backgroundImages/countWorker2.png";
import bg3 from "../../../Assets/backgroundImages/countWorker.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const useStyles = makeStyles({
    cardBody: {

        backgroundColor: '#E5E5E5',
        width: '130px',
        height: '150px',
        borderRadius: '10px',
        // border: '3px solid #E5E5E5',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        padding: '20px 10px 10px 10px',
        margin:'30px',
        textAlign:'center',

    },
});


const ManMemberCategory = () => {
    const classes = useStyles();
    return (
        <div>

<Grid container
      direction="row"
      justifyContent="center"
      alignItems="center">
            <div className={classes.cardBody}>
                <Typography variant="h5" component="h5" fontWeight='1000' marginBottom='20px' color='#4E2363'>
                    06
                </Typography>

                <Typography variant="subtitle1"  fontWeight='1000' color='#4E2363' >
                    Carpenter
                </Typography>

                <Typography variant="subtitle2"  fontWeight='700' >
                    Available-4
                </Typography>

                <Typography variant="subtitle2"  fontWeight='700' >
                    Working-6
                </Typography>

            </div>

            <div className={classes.cardBody}>
                <Typography variant="h5" component="h5" fontWeight='1000' marginBottom='20px' color='#4E2363'>
                    12
                </Typography>

                <Typography variant="subtitle1"  fontWeight='1000' color='#4E2363' >
                    Drivers
                </Typography>

                <Typography variant="subtitle2"  fontWeight='700' >
                    Available-7
                </Typography>

                <Typography variant="subtitle2"  fontWeight='700' >
                    Working-5
                </Typography>

            </div>

            <div className={classes.cardBody}>
                <Typography variant="h5" component="h5" fontWeight='1000' marginBottom='20px' color='#4E2363'>
                    03
                </Typography>

                <Typography variant="subtitle1"  fontWeight='1000' color='#4E2363' >
                    Electrician
                </Typography>

                <Typography variant="subtitle2"  fontWeight='700' >
                    Available-2
                </Typography>

                <Typography variant="subtitle2"  fontWeight='700' >
                    Working-1
                </Typography>

            </div>

            <div className={classes.cardBody}>
                <Typography variant="h5" component="h5" fontWeight='1000' marginBottom='20px' color='#4E2363'>
                    <AddCircleOutlineIcon />
                </Typography>

                <Typography variant="subtitle1"  fontWeight='1000' color='#4E2363' >
                    Add New Category
                </Typography>


            </div>
</Grid>
        </div>

    );
};

export default ManMemberCategory;
