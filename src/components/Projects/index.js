import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

import { useProjectStateValue } from "../../context/index.js";
import { useSelectedProjectStateValue } from "../../context/index.js";

import { ProjectsContainer } from "./style/Projects.js";

function Projects({ activeNull = null }) {
    const [active, setActive] = useState(activeNull);

    const { projects } = useProjectStateValue();
    const { setSelectedProject } = useSelectedProjectStateValue();

    const highLight = (el) => {
        el.target.style["background-color"] = "#fff";
    }

    return (
        <ProjectsContainer>

            {
                projects && projects.map((project) => {
                    return (
                        <ProjectsContainer.Project
                            key={project.id}
                            onClick={(el) => {
                                highLight(el);
                                setActive(project);
                                setSelectedProject(project.id);
                            }}
                        ></ProjectsContainer.Project>
                    );
                })
            }

        </ProjectsContainer>
    );
}

export default Projects;