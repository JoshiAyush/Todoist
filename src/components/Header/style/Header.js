import { Logo } from "./style.js";
import { Image } from "./style.js";
import { List } from "./style.js";
import { Settings } from "./style.js";
import { Container } from "./style.js";
import { UnorderedList } from "./style.js";

HeaderContainer.List = ({ children, ...props }) => (
    <List {...props}>
        {children}
    </List>
);

HeaderContainer.UnorderedList = ({ children, ...props }) => (
    <UnorderedList {...props}>
        {children}
    </UnorderedList>
);

HeaderContainer.Settings = ({ children, ...props }) => (
    <Settings {...props}>
        {children}
    </Settings>
);

HeaderContainer.Image = ({ ...props }) => (
    <Image {...props} />
);


HeaderContainer.Logo = ({ children, ...props }) => (
    <Logo {...props}>
        {children}
    </Logo>
);

export function HeaderContainer({ children, ...props }) {
    return (
        <Container {...props}>
            {children}
        </Container>
    );
}