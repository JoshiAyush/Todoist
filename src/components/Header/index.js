import React from "react";
import { FaPizzaSlice } from "react-icons/fa";

import { HeaderContainer } from "./style/Header.js";

function Header() {
    return (
        <HeaderContainer>

            <HeaderContainer.Nav>

                <HeaderContainer.Logo>

                    <HeaderContainer.Image src={"/images/logo.png"} alt={"Todoist"} />

                </HeaderContainer.Logo>

                <HeaderContainer.Settings>

                    <HeaderContainer.UnorderedList>

                        <HeaderContainer.List>+</HeaderContainer.List>

                        <HeaderContainer.List>

                            <FaPizzaSlice />

                        </HeaderContainer.List>

                    </HeaderContainer.UnorderedList>

                </HeaderContainer.Settings>

            </HeaderContainer.Nav>

        </HeaderContainer>
    );
}

export default Header;