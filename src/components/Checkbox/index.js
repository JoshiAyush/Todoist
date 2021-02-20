import React from "react";

import { firebase } from "../../lib/firebase.js";

import { CheckboxContainer } from "./style/Checkbox.js";

function Checkbox({ id }) {
    const archiveTask = () => firebase.firestore().collection("tasks").doc(id).update({ archived: true });

    return (
        <CheckboxContainer onClick={() => archiveTask()}>

            <CheckboxContainer.Checkbox />

        </CheckboxContainer>
    )
}

export default Checkbox;