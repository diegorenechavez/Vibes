import React from "react";
import SplashIndexitem from "./splash_index_item";
import HomeContainer from "../home_container/home_container";

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllPins();
    this.props.openModal("signup");
  }

  render() {
    if (this.props.pins.length === 0) {
      return null;
    } else {
      return (
        <div className="splash-container">
          <HomeContainer />
          {/* <h1 className="splash-message">Welcome To Vibes</h1>
          <span>
            <h4 className="splash-message2">Set A mood For Your next Party</h4>
          </span> */}
          <figure className="main-feed2">
            <div className="indenter"></div>
            {this.props.pins.map((pin) => (
              <SplashIndexitem pin={pin} key={pin.id} />
            ))}
          </figure>
          <div className="gradient"></div>
        </div>
      );
    }
  }
}

export default Splash;
