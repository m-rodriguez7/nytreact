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
                <div className="col">
                    <form>
                        <div className="form-group">
                            <label className="text-center">Query:</label>
                            <input type="text" name="query" value={props.query} onChange={props.handleInputChange} className="form-control" id="queryInput" placeholder="Search for an article" />
                        </div>
                        <div className="form-group">
                            <label>Start Date:</label>
                            <input type="text" name="startDate" value={props.startDate} onChange={props.handleInputChange} className="form-control" id="startDateInput" placeholder="Start Date YYYYMMDD" maxLength="8" />
                        </div>
                        <div className="form-group">
                            <label>End Date:</label>
                            <input type="text" name="endDate" value={props.endDate} onChange={props.handleInputChange} className="form-control" id="endDateInput" placeholder="End Date YYYYMMDD" maxLength="8" />
                        </div>
                        <button onClick={props.handleFormSubmit} type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Search;