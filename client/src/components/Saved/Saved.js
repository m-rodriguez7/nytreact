import React from "react";

const Saved = props  => {
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3 className="text-center">Saved</h3>
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
export default Saved;