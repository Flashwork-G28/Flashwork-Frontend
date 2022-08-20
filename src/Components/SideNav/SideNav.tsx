
import React from 'react';
import {  NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {SidebarData} from "./SideBarData";
import AccessibleIcon from '@mui/icons-material/Accessible';
import SideNavTop from "./SideNavTop";
import HomeIcon from '@mui/icons-material/Home';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import PersonIcon from '@mui/icons-material/Person';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import EqualizerIcon from '@mui/icons-material/Equalizer';

const useStyles = makeStyles({
    navMenu: {
        width: "50%",
        top: "0",
        display: "flex",
        justifyContent: "center",
    },
    navMenuItem: {
        // width: "100%",
        padding: "0",
        listStyleType: "none",
        margin: "2",

    },
    navText: {
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        margin: 10,
        paddingLeft:"4x",
    },
    navTextActive: {
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        margin: 10,
        color: "white",
        paddingLeft: "3px",
    }

})

const SideNav = () => {
    const classes = useStyles();

    return (
        <>
            <SideNavTop/>
            <nav className={classes.navMenu}>
                <ul className={ classes.navMenuItem}>
                    <div style={{display:"flex",flexDirection:"column",width:"180px",height:"30px"}}>
                        <li>
                            <div style={{width:"137%",backgroundColor:"#9C45BB",padding:"5px",paddingLeft:"25px",marginLeft:"20px"}}>
                                <NavLink to={"/home"} className={classes.navTextActive}>
                                    <HomeIcon />
                                    <span style={{fontWeight:"bold"}}>Home</span>
                                </NavLink>
                            </div>
                        </li>

                        <li>
                            <div style={{width:"137%",backgroundColor:"lightgray",padding:"5px",paddingLeft:"25px",marginLeft:"20px"}}>
                                <NavLink to={"/dashboard"} className={classes.navText}>
                                    <AutoAwesomeMosaicIcon />
                                    <span style={{fontWeight:"bold"}}>Dashboard</span>
                                </NavLink>
                            </div>
                        </li>

                        <li>
                            <div style={{width:"137%",backgroundColor:"lightgray",padding:"5px",paddingLeft:"25px",marginLeft:"20px"}}>
                                <NavLink to={"/profile"} className={classes.navText}>
                                    <PersonIcon />
                                    <span style={{fontWeight:"bold"}}>Profile</span>
                                </NavLink>
                            </div>
                        </li>

                        <li>
                            <div style={{width:"137%",backgroundColor:"lightgray",padding:"5px",paddingLeft:"25px",marginLeft:"20px"}}>
                                <NavLink to={"/Advertisments"} className={classes.navText}>
                                    <MarkUnreadChatAltIcon />
                                    <span style={{fontWeight:"bold"}}>Advertisments</span>
                                </NavLink>
                            </div>
                        </li>

                        <li>
                            <div style={{width:"137%",backgroundColor:"lightgray",padding:"5px",paddingLeft:"25px",marginLeft:"20px"}}>
                                <NavLink to={"/report"} className={classes.navText}>
                                    <ContactSupportIcon />
                                    <span style={{fontWeight:"bold"}}>Report</span>
                                </NavLink>
                            </div>
                        </li>

                        <li>
                            <div style={{width:"137%",backgroundColor:"lightgray",padding:"5px",paddingLeft:"25px",marginLeft:"20px"}}>
                                <NavLink to={"/help"} className={classes.navText}>
                                    <EqualizerIcon />
                                    <span style={{fontWeight:"bold"}}>Help</span>
                                </NavLink>
                            </div>
                        </li>


                    </div>
                    {/*<li>*/}
                    {/*    <div style={{width:"174%",backgroundColor:"white",padding:"5px"}}>*/}
                    {/*        <NavLink to={"/dashboard"} className={classes.navText}>*/}
                    {/*            <PersonIcon/>*/}
                    {/*            <span style={{fontWeight:"bold"}}>Dashboard</span>*/}
                    {/*        </NavLink>*/}
                    {/*    </div>*/}
                    {/*</li>*/}



                </ul>
            </nav>
        </>
    );
};

export default SideNav;
