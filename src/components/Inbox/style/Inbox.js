import { Svg } from "./style.js";
import { Help } from "./style.js";
import { Item } from "./style.js";
import { Desc } from "./style.js";
import { Link } from "./style.js";
import { Title } from "./style.js";
import { Items } from "./style.js";
import { Small } from "./style.js";
import { Inbox } from "./style.js";
import { Header } from "./style.js";
import { NoTasks } from "./style.js";
import { Container } from "./style.js";
import { NoTasksText } from "./style.js";
import { NoTasksTitle } from "./style.js";

InboxContainer.Header = ({ children, ...props }) => (
    <Header {...props}>
        {children}
    </Header>
);

InboxContainer.Title = ({ children, ...props }) => (
    <Title {...props}>
        {children}
    </Title>
);

InboxContainer.Items = ({ children, ...props }) => (
    <Items {...props}>
        {children}
    </Items>
);

InboxContainer.Item = ({ children, ...props }) => (
    <Item {...props}>
        {children}
    </Item>
);

InboxContainer.Svg = ({ children, ...props }) => (
    <Svg {...props}>
        {children}
    </Svg>
);

InboxContainer.NoTasks = ({ children, ...props }) => (
    <NoTasks {...props}>
        {children}
    </NoTasks>
);

InboxContainer.Inbox = ({ children, ...props }) => (
    <Inbox {...props}>
        {children}
    </Inbox>
);

InboxContainer.NoTasksText = ({ children, ...props }) => (
    <NoTasksText {...props}>
        {children}
    </NoTasksText>
);

InboxContainer.NoTasksDesc = ({ children, ...props }) => (
    <Desc {...props}>
        {children}
    </Desc>
);

InboxContainer.TasksHelp = ({ children, ...props }) => (
    <Help {...props}>
        {children}
    </Help>
);

InboxContainer.Small = ({ children, ...props }) => (
    <Small {...props}>
        {children}
    </Small>
);

InboxContainer.NoTasksTitle = ({ children, ...props }) => (
    <NoTasksTitle {...props}>
        {children}
    </NoTasksTitle>
);

InboxContainer.Link = ({ children, ...props }) => (
    <Link {...props}>
        {children}
    </Link>
);

export function InboxContainer({ children, ...props }) {
    return (
        <Container {...props}>
            {children}
        </Container>
    );
}