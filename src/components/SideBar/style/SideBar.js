import { List } from "./style.js";
import { Container } from "./style.js";
import { UnorderedList } from "./style.js";

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


export function SideBarContainer({ children, ...props }) {
    return (
        <Container {...props}>
            {children}
        </Container>
    );
}