import { connect } from "react-redux";
import { fetchBoard } from "../../actions/board_actions";
import { fetchBoardPins } from "../../actions/board_pin_actions";
import BoardShow from "./board_show";
import { fetchAllPins } from "../../actions/pin_actions";
import { deleteBoard } from "../../actions/board_actions";
import { deleteBoardPin } from "../../actions/board_pin_actions";
import { updateBoard } from "../../actions/board_actions";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
  console.log(
    "ASS",
    ownProps.match.params.boardId,
    ownProps.match.params,
    state.entities.boards
  );
  return {
    board: state.entities.boards[ownProps.match.params.boardId],
    pins: Object.entries(state.entities.boardPins),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
  fetchAllPins: () => dispatch(fetchAllPins()),
  fetchBoardPins: (boardId) => dispatch(fetchBoardPins(boardId)),
  deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
  deleteBoardPin: (boardPinId) => dispatch(deleteBoardPin(boardPinId)),
  updateBoard: (board) => dispatch(updateBoard(board)),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);
