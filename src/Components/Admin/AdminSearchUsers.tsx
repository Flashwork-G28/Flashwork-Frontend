import React, { useEffect, useState } from 'react';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import {alpha } from '@mui/material/styles';
import axios from 'axios';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    paddingRight: '2px',
    padding: '15px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
    float: 'right',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    // color: 'inherit',
    color: '#4E2363',
    borderRadius: '10px',
    border: '1px solid #E5E5E5',
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',

    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '20ch',
            '&:focus': {
                width: '25ch',
            },
        },
    },
}));

const SearchBar = () => {
    // Get all users
  const [details, setDetails] = useState<any>([]);

  const viewUsers = () => {
      axios.get('http://localhost:8000/users/').then((response) => {
          const det = response.data;
          // console.log(user_id);
          det.map((item: any) => {
              // const date1:any = new Date();
              // const date2:any = new Date(item.pub_date);
              // const diffTime = Math.abs(date2 - date1);
              // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

              setDetails((prevState: any) => [...prevState, {
                  user_id: item.user_id,
                  img: item.img,
                  first_name: item.first_name,
                  last_name: item.last_name,
                  nid: item.nid,
                  street: item.street,
                  city: item.city,
                  mobile: item.mobile,
                  email: item.email,
                  type: item.type,
                  status: item.status,
              }])
              
          });
      }).catch(function (error) {
          if (error.response) {
              // setAlertPara("Something went wrong when creating the user!");
              // setVariant("danger");
              // setShow(true);
          }
      })
  }

  const [typing, setTyping] = useState('');

  const viewSearched = (keyword: any) => {
    setDetails(
        details.filter((details: { first_name: any; last_name: any }) => {
            return (details.first_name == keyword);
        })
    );
    console.log(keyword);
    console.log(details.first_name);
    // setOpen(true);
  };

//   const handleChange = (e: any) => {
//     setTyping(e);
//     console.log(typing);
//     viewSearched(typing);
//   };

  const [inputText, setInputText] = useState("");
  let inputHandler = (e: any) => {
    //convert input text to lower case
    setInputText(e.target.value);
    if(inputText != "") {
        viewSearched(inputText);
    }
  };
  
  useEffect(() => {
    viewUsers();
  });


    return (
        <>
            <Search style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <SearchIcon style={{paddingRight: '10px'}} />
                <StyledInputBase
                    placeholder="Search User..."
                    inputProps={{ 'aria-label': 'search' }}
                    type = {'text'}
                    value = {inputText}
                    onChange = {inputHandler}
                />
            </Search>
        </>
    );
};

export default SearchBar;
