import { connect } from "react-redux";
import { fetchBoard } from "../../actions/board_actions";
import { fetchBoardPins } from "../../actions/board_pin_actions";
import BoardShow from "./board_show";
import {selectBoardPins} from "../../reducers/selectors";
import { fetchAllPins } from "../../actions/pin_actions";
import {deleteBoard} from "../../actions/board_actions";
import {deleteBoardPin} from "../../actions/board_pin_actions";

const mapStateToProps = (state, ownProps) => {

    return{
  board: state.entities.boards[ownProps.match.params.boardId],
  pins: selectBoardPins(state.entities.boardPins, state.entities.pins, parseInt(ownProps.match.params.boardId)),
    };
};


const mapDispatchToProps = (dispatch) => ({
  fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
  fetchAllPins: () => dispatch(fetchAllPins()),
  fetchBoardPins: () => dispatch(fetchBoardPins()),
  deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
  deleteBoardPin: (boardPinId) => dispatch(deleteBoardPin(boardPinId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);