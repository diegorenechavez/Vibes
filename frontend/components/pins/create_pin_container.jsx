import { connect } from "react-redux";
import {createPin} from "../../actions/pin_actions";
import CreatePin from "./create_pin";
import {closeModal} from "../../actions/modal_actions";

const mapStateToProps = (state)=>{
    return {
        pin:{
            description:"",
            content:"",
            photoFile: null
        }
    };
};
const mapDispatchToProps = (dispatch) =>{
    return {
        createPin: (pin) => dispatch(createPin(pin)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePin);