import {connect} from 'react-redux';
import BoardForm from "./board_form";
import {clearErrors} from "../../actions/session_actions";
import { createBoard } from '../../actions/board_actions';
import { closeModal } from '../../actions/modal_actions'

const mapStateToProps = ({errors}) =>{
    return {
      errors,
  
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createBoard: (board) => dispatch(createBoard(board)),
        clearErrors: () => dispatch(clearErrors()),
        closeModal: () => dispatch(closeModal()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardForm);