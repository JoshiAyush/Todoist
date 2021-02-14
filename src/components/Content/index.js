import React from "react";

import { ContentContainer } from "./style/Content.js";

import { Header } from "../index.js";
import { SideBar } from "../index.js";

function Content() {
    return (
        <ContentContainer>

            <Header />

            <SideBar />

        </ContentContainer>
    );
}

export default Content;