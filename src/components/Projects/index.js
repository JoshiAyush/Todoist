import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

import { useProjectStateValue } from "../../context/index.js";
import { useSelectedProjectStateValue } from "../../context/index.js";

import { ProjectsContainer } from "./style/Projects.js";

function Projects({ activeNull = null }) {
    let refProject = useRef(null);
    const [active, setActive] = useState(activeNull);

    const { projects } = useProjectStateValue();
    const { setSelectedProject } = useSelectedProjectStateValue();

    return (
        <ProjectsContainer>

            {
                projects && projects.map((project) => {
                    return (
                        <ProjectsContainer.Project
                            key={project.id}
                            ref={active === project.id && refProject}
                            onClick={() => {
                                refProject.current.style["background-color"] = "#fff";
                                setActive(project);
                                setSelectedProject(project.id);
                            }}
                        >I'm a project</ProjectsContainer.Project>
                    );
                })
            }

        </ProjectsContainer>
    );
}

export default Projects;