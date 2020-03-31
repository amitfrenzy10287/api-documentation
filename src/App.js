import React, { Component } from 'react';
import Home from  './containers/Home';
import Guide from './containers/Guide';
import Intro from './containers/Intro';
import Reference from './containers/Reference';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Layout from './components/Layout';

class App extends Component {
  render() {
    let routes =(
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/developer/documentation" component={Home} />
          <Route  path="/developer/en/api/dummy1/intro" component={Intro} />
          <Route  path="/developer/en/api/dummy1/guide" component={Guide} />
          <Route  path="/developer/en/api/dummy1/reference" component={Reference} />
          <Redirect to="/" />
      </Switch>
    );

    return (
      <Layout>
          {routes}
      </Layout>
    );
  }
}

export default withRouter(App);
