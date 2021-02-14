import React from "react";

import { SideBarContainer } from "./style/SideBar.js";

function SideBar() {
    return (
        <SideBarContainer data-testid="sidebar">

            <SideBarContainer.UnorderedList>

                <SideBarContainer.List>Inbox</SideBarContainer.List>

                <SideBarContainer.List>Today</SideBarContainer.List>

                <SideBarContainer.List>Next 7 days</SideBarContainer.List>

            </SideBarContainer.UnorderedList>

        </SideBarContainer>
    );
}

export default SideBar;