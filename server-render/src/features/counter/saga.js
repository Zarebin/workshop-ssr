import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
// import Api from '...'
import {ADD_ASYNC_AMOUNT} from "./actions";

const delay = (ms) => new Promise(res => setTimeout(res, ms))

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* addAsyncCounter(action) {
    console.log('You are in SAGA for counter');
    // console.log('Before delay and action:', action)
    // const amount = action.payload;
    // yield delay(2000)
    // console.log('after 2 seconds', action)
    // yield put(incrementByAmount(amount))
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
    yield takeEvery(ADD_ASYNC_AMOUNT, addAsyncCounter);
}

export default mySaga;