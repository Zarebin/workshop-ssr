// import 'babel-polyfill' ;
import express from 'express';
import renderer from "./helper/renderer";
import configureAppStore from "./app/store";
const app = express();

const { store } =  configureAppStore()

app.use(express.static("public"));

app.get("*", (req, res) => {
    res.send(renderer(req, res, store));
});

const port = 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});
