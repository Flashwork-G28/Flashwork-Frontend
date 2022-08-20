import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import bc1 from "../../Assets/backgroundImages/countWorker.png";
import bc2 from "../../Assets/backgroundImages/countWorker2.png";
import bc3 from "../../Assets/backgroundImages/countGroup.png";


const itemData = [
    {
        img: bc3,
        title: '124K',
        author: 'Job Providers',
    },
    {
        img: bc1,
        title: '35K',
        author: 'Avilable Workers',
    },
    {
        img: bc2,
        title: '4K',
        author: 'Man Power Agency',
    }
];


const UsersCountingSection = () => {
        return (
            <div style={{alignItems:'center' , backgroundColor:'red'}}>
                <ImageList sx={{ width: 1/1, height: 270 }} cols={3} gap={0}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=640&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=640&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.title}
                                subtitle={item.author}
                                sx={{
                                    fontWeight: 'bold',
                                    mx: 0.001,
                                    height:'100%',
                                    fontSize: 36,
                                }}
                            />

                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        );

    }

export default UsersCountingSection;
