import React from "react";
import { Link } from "react-router-dom";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

const MessagePost = props => {
    const TruncateMessage = message =>
        message.length > 50 ? message.substr(0, 50) + "..." : message;

    const authorId = parseInt(localStorage.getItem("author"), 10);
    const postId = parseInt(props.author, 10);
    let editButton, deleteButton;
    if (authorId === postId) {
        editButton = (
            <EditButton
                editMessageHandler={props.editMessageHandler}
                id={props.id}
                message={props.message}
            />
        );
        deleteButton = (
            <DeleteButton deleteMessage={props.deleteMessage} id={props.id} />
        );
    }

    return (
        <React.Fragment>
            <tr>
                <td>
                    <h6>
                        <Link to={`/messages/${props.id}`}>
                            {TruncateMessage(props.message)}
                        </Link>
                    </h6>
                </td>
                <td className>
                    <div>{props.author}</div>
                </td>
                <td>{editButton}</td>
                <td>{deleteButton}</td>
            </tr>
        </React.Fragment>
    );
};

export default MessagePost;
