import { connect } from "react-redux";
import { fetchBoard } from "../../actions/board_actions";
import { fetchBoardPins } from "../../actions/board_pin_actions";
import Test from "./test";

const mapStateToProps = (state, ownProps) => {
  return {
    board: state.entities.boards[ownProps.match.params.boardId],
    pins: Object.entries(state.entities.boardPins),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
  fetchBoardPins: (boardId) => dispatch(fetchBoardPins(boardId)),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
