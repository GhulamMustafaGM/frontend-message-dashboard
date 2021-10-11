import { connect } from "react-redux";
import MessagePost from "../components/messages/messagePost/MessagePost";

const mapStateToProps = state => {
    return {
        messages: state.messages,
        loading: state.loading
    };
};

export default connect(
    mapStateToProps,
    null
)(MessagePost);
