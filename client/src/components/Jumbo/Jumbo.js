import React from "react";

const Jumbo = props => {
    return(
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4 text-center">{props.children}</h1>
                <p className="lead text-center">{props.info}</p>
            </div>
        </div>
    );
};

export default Jumbo;