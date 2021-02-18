import React from "react";

import Menu from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import Avatar from "@material-ui/core/Avatar";
import HomeIcon from "@material-ui/icons/Home";
import HelpIcon from '@material-ui/icons/Help';
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";

import { Productivity } from "../../Svg/index.js";

import { HeaderContainer } from "./style/Header.js";

function Header() {
    return (
        <HeaderContainer>

            <HeaderContainer.Control>

                <HeaderContainer.List><Menu /></HeaderContainer.List>

                <HeaderContainer.List><HomeIcon /></HeaderContainer.List>

                <HeaderContainer.List><SearchIcon /></HeaderContainer.List>

            </HeaderContainer.Control>

            <HeaderContainer.Control>

                <HeaderContainer.List><AddIcon /></HeaderContainer.List>

                <HeaderContainer.List><Productivity /></HeaderContainer.List>

                <HeaderContainer.List><HelpIcon /></HeaderContainer.List>

                <HeaderContainer.List><NotificationsIcon /></HeaderContainer.List>

                <HeaderContainer.List><Avatar /></HeaderContainer.List>

            </HeaderContainer.Control>

        </HeaderContainer>
    );
}

export default Header;