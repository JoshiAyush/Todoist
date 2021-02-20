import React from "react";
import { useState } from "react";

import { FaTrashAlt } from "react-icons/fa";

import { useProjectStateValue } from "../../context/index.js";
import { useSelectedProjectStateValue } from "../../context/index.js";

import { IndividualProjectContainer } from "./style/IndividualProject.js";

import { firebase } from "firebase";

function IndividualProject({ project }) {
    const [showConfirm, setShowConfirm] = useState(false);

    const { projects, setProjects } = useProjectStateValue();
    const { setSelectedProject } = useSelectedProjectStateValue();

    const deletedProject = docId => {
        firebase.collection("projects").doc(docId).delete().then(() => {
            setProjects([...projects]);
            setSelectedProject("INBOX");
        })
    }

    return (
        <IndividualProjectContainer>

            <IndividualProjectContainer.Dot />

            <IndividualProjectContainer.Name></IndividualProjectContainer.Name>

            <IndividualProjectContainer.Delete onClick={() => setShowConfirm(!showConfirm)}>

                <FaTrashAlt />

                {
                    showConfirm &&
                    <IndividualProjectContainer.DeleteModal>

                        <IndividualProjectContainer.Inner>

                            <IndividualProjectContainer.DeleteText>

                                Are you sure you want to delete this project?

                            </IndividualProjectContainer.DeleteText>

                            <IndividualProjectContainer.Delete onClick={()=> deletedProject(project.docId)}>
                                
                                Delete
                            
                            </IndividualProjectContainer.Delete>

                            <IndividualProjectContainer.Cancel onClick={()=>setShowConfirm(!showConfirm)}>
                                
                                Cancel
                                
                            </IndividualProjectContainer.Cancel>

                        </IndividualProjectContainer.Inner>

                    </IndividualProjectContainer.DeleteModal>
                }

            </IndividualProjectContainer.Delete>

        </IndividualProjectContainer>
    );
}

export default IndividualProject;