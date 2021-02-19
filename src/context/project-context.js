import React from "react";
import { useContext } from "react";
import { createContext } from "react";

import { useProjects } from "../hooks/index.js";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
    const { projects, setProjects } = useProjects();

    return (
        <StateContext.Provider value={{ projects, setProjects }}>
            {children}
        </StateContext.Provider>
    );
}

export const useStateValue = () => useContext(StateContext);