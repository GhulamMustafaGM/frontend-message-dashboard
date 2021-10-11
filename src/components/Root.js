import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "../utils/MainContainer";
import MessagePost from "../utils/MessagePostContainer";

const root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/messages/:id" component={MessagePost} />
                <Route path="/" component={Main} />
            </Switch>
        </Router>
    </Provider>
);

root.propTypes = {
    store: PropTypes.object.isRequired
};

export default root;
