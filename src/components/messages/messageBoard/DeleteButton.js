import React from "react";

const deleteButton = props => (
    <button
        onClick={() => props.deleteMessage(props.id)}
        className="btn btn-small btn-danger"
    >
        Delete
    </button>
);

export default deleteButton;
