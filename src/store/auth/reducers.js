import { LOGIN, LOGOUT, UPDATE, ERROR } from './types';

const initialState = {
    user : null,
    error : ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return{
                ...state
            };
        case LOGOUT:
            return{
                ...state,
                user: null
            };
        case UPDATE:
            return{
                ...state,
                user: {...state.user, ...action.payload}
            };
        case ERROR:
            return{
                ...state,
                error: action.payload
            };    
        default:
            return state;
    }
}

export default reducer;