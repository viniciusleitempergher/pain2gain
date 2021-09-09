import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './pages/home'
import { Login } from './pages/login'
import { TrainPage } from './pages/train'
import './global.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/train" exact component={TrainPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
