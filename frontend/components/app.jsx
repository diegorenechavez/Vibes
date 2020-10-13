import React from "react";
import {Route, Switch} from "react-router-dom";
import HomeContainer from "./home_container/home";

import SignUpFormContainer from './sign_up/sign_up_form_container';

const App = () => {
  return (
    <div>
     
      <Switch>
      <Route  path="/" component={SignUpFormContainer} />
      {/* <Route  path="/" component={HomeContainer} /> */}
      </Switch>
    </div>
  );
};

export default App;
