import React from "react";
import { Link } from "react-router-dom";


 const home = ({currentUser, logout}) => {
     
    const display = currentUser ? (
        <div>
            <p>Hello, {currentUser.username}</p>
            <button onClick={logout}>Log Out!</button>
        </div>
    ) :(
        <>
        <Link to="/signup">
              <button className="nav-button1">Sign Up!</button>
        </Link>
        <Link to="/login">
              <button className="nav-button2">Log In!</button>
        </Link>
        </>
    );

    return (
      <div className="nav-bar">
        <img className="logo-home" src={window.logoURL} alt="vibes logo" />
        <h1 className="logo-text">Vibes</h1>
        <p className="place-holder">About</p>
        <p className="place-holder">Blog</p>
         <p className="place-holder">Business</p>
        {display}
      </div>
    );




};
// class Home extends React.Component{

//     render(){
//         return (
//           <div className="nav-bar">
//             <img className="logo-home" src={window.logoURL} alt="vibes logo" />
//             <h1 className="logo-text">Vibes</h1>
//             <p className="place-holder">About</p>
//             <p className="place-holder">Blog</p>
//             <p className="place-holder">Business</p>
//           </div>
//         );
//     }
// };
export default home;

            