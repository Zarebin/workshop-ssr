// import 'babel-polyfill' ;
import express from 'express';
import React from "react";
import configureAppStore from "./app/store";

import initMiddleware from './helper/middleware'

const app = express();

const { store } =  configureAppStore()

app.use(express.static("ui-platform/public"));

const done = () => {
    const port = 4000;
    app.listen(port, () => {
        console.log(`listening on ${port}`);
    });
}

initMiddleware(express, app, done, store);