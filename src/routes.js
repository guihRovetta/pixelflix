import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import VideoRegistration from './pages/Registration/Video';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/registration/video" component={VideoRegistration} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
