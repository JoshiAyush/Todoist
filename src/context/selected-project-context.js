import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const SelectedProjectStateContext = createContext();

export const SelectedProjectStateProvider = ({ children }) => {
    const [selectedProjects, setSelectedProjects] = useState("INBOX");

    return (
        <SelectedProjectStateContext.Provider value={{ selectedProjects, setSelectedProjects }}>
            {children}
        </SelectedProjectStateContext.Provider>
    );
}

export const useSelectedProjectStateValue = () => useContext(SelectedProjectStateContext);