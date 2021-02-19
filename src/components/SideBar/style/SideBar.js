import { H2 } from "./style.js";
import { List } from "./style.js";
import { Span } from "./style.js";
import { Inner } from "./style.js";
import { Middle } from "./style.js";
import { Projects } from "./style.js";
import { Container } from "./style.js";
import { UnorderedList } from "./style.js";

SideBarContainer.Middle = ({ children, ...props }) => (
    <Middle {...props}>
        {children}
    </Middle>
);

SideBarContainer.Span = ({ children, ...props }) => (
    <Span {...props}>
        {children}
    </Span>
);

SideBarContainer.List = ({ children, ...props }) => (
    <List {...props}>
        {children}
    </List>
);

SideBarContainer.UnorderedList = ({ children, ...props }) => (
    <UnorderedList {...props}>
        {children}
    </UnorderedList>
);

SideBarContainer.H2 = ({ children, ...props }) => (
    <H2 {...props}>
        {children}
    </H2>
);

SideBarContainer.Projects = ({ children, ...props }) => (
    <Projects {...props}>
        {children}
    </Projects>
);

SideBarContainer.Inner = ({ children, ...props }) => (
    <Inner {...props}>
        {children}
    </Inner>
);

export function SideBarContainer({ children, ...props }) {
    return (
        <Container {...props}>
            {children}
        </Container>
    );
}