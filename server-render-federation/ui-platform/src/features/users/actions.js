import { createAction} from "@reduxjs/toolkit";

export const ADD_ASYNC_AMOUNT = 'users/addAsync';
export const addAsyncWithSaga = createAction(ADD_ASYNC_AMOUNT);
