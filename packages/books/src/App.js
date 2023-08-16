import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

import Landing from './components/Landing';
import User from './components/User';

export default () => {
  return <div>
    <StylesProvider>
      <BrowserRouter>
      <Switch>
        <Route exact path="/user" component={user} />
        
        <Route path="/" component={Landing}/>
      </Switch>
      </BrowserRouter>
    </StylesProvider>
  </div>
}