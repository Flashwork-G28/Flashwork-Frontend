import React, {useState} from 'react';
import SideNavTop from "./SideNavTop";
import SideNaveMenu from "./SideNaveMenu";
import {useAuth0} from "@auth0/auth0-react";

const SideNav = () => {
    const { user } = useAuth0();

    return (
        <>
            <SideNavTop/>
            <SideNaveMenu/>
        </>
    );
};

export default SideNav;
