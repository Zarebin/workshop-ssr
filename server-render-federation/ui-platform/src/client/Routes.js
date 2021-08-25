import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home'
import {Users} from "../features/users/Users";
import {Counter} from "../features/counter/Counter";

export default () => {
    return (
        <div>
            <Route exact path='/' component={Home} />
            {/*<Route exact path='/users' component={Users} />*/}
            <Route exact path='/salam' component={() => 'salam'} />
            <Route exact path='/c' component={ Counter } />

        </div>
    )
}
