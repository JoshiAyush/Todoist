import { List } from "./style.js";
import { Control } from "./style.js";
import { Container } from "./style.js";

HeaderContainer.Control = ({ children, ...props }) => (
    <Control {...props}>
        {children}
    </Control>
);

HeaderContainer.List = ({ children, ...props }) => (
    <List {...props}>
        {children}
    </List>
);

export function HeaderContainer({ children, ...props }) {
    return (
        <Container {...props}>
            {children}
        </Container>
    );
}