import { clearErrors, logout } from "../../actions/session_actions";
import {createPin} from "../../actions/pin_actions";
import { connect } from "react-redux";
import Profile from "./profile";
import {fetchAllBoards} from "../../actions/board_actions";
import {openModal, closeModal} from '../../actions/modal_actions';
import { fetchBoardPins } from "../../actions/board_pin_actions";
import { selectBoardPins } from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.currentUser],
    boards: Object.values(state.entities.boards),
    pins: selectBoardPins(state.entities.boardPins, state.entities.pins, parseInt(ownProps.match.params.boardId)),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    createPin: (pin) => dispatch(createPin(pin)),
    fetchAllBoards: (userId) => dispatch(fetchAllBoards(userId)),
    openModal: (formType) => dispatch(openModal(formType)),
    fetchBoardPins: () => dispatch(fetchBoardPins()),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
