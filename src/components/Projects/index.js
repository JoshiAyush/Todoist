import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

import { useProjectStateValue } from "../../context/index.js";
import { useSelectedProjectStateValue } from "../../context/index.js";

import { IndividualProject } from "../index.js";

import { ProjectsContainer } from "./style/Projects.js";

function Projects({ activeNull = null }) {
    const [active, setActive] = useState(activeNull);

    const { projects } = useProjectStateValue();
    const { setSelectedProject } = useSelectedProjectStateValue();

    const highLight = (el) => {
        el.target.style["background-color"] = "#fff";
    }

    if (!projects)
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
                            >

                                <IndividualProject project={project} />

                            </ProjectsContainer.Project>
                        );
                    })
                }

            </ProjectsContainer>
        );
    else
        return (
            <></>
        );
}

export default Projects;