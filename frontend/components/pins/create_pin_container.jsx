import { connect } from "react-redux";
import {createPin} from "../../actions/pin_actions";
import CreatePin from "./create_pin";
import {closeModal} from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps)=>{
    return {
        pin:{
            description:"",
            content:"",
            photoFile: null
        },
        userId: state.session.currentUser
    };
    
};
const mapDispatchToProps = (dispatch) =>{
    return {
        createPin: (pin, userId) => dispatch(createPin(pin, userId)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePin);