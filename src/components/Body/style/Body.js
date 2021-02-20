import { Hidden } from "./style.js";
import { Container } from "./style.js";

BodyContainer.Hidden = ({ ...props }) => (
    <Hidden {...props} />
);

export function BodyContainer({ children, ...props }) {
    return (
        <Container {...props}>
            {children}
        </Container>
    );
}