import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import HomeContainer from "./home_container/home_container";
import LoginContainer from "./login/login_container";
import SignUpFormContainer from './sign_up/sign_up_form_container';
import { login } from "../util/session_api_util";
import { AuthRoute, ProtectedRoute} from '../util/route_util';
import PinIndexContainer from "./pins/pin_index_container";
import PinShowContainer from './pins/pin_show_container';
import ProfileContainer from './profile/profile_container';
import CreatePinContainer from './pins/create_pin_container';
import home from "./home_container/home";
import SplashContainer from "./splash/splash_container"
import CreateFormContainer from "./boards/create_board_form_container"
import Modal from './modal/modal'
import BoardShowContainer from '../components/boards/board_show_container';
const App = () => {
  return (
    <div>
      <Modal/>
      <Switch>
        {/* <Route exact path ="/splash" component={SplashContainer} /> */}
        {/* <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
        <AuthRoute exact path="/" component={SplashContainer} />
        <AuthRoute exact path="/login" component={LoginContainer} />
        <ProtectedRoute exact path="/feed" component={PinIndexContainer} />
        <ProtectedRoute exact path="/pins/new" component={CreatePinContainer} />
        <ProtectedRoute exact path="/pins/:pinId" component={PinShowContainer} />
        <ProtectedRoute exact path="/users/:userId/boards/:boardId" component={BoardShowContainer} />
        <ProtectedRoute exact path="/users/:userId" component={ProfileContainer} />
        {/* <ProtectedRoute exact path="/boards/new" component={CreateFormContainer} /> */}
        
        <Redirect to="/" />
      </Switch>
      
    </div>
  );
};

export default App;
