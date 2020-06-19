import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
import LoginView from "../views/LoginView ";

class LoginContainer extends Component {
  render() {
    return <LoginView />;
  }
}

export default LoginContainer;

/*import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import LoginView from "../views/LoginView";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        userName: "",
        password: "",
      },
      redirect: false,
    };
  }

  handleChange = (e) => {
    const updatedUser = { ...this.state.user };
    const inputField = e.target.name;
    const inputValue = e.target.value;
    updatedUser[inputField] = inputValue;

    this.setState({ user: updatedUser });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.mockLogIn(this.state.user);
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/userProfile" />;
    }

    return (
      <LoginView
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        userName={this.state.user.userName}
      />
    );
  }
}

export default LoginContainer;
*/
