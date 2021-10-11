import React from "react";

const editButton = props => (
    <button
        className="btn btn-small btn-warning"
        onClick={e => props.editMessageHandler(props.id, props.message)}
    >
        Edit
    </button>
);

export default editButton;
