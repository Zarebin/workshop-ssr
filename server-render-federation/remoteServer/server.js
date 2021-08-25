import express from "express";
import { renderToString } from "react-dom/server";
import React from "react";
import App from "./App";

const app = express();

app.use('/static', express.static('remoteServer/public/client'))

app.get("*", (req, res, next) => {
  const html = renderToString(<App />);
  res.send(html);
});

app.listen(3001, () => {
  console.log(`Server is listening on port: 3001`);
});
