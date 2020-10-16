import { connect } from "react-redux";
import { login, clearErrors } from "../../actions/session_actions.js";
import LoginForm from "./login_component";



const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
