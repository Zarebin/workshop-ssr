import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/users/slice';
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./rootSaga";


// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer,
  },
  middleware: [sagaMiddleware, ],
});

export default function configureAppStore() {
// then run the saga
  sagaMiddleware.run(rootSaga)
  return { store }
}
