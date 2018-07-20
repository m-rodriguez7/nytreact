import React from "react";

const Results = props => {
    return(
        <div className="container">
            
            <div className="row">
                <div className="col">
                    {props.title}
                </div>
                <div className="col">
                    {props.date}
                </div>
                <div className="col">
                    {props.url}
                </div>
            </div>
        </div>
    )    
}
export default Results;