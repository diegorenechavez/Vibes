import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import LoginFormContainer from "../login/login_container";
import SignUpFormContainer from "../sign_up/sign_up_form_container";
import CreateBoardContainer from "../boards/create_board_form_container";
import CreatePinContainer from "../pins/create_pin_container";


function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;

  switch (modal) {
    case "login":
      component = <LoginFormContainer />;
      break;
    case "signup":
      component = <SignUpFormContainer />;
      break;
    case "create board":
      component = <CreateBoardContainer />;
      break;
    case "create pin":
      component = <CreatePinContainer />;
      break;
    default:
      return null;
  }
  return (
    <div onClick={closeModal}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
