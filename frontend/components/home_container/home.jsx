import React from "react";
import { Link } from "react-router-dom";
import PinIndexContainer from "../pins/pin_index_container";
import SplashContainer from "../splash/splash_container";


 const home = ({currentUser, logout,openModal, currentUserId}) => {
   const profileButton = currentUser ? (
     <div className="home-button-wrapper">
       <Link className="links" to={`/users/${currentUserId}`}>
       <button className="home-button">Profile</button>
       </Link>
     </div>
   ) : null
   const homeButton = currentUser ? (
     <div className="home-button-wrapper">
       <Link to="/feed" className="links">
         <button className="home-button">Home</button>
       </Link>
     </div>
   ) : null;
    const display = currentUser ? (
      
     
      <div className="greeting">
        <p className="place-holder"> Hello, {currentUser.username}</p>
        <button className="nav-button1" onClick={logout}>
          Log Out!
        </button>
      </div>
      
    ) : (
      <>
        
          <button className="nav-button1" onClick={()=> openModal('signup')}>Sign Up!</button>
        
          <button className="nav-button2" onClick={()=> openModal('login')}>Log In!</button>
        
      </>
    );

    return (
      <div className="nav-bar">
        <div className="spacer-left">
          <div className="image-div">
          <img className="logo-home" src={window.logoURL} alt="vibes logo" />
          </div>
          
          <h1 className="logo-text">Vibes</h1>
        
          {homeButton}
          {profileButton}
        </div>
        <div className="spacer">
          <p className="place-holder">About</p>
          <p className="place-holder">Blog</p>
          <p className="place-holder">Business</p>
          {display}
        </div>
        
  
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

            