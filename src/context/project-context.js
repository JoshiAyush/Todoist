import React from "react";
import { useContext } from "react";
import { createContext } from "react";

import { useProjects } from "../hooks/index.js";

export const ProjectStateContext = createContext();

export const ProjectStateProvider = ({ children }) => {
    const { projects, setProjects } = useProjects();

    return (
        <ProjectStateContext.Provider value={{ projects, setProjects }}>
            {children}
        </ProjectStateContext.Provider>
    );
}

export const useProjectStateValue = () => useContext(ProjectStateContext);