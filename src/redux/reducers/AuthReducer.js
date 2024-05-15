import actions from '../actions';
// import { Map } from 'immutable';

const user = localStorage.getItem('user');
const token = localStorage.getItem('token');

const initialState = user ? {
    isAuthenticated: true,
    user,
    token,
} : {
    isAuthenticated: false,
    user: {},
    token:  "",
};

export default function AuthReducer(state = initialState, action) {
    switch(action.type) {
        case actions.AuthActions.LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token,
            }
        case actions.AuthActions.LOGIN_FAILURE:
            return {
                ...state,
                isAuthenticated: false,
                user: {},
                token: ""
            }
        default:
            return {...state}
    }
}