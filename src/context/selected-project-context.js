import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const SelectedProjectStateContext = createContext();

export const SelectedProjectStateProvider = ({ children }) => {
    const [selectedProject, setSelectedProject] = useState("INBOX");

    return (
        <SelectedProjectStateContext.Provider value={{ selectedProject, setSelectedProject }}>
            {children}
        </SelectedProjectStateContext.Provider>
    );
}

export const useSelectedProjectStateValue = () => useContext(SelectedProjectStateContext);