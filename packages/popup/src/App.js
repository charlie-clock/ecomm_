import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

import Library from './components/Library';
import User from './components/User';

export default () => {
  return <div>
    <StylesProvider>
      <Library/>
    </StylesProvider>
  </div>
}