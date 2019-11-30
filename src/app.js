import React from 'react';
import IndexPage from './pages/index';
import AboutPage from './pages/about';

import { hot } from 'react-hot-loader';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename={window.location.pathname}>
      <div>
        hello react
        <Route path={'/about'} component={AboutPage} />
        <Route exact path={'/'} component={IndexPage} />
      </div>
    </BrowserRouter>
  )
}
export default App;
