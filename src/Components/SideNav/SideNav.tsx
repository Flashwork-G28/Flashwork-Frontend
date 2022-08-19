import React from 'react';
import {  NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {SidebarData} from "./SideBarData";
import AccessibleIcon from '@mui/icons-material/Accessible';

const useStyles = makeStyles({
    navMenu: {
        width: "100%",
        top: "0",
        display: "flex",
        justifyContent: "center"
    },
    navMenuItem: {
        width: "100%",
        padding: "0",
        listStyleType: "none",
        margin: "2",
    },
    navText: {
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        margin: 10,
    },
    navTextActive: {

    }

})

const SideNav = () => {
    const classes = useStyles();

    return (
        <>
            <nav className={classes.navMenu}>
                <ul className={ classes.navMenuItem}>
                    <li>
                        <NavLink to={"/dashboard"} className={classes.navText}>
                            <AccessibleIcon/>
                            <span>Reports</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/dashboard"} className={classes.navText}>
                            <AccessibleIcon/>
                            <span>Products</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/dashboard"} className={classes.navText}>
                            <AccessibleIcon/>
                            <span>Account</span>
                        </NavLink>
                    </li>

                </ul>
            </nav>
        </>
    );
};

export default SideNav;
