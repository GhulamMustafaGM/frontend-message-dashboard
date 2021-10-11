import React, { Component } from "react";
import PropTypes from "prop-types";
import Messages from "./messages/messageBoard/Messages";
import CreateMessage from "./messages/messageBoard/CreateMessage";

class Main extends Component {
    state = {
        message: ""
    };

    handleMessageChange = event => {
        this.setState({
            message: event
        });
    };

    resetState = () => {
        this.setState({ message: "" });
    };

    createMessageHandler = event => {
        event.preventDefault();
        let authorId = 0;
        if (!localStorage.getItem("author")) {
            authorId = Math.floor(Math.random() * 1000);
            localStorage.setItem("author", authorId);
        } else {
            authorId = localStorage.getItem("author");
        }
        const data = {
            message: this.state.message,
            author: authorId,
            key: Date.now()
        };
        this.resetState();
        this.props.postDataHandler(data);
    };

    editMessageHandler = (id, message) => {
        this.props.setIdEditedMessage(id);
        if (!this.props.selectedMessage) {
            this.setState({ message: message });
        } else {
            this.resetState();
        }
    };

    editMessage = event => {
        event.preventDefault();
        const id = this.props.selectedMessage;
        const data = { message: this.state.message };
        this.editMessageHandler();
        this.props.putMessageHandler(data, id);
    };

    componentDidMount() {
        this.props.requestData();
    }

    render() {
        return (
            <React.Fragment>
                <Messages
                    messages={this.props.messages}
                    loading={this.props.loading}
                    editMessageHandler={this.editMessageHandler}
                    deleteMessage={this.props.destroyMessageHandler}
                />
                <CreateMessage
                    messages={this.props.messages}
                    submitMessage={this.createMessageHandler}
                    selectedMessage={this.props.selectedMessage}
                    handleChange={this.handleMessageChange}
                    messageBody={this.state.message}
                    clear={this.resetState}
                    submitEditedMessage={this.editMessage}
                />
            </React.Fragment>
        );
    }
}

Main.propTypes = {
    message: PropTypes.string,
    data: PropTypes.object
};

export default Main;
