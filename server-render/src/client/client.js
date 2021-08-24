import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import {Provider} from "react-redux";
import configureAppStore from "../app/store";

const { store } = configureAppStore();

ReactDOM.hydrate(
    <Provider store={store} >
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>
, document.querySelector("#root"));
