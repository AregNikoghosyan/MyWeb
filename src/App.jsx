import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import createBrowserHistory from 'history/createBrowserHistory';

import { routes, to } from './platform/services/constant';

export const history = createBrowserHistory();
history.listen(() => window.scrollTo(0, 0));

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className='Main-content'>
          <Header />
          <div className='Content'>
            <Switch>
              {routes.map((item, i) =>
                <Route key={i} exact={item.exact} component={item.component} path={item.path} />)}
              <Redirect to={to.home} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
