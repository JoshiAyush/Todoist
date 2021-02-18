import React from "react";

import { ContentContainer } from "./style/Content.js";

import { Body } from "../index.js";
import { Header } from "../index.js";

function Content() {
    return (
        <ContentContainer>

            <Header />

            <Body />

        </ContentContainer>
    );
}

export default Content;