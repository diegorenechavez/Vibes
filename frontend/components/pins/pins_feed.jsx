import React from 'react';


class PinsFeed extends React.component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchAllPins();
    }

    render(){
        return (
            <div>
                <ul>
                    
                </ul>
            </div>
        );
    }


}