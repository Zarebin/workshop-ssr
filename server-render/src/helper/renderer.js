import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import Routes from "../client/Routes";
// import Counter from "../client/features/counter/Counter";

export default (req, store) => {
    const content = renderToString(
        <Provider store={store}>
          {/*<Counter />*/}
            <StaticRouter location={req.path} context={{}}>
                <Routes />
            </StaticRouter>
        </Provider>
    );
    return `
    <html>
        <head></head>
        <body>
            <div id="root">${content}</div>
            <script src="bundle.js"></script>
        </body>
    </html>
  `;
}
