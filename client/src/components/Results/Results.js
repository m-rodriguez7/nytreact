import React from "react";

const Results = props => {
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3 className="text-center">Results</h3>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {props.children}
                </div>
            </div>
        </div>
    )    
}
export default Results;