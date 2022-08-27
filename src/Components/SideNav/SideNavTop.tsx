import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Divider from '@mui/material/Divider';
import {useAuth0} from "@auth0/auth0-react";

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
    const { user } = useAuth0();
    console.log(user);

    if(user?.family_name==="Admin"){
        return (
            <>
                <Box sx={{ width: '100%' }}>
                    <Stack sx={{m:3}} justifyContent="center" alignItems="flex-start">
                        <Typography variant="h6" gutterBottom sx={{fontWeight:800}}>
                            ADMIN
                        </Typography>
                        <Typography variant="subtitle1" >
                            {user?.name}
                        </Typography>
                        <Divider orientation="horizontal" flexItem sx={{mt:1, }}>
                        </Divider>
                    </Stack>
                </Box>
            </>
        );
    }else{
        return (
            <>
                <Box sx={{ width: '100%' }}>
                    <Stack sx={{m:3}} justifyContent="center" alignItems="flex-start">
                        <Typography variant="h6" gutterBottom sx={{fontWeight:800}}>
                            {user?.name}
                        </Typography>
                        <Typography variant="subtitle1" >
                            {user?.email}
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
    }

};

export default SideNavTop;