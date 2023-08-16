import React from 'react';
import ReactDOM from 'react-dom';
import PopUp from './PopUp';

// Mount function to start up the app.

const mount = (el) => {
  ReactDOM.render(
    <PopUp />,
    el
  )
}

// If we are in development and in isolation,
// call mount immediately

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_book-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}
// We are running this through popup
// and we should export the mount function

export { mount };