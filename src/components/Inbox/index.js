import React from "react";
import { Link } from "react-router-dom";

import { Sort } from "../../svg/index.js";
import { Comments } from "../../svg/index.js";
import HelpIcon from "@material-ui/icons/Help";

import { useTasks } from "../../hooks/index.js";

import { AllClear } from "../../svg/index.js";

import { InboxContainer } from "./style/Inbox.js";

function Inbox() {
    const { tasks } = useTasks("INBOX");

    return (
        <InboxContainer>

            <InboxContainer.Inbox>

                <InboxContainer.Header>

                    <InboxContainer.Title>Inbox</InboxContainer.Title>

                    <InboxContainer.Items>
                        
                        <InboxContainer.Item>
                            
                            <Comments />

                            <InboxContainer.Small>Comments</InboxContainer.Small>
                            
                        </InboxContainer.Item>

                        <InboxContainer.Item>

                                <Sort />

                            <InboxContainer.Small>Sort</InboxContainer.Small>

                        </InboxContainer.Item>

                        <InboxContainer.Item>More actions</InboxContainer.Item>
                        
                    </InboxContainer.Items>

                </InboxContainer.Header>

            </InboxContainer.Inbox>
            
            <InboxContainer.NoTasks> 
            
                <InboxContainer.Svg>
            
                    <AllClear/>
            
                </InboxContainer.Svg>
            
                <InboxContainer.NoTasksText>
            
                    <InboxContainer.NoTasksDesc>
            
                        <InboxContainer.NoTasksTitle>All Clear</InboxContainer.NoTasksTitle>
            
                        <InboxContainer.Small>
            
                            Looks like everything's organized in the right place.
            
                        </InboxContainer.Small>
            
                    </InboxContainer.NoTasksDesc>

                    <InboxContainer.TasksHelp>

                        <InboxContainer.Link href={"https://todoist.com/help/articles/how-to-best-use-the-inbox"}>
                        
                           <HelpIcon /> How to best use the Inbox

                        </InboxContainer.Link>

                    </InboxContainer.TasksHelp>
            
                </InboxContainer.NoTasksText>
            
            </InboxContainer.NoTasks>
        
        </InboxContainer>
    );
}

export default Inbox;