import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from 'react-router-dom'
import Routes from "../client/Routes";
import {Provider} from "react-redux";

export default async (req, res, store) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <Routes />
            </StaticRouter>
        </Provider>
    );
    const html = `
    <html>
        <head></head>
        <body>
            <div id="root">${content}</div>
<!--            <script src="bundle.js"></script>-->
        </body>
    </html>
  `;
    res.send(html);
}
