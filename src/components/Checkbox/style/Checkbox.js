import { Checkbox } from "./style.js";
import { Container } from "./style.js";

CheckboxContainer.Checkbox = ({ ...props }) => (
    <Checkbox {...props} />
);

export function CheckboxContainer({ children, ...props }) {
    return (
        <Container {...props}>
            {children}
        </Container>
    );
}