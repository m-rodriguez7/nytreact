import React, { Component } from "react";
import Jumbo from "./components/Jumbo"
import Search from "./components/Search";
import Results from "./components/Results";
import Saved from "./components/Saved";
import API from "./utils/API"

class App extends Component {
  state = {
    query: "",
    startDate: "",
    endDate: "",
    saved: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    /* API.getBaseBreedsList()
      .then(res => this.setState({ breeds: res.data.message }))
      .catch(err => console.log(err)); */
      console.log("page mounted!")
  }

  handleInputChange = event => {
    this.setState({ query: event.target.value }, { startDate: event.target.value }, {endDate: event.target.value });
    console.log(this.state.query);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("submit clicked!!")
    console.log(this.state.query);
    /* API.getDogsOfBreed(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message })); */
  };
  
  
  
  
  render() {
    // axios request in Results
    // db request in Saved
    return (
      <div>
        <Jumbo info="Save your favorite articles">NYT Article Search</Jumbo>
        <Search 
          handleFormSubmit={this.handleFormSubmit}
          handleInputchange={this.handleInputChange}
          /* query={this.state.query}
          startDate={this.state.startDate}
          endDate={this.state.endDate} */
        />
        <Results>{this.state.results}</Results>
        <Saved>{this.state.saved}</Saved>
      </div>
    );
  }
}

export default App;
