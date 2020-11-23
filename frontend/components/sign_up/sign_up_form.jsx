import React from 'react';
import {Link} from 'react-router-dom'
import { openModal } from '../../actions/modal_actions';


class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentDidMount(){
    this.props.clearErrors();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.signup(this.state);
    this.props.clearErrors().then(this.props.closeModal());
  }
  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }
  demoLogin(event) {
    event.preventDefault();
    const demoUser = {
      username: "lizzie mcguire",
      password: "123456",
      firstname: "lizzie",
      lastname: "mcguire",
      email: "text@user.com",
    };
    this.props.login(demoUser);
    this.props.clearErrors();
    this.props.closeModal();
  }

  renderErrors() {
    return (
      <ul className="errors-wrapper">
        {this.props.errors.map((error, i) => (
          <p className="errors" key={i}>* {error}</p>
        ))}
      </ul>
    );
  }

  render() {
    const {closeModal,openModal} = this.props
    return (
      <div className="sign-up-modal">
        <button className="close-button" onClick={() => closeModal()}>
          X
        </button>

        <form onSubmit={this.handleSubmit} className="signup-form">
          <img src={window.logoURL} alt="vibes logo" />
            <h1 className="message">Welcome To Vibes</h1>
         
          {this.renderErrors()}
          <input
            className="input1"
            type="text"
            onChange={this.handleChange("email")}
            value={this.state.email}
            placeholder="Enter Email"
            required
          />

          <input
            className="input1"
            type="text"
            onChange={this.handleChange("username")}
            value={this.state.username}
            placeholder="Create a Username"
            required
          />

          <input
            className="input1"
            type="password"
            name="password"
            placeholder="Create a Password"
            value={this.state.password}
            onChange={this.handleChange("password")}
            required
          />

          <button className="primary-button">Sign Up!</button>
          <button
            className="secondary-button"
            onClick={(event) => this.demoLogin(event)}
          >
            Demo Login
          </button>
          <footer className="login-footer">Already a member?</footer>
          <div className="link-text" onClick={() => openModal("login")}>
            {" "}
            Login
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;