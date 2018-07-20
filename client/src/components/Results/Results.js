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
                    <a href={props.url}>{props.url}</a>
                </div>
                <div className = "col">
                    <button className="btn btn-success" title={props.title} date={props.date} url={props.url} onClick={props.onClick} _id={props._id}>Save</button>
                </div>
            </div>
        </div>
    )    
}
export default Results;