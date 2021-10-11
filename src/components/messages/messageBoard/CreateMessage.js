import React, { Component } from "react";

class CreateMessage extends Component {
    //Possible changed to functional component
    resetAuthor = () => {
        localStorage.removeItem("author");
    };

    render() {
        return (
            <div className="row">
                <div className="col-13">
                    <h2 className="h4 text-white bg-success mb-3 p-4 rounded text-center">
                        {this.props.selectedMessage
                            ? "Edit message"
                            : "Create new message"}
                    </h2>
                    <form className="mb-5">
                        <div className="form-group">
                            <label htmlFor="message">Public Message:</label>
                            <textarea
                                className="form-control"
                                id="message"
                                value={this.props.messageBody}
                                onChange={event =>
                                    this.props.handleChange(event.target.value)
                                }
                                rows="10"
                                placeholder="Type here to message."
                                required
                            />
                        </div>
                        {this.props.selectedMessage ? (
                            <button
                                onClick={this.props.submitEditedMessage}
                                className="btn btn-warning mt-3"
                            >
                                Update message
                            </button>
                        ) : (
                            <button
                                onClick={this.props.submitMessage}
                                className="btn btn-secondary mt-3"
                            >
                                Create message
                            </button>
                        )}

                        <button
                            type="reset"
                            className="btn btn-danger mt-3"
                            onClick={this.props.clear}
                        >
                            Clear
                        </button>
                        <button
                            className="btn btn-info float-left mt-3"
                            onClick={this.resetAuthor}
                        >
                            New author
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default CreateMessage;
