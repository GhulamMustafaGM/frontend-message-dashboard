import * as Type from "./TypeAction";

// SYNCRONOUS ACTIONS 
export const fetchDataStart = () => {
    return {
        type: Type.FETCH_DATA_START
    };
};

export const fetchDataReceive = data => {
    return {
        type: Type.FETCH_DATA_RECEIVE,
        data
    };
};

export const fetchDataEnd = () => {
    return {
        type: Type.FETCH_DATA_END
    };
};

export const setIdEditedMessage = id => {
    return {
        type: Type.SET_ID_EDITED_MESSAGE,
        id
    };
};

// ASYNCRONOUS ACTIONS
const baseUrl = "http://localhost:3000/messages/";
export const requestData = () => {
    return dispatch => {
        dispatch(fetchDataStart());
        return fetch(baseUrl, {
            method: "GET",
            headers: {
                "Content-type": "application-json"
            }
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                dispatch(fetchDataReceive(data));
            })
            .catch(err => {
                dispatch(fetchDataEnd());
                return console.log(err);
            });
    };
};

export const postDataHandler = data => {
    return dispatch => {
        dispatch(fetchDataStart());
        return fetch(baseUrl, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(JSON.stringify(data));
                dispatch(requestData());
                dispatch(fetchDataEnd());
            })
            .catch(error => {
                dispatch(fetchDataEnd());
                return console.log("Error", error);
            });
    };
};

export const putMessageHandler = (data, id) => {
    return dispatch => {
        dispatch(fetchDataStart());
        return fetch(baseUrl + id, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(JSON.stringify(data));
                dispatch(requestData());
                dispatch(fetchDataEnd());
            })
            .catch(error => {
                dispatch(fetchDataEnd());
                return console.log("Error", error);
            });
    };
};

export const destroyMessageHandler = id => {
    return dispatch => {
        dispatch(fetchDataStart());
        return fetch(baseUrl + id, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(JSON.stringify(data));
                dispatch(requestData());
                dispatch(fetchDataEnd());
            })
            .catch(error => {
                dispatch(fetchDataEnd());
                return console.log("Error", error);
            });
    };
};
