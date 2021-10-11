import React from "react";

import "./MessageBody.css";
import MessagePost from "../messageBoard/MessagePost";

const MessageBody = props => {
    return (
        <div className="row">
            <div className="col-12">
                <h1 className="h2 text-white bg-success mb-0 p-4 text-center  rounded-top">
                    Public Message Dashboard 
                </h1>
                <table className="table table-striped table-bordered table-responsive-lg">
                    <thead className="thead-dark text-center">
                        <tr>
                            <th scope="col" className="message-col">
                                Message
                            </th>
                            <th scope="col">Author</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.messages.map(message => {
                            return (
                                <MessagePost
                                    id={message.id}
                                    key={message.key}
                                    author={message.author}
                                    message={message.message}
                                    editMessageHandler={
                                        props.editMessageHandler
                                    }
                                    deleteMessage={props.deleteMessage}
                                />
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MessageBody;
