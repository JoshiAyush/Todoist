/**
 * @file hooks/index.js keeps eye on life cycle of our app. 
 */

import { moment } from "moment";
import { useState } from "react";
import { useEffect } from "react";

import { firebase } from "../lib/firebase.js";

const EQUALS = () => "==";
const LESS_THAN = () => "<";
const GREATER_THAN = () => ">";
const LESS_THAN_EQUALS = () => "<=";
const GREATER_THAN_EQUALS = () => ">=";

const collatedTasksExist = () => {

};

function unsubscribeWhereProjectId(filter, value) {
    switch (filter) {
        case LESS_THAN():
            return this.unsubscribe.where("projectId", LESS_THAN(), value);
        case LESS_THAN_EQUALS():
            return this.unsubscribe.where("projectId", LESS_THAN_EQUALS(), value);
        case EQUALS():
            return this.unsubscribe.where("projectId", EQUALS(), value);
        case GREATER_THAN():
            return this.unsubscribe.where("projectId", GREATER_THAN(), value);
        case GREATER_THAN_EQUALS():
            return this.unsubscribe.where("projectId", GREATER_THAN_EQUALS(), value);
        default:
            return this.unsubscribe;
    };
};

function unsubscribeWhereDate(filter, value) {
    switch (filter) {
        case LESS_THAN():
            return this.unsubscribe.where("date", LESS_THAN(), value);
        case LESS_THAN_EQUALS():
            return this.unsubscribe.where("date", LESS_THAN_EQUALS(), value);
        case EQUALS():
            return this.unsubscribe.where("date", EQUALS(), value);
        case GREATER_THAN():
            return this.unsubscribe.where("date", GREATER_THAN(), value);
        case GREATER_THAN_EQUALS():
            return this.unsubscribe.where("date", GREATER_THAN_EQUALS(), value);
        default:
            return this.unsubscribe;
    };
}

const getTask = (selectedProject) => {
    if (selectedProject && !collatedTasksExist(selectedProject))
        return unsubscribeWhereProjectId("==", selectedProject);
    else if (selectedProject === "TODAY")
        return unsubscribeWhereDate("==", moment().format("DD/MM/YYYY"));
    else if (selectedProject === "INBOX")
        return unsubscribeWhereDate("==", "");
    else
        return false;
}

const unsubscribeTasks = (selectedProject) => {
    let unsubscribe = firebase.firestore().collection("tasks").where("userId", "==", "i0rFcJf8NGu5FjTZh3xP");

    Object.defineProperty(unsubscribeWhereDate, "unsubscribe", { value: unsubscribe, writable: true });
    Object.defineProperty(unsubscribeWhereProjectId, "unsubscribe", { value: unsubscribe, writable: true });

    unsubscribeWhereDate = unsubscribeWhereDate.bind(unsubscribeWhereDate);
    unsubscribeWhereProjectId = unsubscribeWhereProjectId.bind(unsubscribeWhereProjectId);

    unsubscribe = getTask(selectedProject) || unsubscribe;
}

export const useTasks = selectedProject => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        unsubscribeTasks(selectedProject);
    }, []);
};