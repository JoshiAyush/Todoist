import React from "react";

import { Checkbox } from "../index.js";

import { TasksContainer } from "./style/Tasks.js";

function Tasks() {
    const tasks = [];

    let projectName = "";

    return (
        <TasksContainer data-testid="tasks">

            <TasksContainer.Project>{projectName}</TasksContainer.Project>

            <TasksContainer.Tasks>

                {
                    tasks.map(task => (
                        <TasksContainer.Li key={`${task.id}`}>

                            <Checkbox />

                            <TasksContainer.Task>{task.task}</TasksContainer.Task>

                        </TasksContainer.Li>
                    ))
                }

            </TasksContainer.Tasks>

        </TasksContainer>
    )
}

export default Tasks;