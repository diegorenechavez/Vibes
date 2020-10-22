import { clearErrors, logout } from "../../actions/session_actions";
import {createPin} from "../../actions/pin_actions";
import { connect } from "react-redux";
import Profile from "./profile";
import {fetchAllBoards} from "../../actions/board_actions";
import {openModal, closeModal} from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.currentUser],
    boards: Object.values(state.entities.boards),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    createPin: (pin) => dispatch(createPin(pin)),
    fetchAllBoards: (userId) => dispatch(fetchAllBoards(userId)),
    openModal: (formType) => dispatch(openModal(formType))

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
