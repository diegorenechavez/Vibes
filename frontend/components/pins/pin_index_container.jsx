import { connect } from "react-redux";
import PinsIndex from "./pins_index";
import {fetchAllPins} from '../../actions/pin_actions';
import { saveToBoard} from '../../actions/board_pin_actions'

const mapStateToProps = state => {
    return {
        pins:  Object.values(state.entities.pins)
    };
};

const mapDispatchToProps = dispatch =>{
    return {
      fetchAllPins: () => dispatch(fetchAllPins()),
      saveToBoard: (boardPin) => dispatch(saveToBoard(boardPin)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PinsIndex);