import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';

import New from './new';
import View from './view';

const SwitchRoute = () => (
  <Switch>
    <Route path="/new" component={New}/>
    <Route path="/view" component={View}/>
  </Switch>
);

export default SwitchRoute;