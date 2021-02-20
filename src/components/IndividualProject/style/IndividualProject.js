import { Dot } from "./style.js";
import { Name } from "./style.js";
import { Container } from "./style.js";

IndividualProjectContainer.Dot = ({ ...props }) => (
    <Dot color={props?.color || "grey"} />
);

IndividualProjectContainer.Name = ({ children, ...props }) => (
    <Name {...props}>
        {children}
    </Name>
);

export function IndividualProjectContainer({ children, ...props }) {
    return (
        <Container {...props}>
            {children}
        </Container>
    );
}

export default IndividualProjectContainer;
