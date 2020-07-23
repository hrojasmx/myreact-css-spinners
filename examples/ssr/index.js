// const React = require('react');
const { createElement } = require("React");
// const ReactDOM = require('react-dom/server');
const { renderToString } = require("react-dom/server");

// const ReactCssSpinners = require(''); // it do not exists en npm as react for example is!!!
// const ReactCssSpinners = require('myreact-css-spinners'); // after installed locally manually is exists now
// const { Ripple } = require('myreact-css-spinners');
const { Ripple } = require("myreact-css-spinners");
const { Ring } = require("myreact-css-spinners");
const { Ellipsis } = require("myreact-css-spinners");

const express = require("express");

const port = 3000;
const app = express();

app.get("*", (req, res) => {
  // const el = React.createElement(Ripple);
  // ReactDOM.renderToString(el);
  // const html = ReactDOM.renderToString(React.createElement(Ripple));
  const html1 = renderToString(createElement(Ripple));
  const html2 = renderToString(createElement(Ring));
  const html3 = renderToString(createElement(Ellipsis));

  res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta http-equiv="X-UA-Compatible" content="ie-edge" />
        <title>Document</title>
      </head>
      <body>
          ${html1}
          ${html2}
          ${html3}
      </body>
      </html>
  `);
  // res.send(`
  //   <!DOCTYPE html>
  //   <html lang="en">
  //   <head>
  //     <meta charset="UTF-8">
  //     <title>SSR Example</title>
  //   </head>
  //   <body>
  //     ${html}
  //   </body>
  //   </html>
  // `);
});

app.listen(port, () => console.log(`http://localhost:${port}`));
