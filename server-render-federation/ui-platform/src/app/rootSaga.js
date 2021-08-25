import { fork } from 'redux-saga/effects'
import counterSaga from "../features/counter/saga";
import usersSaga from "../features/users/saga";

export default function* rootSaga() {
    yield fork(counterSaga)
    yield fork(usersSaga)
    // yield fork(saga2)
    // yield fork(saga3)
    // code after fork-effect
}