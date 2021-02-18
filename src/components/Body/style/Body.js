import { Container } from "./style.js";

export function BodyContainer({ children, ...props }) {
    return (
        <Container {...props}>
            {children}
        </Container>
    );
}