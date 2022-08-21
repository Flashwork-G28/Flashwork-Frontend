import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {  NavLink } from "react-router-dom";
import {AdminSidebarData, JobProviderSidebarData, JobSeekerSidebarData, ManPowerSidebarData} from "./SideBarData";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles({
    navMenu: {
        width: "100%",
        top: "0",
    },
    navMenuItem: {
        width: "100%",
        padding: "0",
        listStyleType: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"

    },
    liItem: {
        width: "100%",

    },
    navText: {
        textDecoration: 'none',
        display: "flex",
        alignItems: "center",
        paddingLeft: "30px",
        height: "70px"
    },
    navTextActive: {
        textDecoration: 'none',
        display: "flex",
        alignItems: "center",
        marginRight: "60px",
        marginLeft: "-2px",
        paddingLeft: "30px",
        color: "white",
        backgroundColor:"#9C45BB",
        height: "70px"

    },

})

const SideNaveMenu = () => {
    const classes = useStyles();
    return (
        <>
            <nav className={classes.navMenu}>
                <ul className={ classes.navMenuItem}>
                    {AdminSidebarData.map((item, index) => {
                        return (
                            <li key={index} className={classes.liItem}>
                                <NavLink to={item.path} className={({ isActive }) =>
                                    isActive ? classes.navTextActive : classes.navText
                                } end>
                                    {item.icon}
                                    <Typography variant="h6" sx={{ml:1}}>
                                        {item.title}
                                    </Typography>
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>

            </nav>
        </>
    );
};

export default SideNaveMenu;
