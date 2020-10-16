import { connect } from "react-redux";
import PinsIndex from "./pins_index";
import {fetchAllPins} from '../../actions/pin_actions';

const mapStateToProps = state => {
    return {
        pins:  Object.values(state.entities.pins)
    };
};

const mapDispatchToProps = dispatch =>{
    return {
    fetchAllPins: () => dispatch(fetchAllPins())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PinsIndex);