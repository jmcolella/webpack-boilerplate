// require('./assets/stylesheets/application.scss');

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './MainNavigator';

const html = ReactDOMServer.renderToStaticMarkup(React.createElement(App));

console.log('html', html);
