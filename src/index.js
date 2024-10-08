import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './ToDo';
import Main from './Main';
import reportWebVitals from './reportWebVitals';
import Avatar from './Avatar';
import Channel from './Channel';
import Timer from './Timer';
import Product from './Product';
import NumberChanging from './NumberChanging';
import ToDo from './ToDo';

const root = ReactDOM.createRoot(document.getElementById('root'));

function emmitComment(channelId) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`channel-${channelId}`, {detail: `Channel ${channelId} content.`})
    )
  }, 2000)
}

emmitComment(1);
emmitComment(2);
emmitComment(3);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
