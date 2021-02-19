import React from "react";

import { ContentContainer } from "./style/Content.js";

import { Body } from "../../components/index.js";
import { Header } from "../../components/index.js";

function Content() {
    return (
        <ContentContainer>

            <Header />

            <Body />

        </ContentContainer>
    );
}

export default Content;