import React, { useState } from 'react';
import { selectUsers } from './slice';
import styles from './users.module.css';
import { addAsyncWithSaga } from "./actions";
import { useAppSelector, useAppDispatch } from '../../app/hooks';

export function Users() {
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  const renderUsers = () => {
    return users.map( user => {
      return <li>{user.name}</li>
    })
  }

  return (
    <div>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(addAsyncWithSaga())}
        >
          Add Users
        </button>
        <div>Users:</div>
        <ul>{ renderUsers() }</ul>
    </div>
  );
}
