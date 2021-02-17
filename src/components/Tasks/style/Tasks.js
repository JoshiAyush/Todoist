import { Li } from "./style.js";
import { Span } from "./style.js";
import { Tasks } from "./style.js";
import { Container } from "./style.js";
import { ProjectName } from "./style.js";

TasksContainer.Task = ({ children, ...props }) => (
    <Span {...props}>
        {children}
    </Span>
);

TasksContainer.Li = ({ children, ...props }) => (
    <Li {...props}>
        {children}
    </Li>
);

TasksContainer.Project = ({ children, ...props }) => (
    <ProjectName {...props}>
        {children}
    </ProjectName>
);

TasksContainer.Tasks = ({ children, ...props }) => (
    <Tasks {...props}>
        {children}
    </Tasks>
);

export function TasksContainer({ children, ...props }) {
    return (
        <Container {...props}>
            {children}
        </Container>
    );
}