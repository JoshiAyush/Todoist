/**
 * @file src/Components/SideBar/index.js creates a custom react side bar component for our app that we need to keep the menus, 
 * inboxand many more components together. This file basically adds a functionality to choose between user's menus, inbox, next 7 
 * days and many more we also add custom react projects component to this file to show the user what (s)he needs to accomplish in 
 * the next _ time. 
 */

import React from "react";
import { useState } from "react";

import AddIcon from "@material-ui/icons/Add";
import { FaInbox } from "../../svg/index.js";
import { FaChevronDown } from "react-icons/fa";
import { FaRegCalendar } from "../../svg/index.js";
import { FaRegCalendarAlt } from "../../svg/index.js";

import { Projects } from "../index.js";

import { SideBarContainer } from "./style/SideBar.js";

import { useSelectedProjectStateValue } from "../../context/index.js";

function SideBar() {
    /**
     * @function SideBar()
     * 
     * @returns
     */
    const { setSelectedProject } = useSelectedProjectStateValue();
    const [active, setActive] = useState("inbox");
    const [showProjects, setShowProjects] = useState(true);

    return (
        <SideBarContainer>

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

                <SideBarContainer.Inner>

                    <SideBarContainer.Span>

                        <FaChevronDown />

                    </SideBarContainer.Span>

                    <SideBarContainer.H2>Projects</SideBarContainer.H2>

                    <SideBarContainer.Span>

                        <AddIcon />

                    </SideBarContainer.Span>

                </SideBarContainer.Inner>

                <SideBarContainer.Inner>

                    <Projects />

                </SideBarContainer.Inner>

            </SideBarContainer.Middle>

            <SideBarContainer.Middle>

                <SideBarContainer.Inner>

                    <SideBarContainer.Span>

                        <FaChevronDown />

                    </SideBarContainer.Span>

                    <SideBarContainer.H2>Labels</SideBarContainer.H2>

                    <SideBarContainer.Span>

                        <AddIcon />

                    </SideBarContainer.Span>

                </SideBarContainer.Inner>

                <SideBarContainer.Inner></SideBarContainer.Inner>

            </SideBarContainer.Middle>

            <SideBarContainer.Middle>

                <SideBarContainer.Inner>

                    <SideBarContainer.Span>

                        <FaChevronDown />

                    </SideBarContainer.Span>

                    <SideBarContainer.H2>Filters</SideBarContainer.H2>

                    <SideBarContainer.Span>

                        <AddIcon />

                    </SideBarContainer.Span>

                </SideBarContainer.Inner>

                <SideBarContainer.Inner></SideBarContainer.Inner>

            </SideBarContainer.Middle>

        </SideBarContainer>
    );
}

export default SideBar;
