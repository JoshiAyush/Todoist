import { Container } from "./style.js";

export function ContentContainer({ children, ...props }) {
    return (
        <Container {...props}>
            {children}
        </Container>
    );
}