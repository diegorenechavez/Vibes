import React from 'react';
import PinIndexitem from "./pin_index_item";
import HomeContainer from "../home_container/home_container";
import { trackPromise } from "react-promise-tracker";
class PinsIndex extends React.Component{
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        trackPromise(
        this.props.fetchAllPins());
    }

    

    render(){
        if(this.props.pins.length === 0){
            return null;
        }else{
        return (
            <>
            <HomeContainer />
                <figure className="main-feed" >
                    {
                       this.props.pins.map((pin) => (<PinIndexitem pin={pin} key={pin.id} fetchAllPins={this.props.fetchAllPins} />))
                    }
                </figure>
            </>
        );
                }
    }


}

export default PinsIndex;