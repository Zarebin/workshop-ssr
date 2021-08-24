import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
// import Api from '...'
import { ADD_ASYNC_AMOUNT } from "./actions";
import {fetchUsers} from "./api";
import {addUsers} from "./slice";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* addAsyncCounter(action) {
    console.log('You are in SAGA for Users');
    const users = yield call(fetchUsers());
    yield put(addUsers(users.data));

}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
    yield takeEvery(ADD_ASYNC_AMOUNT, addAsyncCounter);
}

export default mySaga;