import { LOGIN, LOGOUT, UPDATE, ERROR } from './types';

export const onLogin = () => ({
    type: LOGIN
});

export const onLogout = () => ({
    type: LOGOUT
});

export const update = payload => ({
    type: UPDATE,
    payload
});

export const error = payload => ({
    type: ERROR,
    payload
})