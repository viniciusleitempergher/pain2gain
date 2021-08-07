import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './pages/home'
import { Login } from './pages/login'
import './global.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
