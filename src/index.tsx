import React from 'react';
import ReactDOM from 'react-dom';
import Handlebars from 'handlebars';
import template from './templates/index.handlebars';
import App from './components/App';

const app = <App />;
const appHtml = ReactDOM.renderToString(app);

const templateContext = {
  app: appHtml,
};

const html = template(templateContext);

const rootElement = document.getElementById('root');
if (rootElement) {
  rootElement.innerHTML = html;
}
