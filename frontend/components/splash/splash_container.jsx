import { connect } from "react-redux";
import Splash from "./splash"
import { fetchAllPins } from "../../actions/pin_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state) => {
  return {
    pins: Object.values(state.entities.pins),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPins: () => dispatch(fetchAllPins()),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
