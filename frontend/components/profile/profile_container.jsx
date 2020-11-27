import { clearErrors, logout } from "../../actions/session_actions";
import {createPin} from "../../actions/pin_actions";
import { connect } from "react-redux";
import Profile from "./profile";
import {fetchAllBoards} from "../../actions/board_actions";
import {openModal, closeModal} from '../../actions/modal_actions';
import { fetchBoardPins } from "../../actions/board_pin_actions";
import { selectBoardPins } from "../../reducers/selectors";
import { fetchBoard } from "../../util/board_api_util";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.currentUser],
    boards: Object.values(state.entities.boards),
    boardPins: Object.values(state.entities.boardPins)
    // pins: selectBoardPins(state.entities.boardPins, state.entities.pins, parseInt(ownProps.match.params.boardId)),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    createPin: (pin) => dispatch(createPin(pin)),
    fetchAllBoards: (userId) => dispatch(fetchAllBoards(userId)),
    openModal: (formType) => dispatch(openModal(formType)),
    fetchBoardPins: (boardId) => dispatch(fetchBoardPins(boardId)),
    // fetchBoard: (boardId) => dispatch(fetchBoard(boardId))

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
