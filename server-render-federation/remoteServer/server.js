import express from 'express';
import { renderToString } from "react-dom/server";
import App from "./App";
import React from "react";
const app = express();


// app.use(express.static("ui-platform/public"));

app.get("*", (req, res) => {
    const html = renderToString(<App />)
    res.send(html);
});

const port = 4001;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});
