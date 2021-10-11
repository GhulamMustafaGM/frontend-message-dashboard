import {
    FETCH_DATA_START,
    FETCH_DATA_RECEIVE,
    FETCH_DATA_END,
    SET_ID_EDITED_MESSAGE
} from "./TypeAction";

const initialState = {
    messages: [],
    selectedMessage: 0,
    loading: false
};

export const MessageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_START:
            return { ...state, loading: true };
        case FETCH_DATA_RECEIVE:
            return { ...state, messages: action.data, loading: false };
        case FETCH_DATA_END:
            return { ...state, loading: false };
        case SET_ID_EDITED_MESSAGE:
            let id = 0;
            if (!state.selectedMessage) {
                id = action.id;
            }
            return {
                ...state,
                selectedMessage: id
            };
        default:
            return state;
    }
};
