import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Divider from '@mui/material/Divider';

const useStyles = makeStyles({
        proButton:{
            marginTop: "30px",
            color: "red"
        },
        '&:focus': {
        outline: 'none',
    }
})

const SideNavTop = () => {
    const classes = useStyles();

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Stack sx={{m:3}} justifyContent="center" alignItems="flex-start">
                    <Typography variant="h6" gutterBottom sx={{fontWeight:800}}>
                        Rashmika Lakshan
                    </Typography>
                    <Typography variant="subtitle1" >
                        wrlakshan@gmail.com
                    </Typography>
                    <Button variant="outlined" endIcon={<ArrowRightAltIcon />} className={classes.proButton} sx={{mt:3}} >
                        Get Pro
                    </Button>
                    <Divider orientation="horizontal" flexItem sx={{mt:1, }}>
                    </Divider>
                </Stack>
            </Box>
        </>


    );
};

export default SideNavTop;