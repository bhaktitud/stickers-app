import { 
    SET_DATA_LIST,
} from "../actions";

const initialState = {
    list : [],
}

export const reducers = (state = initialState, action) => {
    const { type, payload } = action
    switch ( type ) {
        case SET_DATA_LIST:
            return {
                ...state,
                list: payload
            }
        default:
            return state;
    }
}