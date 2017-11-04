import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './views/home.js';
import Dashboard from './views/dashboard.js';
import Signup from './views/signup.js';
import Login from './views/login.js';
import Todo from './views/todo.js';
import Header from './components/header.js';
import Footer from './components/footer.js';
import * as userGetters from './getters/user.js';
import { init as initAuth } from 'actions/auth';


class App extends Component {
  getHeader = () => {
    const { isLoggedIn, user } = this.props;
    return (
      <Header isLoggedIn={isLoggedIn} user={user} />
    )
  }

  componentWillMount() {
    this.props.initAuth();
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <Router>
        <div className="App">
          <Route path="/" component={this.getHeader} />
          <Switch>
            <Route exact path="/" component={isLoggedIn ? Dashboard : Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/todo" component={Todo} />
          </Switch>
          <Route path="/" component={Footer} />
        </div>
      </Router>
    );
  }
}

export default connect(
  state => {
    return {
      isLoggedIn: userGetters.isLoggedIn(state),
      user: userGetters.user(state),
    }
  },
  dispatch => {
    return {
      initAuth: () => dispatch(initAuth()),
    }
  }
)(App)
