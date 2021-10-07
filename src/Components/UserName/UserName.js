import React, { Component } from "react";

import "./UserName.scss";

export default class UserName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "",
    };
    this.findCurrentUser = this.findCurrentUser.bind(this);
  }

  componentDidMount() {
    this.findCurrentUser();
  }

  findCurrentUser() {
    const local = JSON.parse(localStorage.getItem("Users"));
    const currentUser = Array.from(local).find((user) => user.isCurrentUser);
    this.setState({ currentUser: currentUser.email });
  }

  render() {
    const { currentUser } = this.state;
    const { isOpen } = this.props;
    return (
      <div className={isOpen ? "navbar__username open" : "navbar__username"}>
        <div></div>
        <span className={isOpen ? "username__span open" : "username__span"}>
          {currentUser}
        </span>
      </div>
    );
  }
}
