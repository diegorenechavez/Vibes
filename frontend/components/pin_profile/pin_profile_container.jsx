
import {connect} from "react-redux";
import {fetchAllPins,fetchUsersPins} from "../../actions/pin_actions";
import { createPin, deletePin } from "../../actions/pin_actions";
import PinsProfile from "./pin_profile";
import { openModal, closeModal } from '../../actions/modal_actions';
const mapStateToProps = (state, ownProps) => {
    return{
        currentUserId: state.session.currentUser,
        pins: Object.values(state.entities.pins),
        currentUser: state.entities.users[state.session.currentUser],
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsersPins: (userId) => dispatch(fetchUsersPins(userId)),
        openModal: (formType) => dispatch(openModal(formType)),
        createPin: (pin) => dispatch(createPin(pin)),
        deletePin: (pinId) => dispatch(deletePin(pinId))
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PinsProfile);