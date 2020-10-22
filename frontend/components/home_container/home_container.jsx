import {clearErrors, logout} from "../../actions/session_actions";
import {connect} from 'react-redux';
import Home from "./home";
import { openModal, closeModal } from "../../actions/modal_actions";
import React from "react";

const mapStateToProps = state =>{
    return {
      currentUser: state.entities.users[state.session.currentUser],
      formType: "login",
      currentUserId: state.session.currentUser
    };
};

const mapDispatchToProps = dispatch => {
    return {
      logout: () => dispatch(logout()),
      openModal: modal => dispatch(openModal(modal)),
      closeModal: () => dispatch(closeModal()),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);