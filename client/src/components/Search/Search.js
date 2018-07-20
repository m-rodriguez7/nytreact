import React from "react";

const Search = props => {
    return(
        <div className="container">
            <div className="row">
                <div className="col text-centered">
                    <h3 className="text-center">Search</h3>
                </div>
            </div>
            <div className="row">
                <div className="col text-centered">
                    {props.children}
                </div>
            </div>
            {props.allArticles}
        </div>
        
    )
};

export default Search;