import React from "react";
import {Link} from "react-router-dom";

class Forum extends React.Component {

    constructor(props){
        console.log("forum")
        super(props)
    }

    handleClick = (e) => {
    }

    render(){
        return(
            <div>
                <h1>Forum here.</h1>
            </div>
        )
    }

}

export default Forum;