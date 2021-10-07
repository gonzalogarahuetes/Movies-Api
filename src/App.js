import React, { Component } from "react";

import LogIn from "./Components/LogIn/Login";
import SignUp from "./Components/SignUp/SignUp";
import Main from "./Components/Main/Main";
import FilmPage from "./Components/FilmPage/FilmPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./main.scss";

function updateCurrentUser(array, values) {
  const updatedUsers = array.map((user) => {
    if (user.email === values.email) user.isCurrentUser = true;
    if (user.email !== values.email) user.isCurrentUser = false;
    return user;
  });
  return updatedUsers;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: "",
      isCurrentUser: false,
    };
    this.refresh = this.refresh.bind(this);
    this.signUpUser = this.signUpUser.bind(this);
    this.logInUser = this.logInUser.bind(this);
  }

  componentDidUpdate() {
    if (this.state.user !== "") window.location = "/main";
  }

  refresh(newUser, newPassword, newCurrentUser) {
    this.setState({
      user: newUser,
      password: newPassword,
      isCurrentUser: newCurrentUser,
    });
  }

  signUpUser(values) {
    let local = JSON.parse(localStorage.getItem("Users"));

    if (local === null) {
      const newList = [values];
      localStorage.Users = JSON.stringify(newList, null, 2);

      const { email, password } = values;
      this.refresh(email, password, true);
    } else {
      local = Array.from(local);
      local.push(values);

      const updatedUsers = updateCurrentUser(local, values);

      localStorage.Users = JSON.stringify(updatedUsers, null, 2);

      const { email, password } = values;
      this.refresh(email, password, true);
    }
  }

  logInUser(values) {
    const local = JSON.parse(localStorage.getItem("Users"));

    let currentUser;
    if (local === null) {
      currentUser = null;
    } else {
      currentUser = Array.from(local).find(
        (user) => user.email === values.email
      );
    }

    if (local && currentUser && currentUser.password === values.password) {
      const updatedUsers = updateCurrentUser(local, values);

      const { email, password, isCurrentUser } = currentUser;

      this.refresh(email, password, isCurrentUser);

      localStorage.Users = JSON.stringify(updatedUsers, null, 2);
    }
    if (local && currentUser && currentUser.password !== values.password)
      alert("Wrong password! Think again");
    if (!local || !currentUser)
      alert("Your email is not yet registered. Sign in and get started!");
  }

  render() {
    const { user } = this.state;
    console.log(user);
    return (
      <Router>
        <Switch>
          <Route path="/main">
            <Main user={user} />
          </Route>
          <Route path="/sign-up">
            <SignUp signUpUser={this.signUpUser} />
          </Route>
          <Route path="/movie/:id" component={FilmPage} />
          <Route path="/">
            <LogIn logInUser={this.logInUser} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
