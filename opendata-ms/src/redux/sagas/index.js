import {
    put,
    delay
} from 'redux-saga/effects';
import * as Actions from '../actions';

const {
    success,
    error,
    clearMessage
} = Actions;

export function* successAsync(message) {
    yield put(success(message));
    yield delay(10);
    yield put(clearMessage());
}

export function* errorAsync(message) {
    yield put(error(message));
    yield delay(10);
    yield put(clearMessage());
}