import 'babel-polyfill' ;
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
// یک store برای redux
import { createStore, applyMiddleware } from "redux";
// مدیریت درخواست های غیرهمزمان
import thunk from "redux-thunk";
// اتصال همه مولفه‌ها به store و امکان تبادل داده
import { Provider} from "react-redux";
import Routes from "./Routes";
import reducers from './reducers'

const store = createStore(reducers, {}, applyMiddleware(thunk))

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>
    , document.querySelector("#root"));
