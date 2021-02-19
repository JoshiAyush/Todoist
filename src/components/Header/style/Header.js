import { I } from "./style.js";
import { List } from "./style.js";
import { Span } from "./style.js";
import { Input } from "./style.js";
import { Control } from "./style.js";
import { Container } from "./style.js";
import { InputHolder } from "./style.js";

HeaderContainer.Control = ({ children, ...props }) => (
    <Control {...props}>
        {children}
    </Control>
);

HeaderContainer.Span = ({ children, ...props }) => (
    <Span {...props}>
        {children}
    </Span>
);

HeaderContainer.List = ({ children, ...props }) => (
    <List {...props}>
        {children}
    </List>
);

HeaderContainer.I = ({ children, ...props }) => (
    <I {...props}>
        {children}
    </I>
);

HeaderContainer.InputHolder = ({ children, ...props }) => (
    <InputHolder {...props}>
        {children}
    </InputHolder>
);

HeaderContainer.Input = ({ ...props }) => (
    <Input {...props} />
);

export function HeaderContainer({ children, ...props }) {
    return (
        <Container {...props}>
            {children}
        </Container>
    );
}