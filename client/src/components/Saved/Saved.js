import React from "react";

const Saved = props  => {
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
                    <a href={props.url}>{props.url}</a>
                </div>
                <div className = "col">
                    <button className="btn btn-danger" title={props.title} id={props.id} onClick={props.onClick}>delete</button>
                </div>
            </div>
        </div>
    )    
};

export default Saved;