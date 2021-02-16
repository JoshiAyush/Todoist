/**
 * @file SideBar/index.js 
 */

import React from "react";

import { FaInbox } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";

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

                    <SideBarContainer.Span>Next 7 days</SideBarContainer.Span>

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