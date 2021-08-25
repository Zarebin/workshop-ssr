import express from "express";
import React from "react";
import initMiddleware from './helper/middleware'
import configureAppStore from "./app/store";

const { store } = configureAppStore();

const app = express();

app.use(express.static("ui-platform/public"));

// app.get("*", (req, res) => {
//     res.send(renderer(req, res, store));
// });

const done = () => {
    const port = 3000;
    app.listen(port, () => {
        console.log(`listening on ${port}`);
    });
}

initMiddleware(express, app, done, store);

// app.get("/*", (req, res) => {
//     res.send('yyyyyyyyy');
// });
