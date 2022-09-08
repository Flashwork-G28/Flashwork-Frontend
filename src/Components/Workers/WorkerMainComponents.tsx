import React from 'react';
import Grid from "@mui/material/Grid";
import {makeStyles} from "@material-ui/core/styles";

import StarIcon from "@mui/icons-material/Star";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import pc1 from "../../Assets/JobSeeker/JobSeekerReqPro.png";
import pc2 from "../../Assets/ContactUs/5.png";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import WorkerCardMp from "./WorkerCardMP";

const useStyles = makeStyles({
    cardSection: {
        backgroundColor: '#F7D6FF',
        width: '100%',
        height: 'fitcontent',
        marginTop:'20px'
    },
})



const featuredPosts = [
    {
        name: 'Chathuri Priyangika',
        title: 'Featured post',
        date: '12',
        image: pc2,
        description: 'I have been repairing anything that needed it for 35 years.\n' +
                        'I have an engineering degree, tools, and a truck. How can I help you?',

    },
    {
        name: 'Sharika Gamhewa',
        title: 'Post title',
        date: '110',
        image: pc1,
        description: 'I have been repairing anything that needed it for 35 years.\n' +
                    'I have an engineering degree, tools, and a truck. How can I help you?',

    },
];

const WorkerMainComponents = () => {
    const classes = useStyles();

    return (
        <>

            <Grid className={classes.cardSection}
                  container
                  spacing={0.0}
                  direction="row"
                  justifyContent="center"
                  alignItems="center">

                {/*<WorkerCard />*/}
                <WorkerCardMp />
                {/*<WorkerCard />*/}

                {/*{featuredPosts.map((post) => (*/}
                {/*    <WorkerCard key={post.title} post={post} />*/}
                {/*))}*/}


            </Grid>

        </>
    );
};

export default WorkerMainComponents;
