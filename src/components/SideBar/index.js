/**
 * @file src/Components/SideBar/index.js creates a custom react side bar component for our app that we need to keep the menus, 
 * inboxand many more components together. This file basically adds a functionality to choose between user's menus, inbox, next 7 
 * days and many more we also add custom react projects component to this file to show the user what (s)he needs to accomplish in 
 * the next _ time. 
 */

import React from "react";

import { FaInbox } from "../../svg/index.js";
import { FaChevronDown } from "react-icons/fa";
import { FaRegCalendar } from "../../svg/index.js";
import { FaRegCalendarAlt } from "../../svg/index.js";

import { SideBarContainer } from "./style/SideBar.js";

function SideBar() {
    /**
     * @function SideBar()
     * 
     * @returns
     */

    return (
        <SideBarContainer data-testid="sidebar">

            <SideBarContainer.UnorderedList>

                <SideBarContainer.List>

                    <SideBarContainer.Span>

                        <FaInbox />

                    </SideBarContainer.Span>

                    <SideBarContainer.Span>Inbox</SideBarContainer.Span>

                </SideBarContainer.List>

                <SideBarContainer.List>

                    <SideBarContainer.Span>

                        <FaRegCalendar />

                    </SideBarContainer.Span>

                    <SideBarContainer.Span>Today</SideBarContainer.Span>

                </SideBarContainer.List>

                <SideBarContainer.List>

                    <SideBarContainer.Span>

                        <FaRegCalendarAlt />

                    </SideBarContainer.Span>

                    <SideBarContainer.Span>Upcomming</SideBarContainer.Span>

                </SideBarContainer.List>

            </SideBarContainer.UnorderedList>

            <SideBarContainer.Middle>

                <SideBarContainer.Span>

                    <FaChevronDown />

                </SideBarContainer.Span>

                <SideBarContainer.H2>Projects</SideBarContainer.H2>

            </SideBarContainer.Middle>

            <SideBarContainer.Projects>



            </SideBarContainer.Projects>

        </SideBarContainer>
    );
}

export default SideBar;
