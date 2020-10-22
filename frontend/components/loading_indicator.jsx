import React, { cloneElement } from 'react';
import {usePromiseTracker} from "react-promise-tracker";
import Loader from "react-loader-spinner";

const LoadingIndicator = props => {
    const {promiseInProgress} =usePromiseTracker();

    return(
        promiseInProgress &&
         <div
      style={{
        // width: "100%",
        // height: "100",
        // display: "flex",
        // justifyContent: "center",
        // flexDirection:"column",
        // alignItems: "center",
        // margin: "auto"
        width: "100px",
	height: "100px",
	
	
	position: "absolute",
	top:"0",
	bottom: "0",
	left: "0",
	right: "0",
  	
	margin: "auto"
      }}
    >
      <Loader type="ThreeDots" color="lightgrey" height="100" width="100" />
    </div>
    );
};

export default LoadingIndicator;