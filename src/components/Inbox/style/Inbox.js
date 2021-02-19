import { Container } from "./style.js";

export function InboxContainer({ children, ...props }) {
    return (
        <Container {...props}>
            {children}
        </Container>
    );
}