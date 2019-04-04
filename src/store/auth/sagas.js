import { put, takeEvery, delay } from 'redux-saga/effects';
import { LOGIN, LOGOUT, UPDATE, ERROR } from './types';

function* getUser(){
    // api used here is a sample from online
    const api = yield fetch("https://jsonplaceholder.typicode.com/todos/1")
    const data = yield api.json();
    yield put({type: UPDATE, payload: data});
}

export function* watchLogin(){
    yield takeEvery(LOGIN, getUser);
}