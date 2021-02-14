import { Container } from "./style.js";

export function HeaderContainer({ children, ...props }) {
    return (
        <Container {...props}>
            {children}
        </Container>
    );
}