import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import HomeContainer from "./home_container/home_container";
import LoginContainer from "./login/login_container";
import SignUpFormContainer from './sign_up/sign_up_form_container';
import { login } from "../util/session_api_util";
import { AuthRoute} from '../util/route_util';
const App = () => {
  return (
    <div>
      <Switch>
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <AuthRoute exact path="/login" component={LoginContainer} />
      <Route  exact path="/" component={HomeContainer} />
      <Redirect to="/"/>
      </Switch>
      
    </div>
  );
};

export default App;
