import {connect} from 'react-redux';
import {fetchPin} from "../../actions/pin_actions";
import PinShow from './pin_show';
import {saveToBoard} from "../../actions/board_pin_actions";
import {fetchAllBoards} from "../../actions/board_actions";

const mapStateToProps = (state, ownProps) => {
    return {
      pin: state.entities.pins[ownProps.match.params.pinId],
      currentUser: state.entities.users[state.session.currentUser],
      boards: Object.values(state.entities.boards),
      selectedPinId: ownProps.match.params.pinId,
    };
};

const mapDispatchToProps = (dispatch) => {
   
    return{
        saveToBoard: (boardPin) => dispatch(saveToBoard(boardPin)), 
        fetchPin: (pinId) => dispatch(fetchPin(pinId)),
        fetchAllBoards: (userId) => dispatch(fetchAllBoards(userId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PinShow);