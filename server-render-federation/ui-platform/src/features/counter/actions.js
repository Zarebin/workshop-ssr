import { createAction} from "@reduxjs/toolkit";

export const ADD_ASYNC_AMOUNT = 'counter/addAsync';
export const addAsyncWithSaga = createAction(ADD_ASYNC_AMOUNT);
