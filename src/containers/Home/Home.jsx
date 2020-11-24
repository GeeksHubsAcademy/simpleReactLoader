
import React from "react";
import Picture from "../../components/Picture/Picture";


class Home extends React.Component {
    
    constructor (props) {
        super(props);
        
    };
    
    render() {
        return(
            <div>
                <Picture />
            </div>
        );
    };
    
    
};


export default Home;