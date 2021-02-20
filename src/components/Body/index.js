import React from "react";

import { Inbox } from "../index.js";
import { SideBar } from "../index.js";

import { BodyContainer } from "./style/Body.js";

function Body() {
    return (
        <BodyContainer>

            <SideBar />

            <BodyContainer.Hidden />

            <Inbox />

        </BodyContainer>
    );
}

export default Body;