import React, { Component } from "react";
import MessageBody from "../messageBody/MessageBody";
import MessageLoader from "../../layout/MessageLoader";

class Messages extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.loading ? (
                    <MessageLoader />
                ) : (
                    <MessageBody
                        messages={this.props.messages}
                        editMessageHandler={this.props.editMessageHandler}
                        deleteMessage={this.props.deleteMessage}
                    />
                )}
            </React.Fragment>
        );
    }
}

export default Messages;
