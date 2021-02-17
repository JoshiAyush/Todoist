/**
 * @file hooks/index.js creates custom hooks like 'useTasks' hooks which basically returns an object. 
 */

import { moment } from "moment";
import { useState } from "react";
import { useEffect } from "react";

import { firebase } from "../lib/firebase.js";
import { collatedTasks } from "../constants/index.js";

const EQUALS = () => "==";
const LESS_THAN = () => "<";
const GREATER_THAN = () => ">";
const LESS_THAN_EQUALS = () => "<=";
const GREATER_THAN_EQUALS = () => ">=";

/**
 * @function collatedTasksExist()
 * @argument {String} selectedProject
 * @returns {Object}  
 */
const collatedTasksExist = selectedProject => collatedTasks.find(task => task.key === selectedProject);

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

const getTask = selectedProject => {
    /**
     * @function getTask() triggers the pulling of data through firestore if the given conditions met.
     * @argument {String} selectedProject is the project id that we need to trigger the operations accodingly.
     * @returns {Object} task whose date if have matches with the given one or whose project id if have matches with the 
     * given one.
     * 
     * This function says if the selected project is not in the collated tasks example -> Inbox, Today, Upcomming then just
     * unsubscribe using the given project id i.e., the variable selectedProject itself because then it would be an identifier
     * the tasks if the condition fails then it checks if the selected project belongs to 'TODAY' then it returns the TODO that
     * is marked as today if the selected project belongs to 'INBOX' then it just returns the task where the date is not mentioned.
     * If all the conditions fails then we just return a boolean false. 
     */
    if (selectedProject && !collatedTasksExist(selectedProject))
        return unsubscribeWhereProjectId("==", selectedProject);
    else if (selectedProject === "TODAY")
        return unsubscribeWhereDate("==", moment().format("DD/MM/YYYY"));
    else if (selectedProject === "INBOX")
        return unsubscribeWhereDate("==", "");
    else
        return false;
}

const unsubscribeTasks = (selectedProject, { ...hooks }) => {
    /**
     * @function unsubscribeTasks() returns a task where the task id matches with 'selectedProject'.
     * @argument {String} selectedProject is the task id that the function need to return the task object.
     * @argument {Object} hooks are the hooks for setting the tasks and archived tasks. 
     * @returns {Object} task whose 'id' matched with 'selectedProject'. 
     */

    /** Creating an object 'unsubsribe' to hold the 'tasks' collection data. */
    let unsubscribe = firebase.firestore().collection("tasks").where("userId", "==", "i0rFcJf8NGu5FjTZh3xP");

    /**
     * Defining a property 'unsubscribe' for function unsubsribeWhereDate() to use it later, we do this so that we
     * don't need to keep passing the arguments to the function every time we require an unsubscribe event, we can
     * access the above locally declared 'unsubscribe' object using the 'this' operator in the unsubscribeWhereDate()
     * function.   
     */
    Object.defineProperty(unsubscribeWhereDate, "unsubscribe", { value: unsubscribe, writable: true });
    /**
     * Defining a property 'unsubscribe' for function unsubsribeWhereProjectId() to use it later, we do this so that we
     * don't need to keep passing the arguments to the function every time we require an unsubscribe event, we can
     * access the above locally declared 'unsubscribe' object using the 'this' operator in the unsubscribeWhereProjectId()
     * function.   
     */
    Object.defineProperty(unsubscribeWhereProjectId, "unsubscribe", { value: unsubscribe, writable: true });

    /**
     * Binding the above modified unsubscribeWhereDate() function to the original function because even if we define a
     * custom property for the unsubscribeWhereDate() function it won't stick with it, in order to keep that stick with the
     * function unsubscribeWhereDate() we need to bind the original with the modified one. 
     */
    unsubscribeWhereDate = unsubscribeWhereDate.bind(unsubscribeWhereDate);
    /**
     * Binding the above modified unsubscribeWhereProjectId() function to the original function because even if we define a
     * custom property for the unsubscribeWhereProjectId() function it won't stick with it, in order to keep that stick with 
     * the function unsubscribeWhereProjectId() we need to bind the original with the modified one. 
     */
    unsubscribeWhereProjectId = unsubscribeWhereProjectId.bind(unsubscribeWhereProjectId);

    unsubscribe = getTask(selectedProject) || unsubscribe;

    unsubscribe = unsubscribe.onSnapshot(snapshot => {
        const newTasks = snapshot.docs.map(task => ({
            id: task.id,
            ...task.data()
        }));

        const getUpcommings = selectedProject => {
            if (selectedProject === "UPCOMMING")
                return newTasks.filter(
                    task => moment(task.date, "DD-MM-YYYY").diff(moment(), "days") <= 7 && task.archived !== true
                );
            else
                return newTasks.filter(task => task.archived !== true);
        };

        hooks.setTasks(getUpcommings(selectedProject));

        hooks.setArchivedTasks(newTasks.filter(task => task.archived === true));
    });
}

export const useTasks = selectedProject => {
    /**
     * @function useTasks() is a custom hook for our Todoist web application
     */
    const [tasks, setTasks] = useState([]);
    const [archivedTasks, setArchivedTasks] = useState([]);

    useEffect(() => {
        unsubscribeTasks(selectedProject, { setTasks, setArchivedTasks });
    }, [selectedProject]);
};