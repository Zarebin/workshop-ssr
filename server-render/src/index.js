import 'babel-polyfill' ;
import express from 'express';
import renderer from "./helper/renderer";
import createStore from "./helper/createStore";
const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
    const store = createStore();

    // در این محل یک مشت منطق مدیریت اولیه برای وضعیت اپ نصب خواهد شد

    res.send(renderer(req, store));
});

const port = 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});
