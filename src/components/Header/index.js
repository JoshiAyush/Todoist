import React from "react";

import Menu from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import Avatar from "@material-ui/core/Avatar";
import HomeIcon from "@material-ui/icons/Home";
import HelpIcon from '@material-ui/icons/Help';
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";

import { Productivity } from "../../svg/index.js";

import { HeaderContainer } from "./style/Header.js";

function Header() {
    return (
        <HeaderContainer>

            <HeaderContainer.Control>

                <HeaderContainer.List><Menu /></HeaderContainer.List>

                <HeaderContainer.List><HomeIcon /></HeaderContainer.List>

                <HeaderContainer.List>
                    
                    <HeaderContainer.InputHolder>

                        <HeaderContainer.I><SearchIcon /></HeaderContainer.I>

                        <HeaderContainer.Input placeholder="Find" />

                    </HeaderContainer.InputHolder>
                    
                </HeaderContainer.List>

            </HeaderContainer.Control>

            <HeaderContainer.Control>

                <HeaderContainer.List><AddIcon /></HeaderContainer.List>

                <HeaderContainer.List>

                    <HeaderContainer.Span>

                        <Productivity />

                        <HeaderContainer.Span>{"0/5"}</HeaderContainer.Span>

                    </HeaderContainer.Span>

                </HeaderContainer.List>

                <HeaderContainer.List><HelpIcon /></HeaderContainer.List>

                <HeaderContainer.List><NotificationsIcon /></HeaderContainer.List>

                <HeaderContainer.List><Avatar /></HeaderContainer.List>

            </HeaderContainer.Control>

        </HeaderContainer>
    );
}

export default Header;