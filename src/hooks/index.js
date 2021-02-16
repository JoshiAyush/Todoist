/**
 * @file hooks/index.js keeps eye on life cycle of our app. 
 */

import { moment } from "moment";
import { useState } from "react";
import { useEffect } from "react";

import { firebase } from "../lib/firebase.js";

const collatedTasksExist = () => {

};

const unsubscribeWhereProjectId = (unsubscribe, filter, value) => {
    const EQUALS = () => "==";
    const LESS_THAN = () => "<";
    const GREATER_THAN = () => ">";
    const LESS_THAN_EQUALS = () => "<=";
    const GREATER_THAN_EQUALS = () => ">=";

    switch (filter) {
        case LESS_THAN():
            return unsubscribe.where("projectId", LESS_THAN(), value);
        case LESS_THAN_EQUALS():
            return unsubscribe.where("projectId", LESS_THAN_EQUALS(), value);
        case EQUALS():
            return unsubscribe.where("projectId", EQUALS(), value);
        case GREATER_THAN():
            return unsubscribe.where("projectId", GREATER_THAN(), value);
        case GREATER_THAN_EQUALS():
            return unsubscribe.where("projectId", GREATER_THAN_EQUALS(), value);
        default:
            return unsubscribe;
    }
};

export const useTasks = selectedProject => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        let unsubscribe = firebase.firestore().collection("tasks").where("userId", "==", "i0rFcJf8NGu5FjTZh3xP");

        unsubscribe = selectedProject && !collatedTasksExist(selectedProject)
            ? unsubscribeWhereProjectId(unsubscribe, "==", selectedProject)
            : selectedProject === "TODAY"
                ? (unsubscribe.where("date", "==", moment().format("DD/MM/YYYY")))
                : selectedProject === "INBOX" || selectedProject === 0
                    ? (unsubscribe = unsubscribe.where("date", "==", ""))
                    : unsubscribe;
    }, []);
};