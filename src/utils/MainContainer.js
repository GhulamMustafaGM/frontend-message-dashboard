import { connect } from "react-redux";

import {
    requestData,
    postDataHandler,
    setIdEditedMessage,
    putMessageHandler,
    destroyMessageHandler
} from "../reducers/CreateAction";
import Main from "../components/Main";

const mapStateToProps = state => {
    return {
        messages: state.messages,
        selectedMessage: state.selectedMessage,
        loading: state.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        requestData: () => dispatch(requestData()),
        postDataHandler: data => dispatch(postDataHandler(data)),
        setIdEditedMessage: id => dispatch(setIdEditedMessage(id)),
        putMessageHandler: (data, id) => dispatch(putMessageHandler(data, id)),
        destroyMessageHandler: id => dispatch(destroyMessageHandler(id))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);
