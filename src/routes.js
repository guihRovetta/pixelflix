import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import VideoRegistration from './pages/Registration/Video';
import CategoryRegistration from './pages/Registration/Category';
import NotFound from './pages/NotFound';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/registration/video" component={VideoRegistration} />
        <Route path="/registration/category" component={CategoryRegistration} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
