import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import { logout } from '../actions/auth';
import { withRouter } from 'react-router';
import { connect } from 'react-redux'


class Header extends Component {
  logout = () => {
    const { history } = this.props;
    this.props.logout().then(() => {
      history.push('/');
    });
  }

  render() {
    const { isLoggedIn, user } = this.props;
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React, {user.email}</h1>
        <Link to="/">Home</Link> |
        <Link to="/todo">todo</Link> |
        {!isLoggedIn &&
          (
            <span>
              <Link to="/signup">signup</Link> |
              <Link to="/Login">Login</Link> |
            </span>
          )
        }
        {isLoggedIn &&
          <Link to="/" onClick={this.logout}>logout</Link>
        }
      </header>
    );
  }
}

export default connect(
  state => { return {}; },
  dispatch => {
    return {
      logout: () => dispatch(logout()),
    };
  }
)(withRouter(Header));
