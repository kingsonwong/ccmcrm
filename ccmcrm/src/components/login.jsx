import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";

class Login extends Component {
  state = {};
  render() {
    const { handleSubmit, account, handleInputChange } = this.props;
    return (
      <div className="login_box">
        <div className="loginform">
          <h1 className="logintitle">Login</h1>

          <form className="loginform_fields" action="" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="">
                <FontAwesomeIcon
                  className="loginform_user-icon"
                  icon={faUser}
                />
                Username / Email
              </label>
              <input
                type="text"
                name="email"
                value={account.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">
                <FontAwesomeIcon className="loginform_user-icon" icon={faKey} />
                Password
              </label>
              <input
                type="password"
                name="password"
                value={account.password}
                onChange={handleInputChange}
              />
            </div>
            <button className="login_button">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
