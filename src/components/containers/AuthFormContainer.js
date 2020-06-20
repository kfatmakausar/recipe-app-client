import React, { Component } from "react";
import { connect } from "react-redux";
import { auth } from "../../thunks";
import { AuthFormView } from "../views";

// Smart container;
class AuthFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const formName = event.target.name;
    this.props.loginOrSignup(this.state.email, this.state.password, formName);
  };

  render() {
    return (
      <AuthFormView
        name={this.props.name}
        displayName={this.props.displayName}
        error={this.props.error}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        isLoggedIn={this.props.isLoggedIn}
        userEmail={this.props.userEmail}
      />
    );
  }
}

// Map state to props;
const mapLogin = (state) => {
  return {
    name: "login",
    displayName: "Login",
    error: state.user.error,
    isLoggedIn: !!state.user.id,
    userEmail: state.user.email,
  };
};

// Map state to props;
const mapSignup = (state) => {
  return {
    name: "signup",
    displayName: "Sign Up",
    error: state.user.error,
    isLoggedIn: !!state.user.id,
    userEmail: state.user.email,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    loginOrSignup: (email, password, formName) =>
      dispatch(auth(email, password, formName)),
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthFormContainer);
export const Signup = connect(mapSignup, mapDispatch)(AuthFormContainer);

/*import React, { Component } from "react";
// import PropTypes from 'prop-types';
// import { fetchAllWorkoutsThunk } from '../../../thunks';
import { connect } from "react-redux";
//import { auth } from "../../thunks";
import { signup, login, logout } from "../../thunks";
import { AuthFormView } from "../views";
// import  ProfilePage  from './ProfilePage'

// Smart container;
class AuthFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      lastName: "",
      firstName: "",
    };
  }

  // handle the input text change
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // handle the submit bottom
  handleSubmit = (event) => {
    event.preventDefault();
    const formName = event.target.name;
    console.log("form name: ", formName);
    if (formName === "login") {
      this.props.login(this.state.email, this.state.password, formName);
    } else if (formName === "signup") {
      this.props.signup(
        this.state.firstName,
        this.state.lastName,
        this.state.email,
        this.state.password,
        formName
      );
    } else {
      console.log("logout reached");
      this.props.logout();
    }
  };

  render() {
    return (
      <>
        <AuthFormView
          firstName={this.props.firstName}
          lastName={this.props.lastName}
          name={this.props.name}
          displayName={this.props.displayName}
          error={this.props.error}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          isLoggedIn={this.props.isLoggedIn}
          isSigned={this.props.isSigned}
          userEmail={this.props.userEmail}
        />
      </>
    );
  }
}
// Map state to props;
const mapLogin = (state) => {
  // console.log(state.user)
  return {
    name: "login",
    displayName: "Login",
    error: state.user.error,
    isLoggedIn: !!state.user.id,
    userEmail: state.user.email,
  };
};

// Map state to props;
const mapSignup = (state) => {
  return {
    name: "signup",
    displayName: "Sign Up",
    error: state.user.error,
    firstName: state.user.firstName,
    lastsName: state.user.lastName,
    userEmail: state.user.email,
  };
};

const mapLogout = (state) => {
  return {
    name: "logout",
    displayName: "Sign out",
    error: state.user.error,
    userEmail: state.user.email,
    isLoggedIn: !!state.user.id,
  };
};

// Map login dispatch to props;
const mapDispatchLogin = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password)),
  };
};

// Map sign up dispatch
const mapDispatchSignUp = (dispatch) => {
  return {
    signup: (firstName, lastName, email, password) =>
      dispatch(signup(firstName, lastName, email, password)),
  };
};

const mapDispatchLogout = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export const Login = connect(mapLogin, mapDispatchLogin)(AuthFormContainer);
export const Signup = connect(mapSignup, mapDispatchSignUp)(AuthFormContainer);
export const Logout = connect(mapLogout, mapDispatchLogout)(AuthFormContainer);*/
