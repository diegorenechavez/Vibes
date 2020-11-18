
import React from 'react';
import {Link} from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }
  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
    this.props.clearErrors();
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  renderErrors() {
    return (
      <ul className="errors-wrapper">
        {this.props.errors.map((error, i) => (
          <p className="errors" key={i}>
            * {error}
          </p>
        ))}
      </ul>
    );
  }
  showModal() {
    state = {
      show: false,
    };
    showModal = (e) => {
      this.setState({ show: true });
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

  render() {
    const { closeModal, openModal } = this.props;
    return (
      <div className="sign-up-modal">
        {/* <Link to="/">
          {" "} */}
        <button onClick={() => closeModal()} className="close-button">
          X
        </button>{" "}
        {/* </Link> */}
        <form onSubmit={this.handleSubmit} className="signup-form">
          <img src={window.logoURL} alt="vibes logo" />
          <h1 className="message">Welcome Back To Vibes</h1>
          <h5 className="slogan">Set a Mood</h5>
          {this.renderErrors()}
          <input
            className="input1"
            type="text"
            onChange={this.handleChange("username")}
            value={this.state.username}
            placeholder="Enter Username"
          />

          <input
            className="input1"
            type="password"
            name="password"
            placeholder="Enter Password"
            value={this.state.password}
            onChange={this.handleChange("password")}
          />

          <button className="primary-button">Log In!</button>
          <button
            className="secondary-button"
            onClick={(event) => this.demoLogin(event)}
          >
            Demo Login
          </button>
          
          <footer className="login-footer2">Not a member?</footer>
          <div onClick={() => openModal("signup")} className="link-text">
            {" "}
            Sign Up!
          </div>
        </form>
      </div>
    );
  }
};
 










export default LoginForm;