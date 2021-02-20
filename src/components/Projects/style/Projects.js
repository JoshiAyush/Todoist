import { Project } from "./style.js";
import { Container } from "./style.js";

ProjectsContainer.Project = ({ children, ...props }) => (
    <Project {...props}>
        {children}
    </Project>
);

export function ProjectsContainer({ children, ...props }) {
    return (
        <Container {...props}>
            {children}
        </Container>
    );
}