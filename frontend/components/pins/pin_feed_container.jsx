import { connect } from "react-redux";
import PinsFeed from "./pins_feed";
import {fetchAllPins} from '../../actions/pin_actions';

const mapStateToProps = state => {
    return {
        pins:  Object.values(state.pins)
    };
};

const mapDispatchToProps = dispatch =>{
    return {
    fetchAllPins: () => dispatch(fetchAllPins())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PinsFeed);