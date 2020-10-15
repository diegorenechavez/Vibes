import { connect } from "react-redux";
import { login } from "../../actions/session_actions.js";
import LoginForm from "./login_component";



const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
