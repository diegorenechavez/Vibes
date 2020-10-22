import { connect } from "react-redux";
import { login, clearErrors } from "../../actions/session_actions.js";
import LoginForm from "./login_component";
import { closeModal, openModal } from "../../actions/modal_actions";



const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => dispatch(closeModal()),
    openModal: (formType) => dispatch(openModal(formType))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
