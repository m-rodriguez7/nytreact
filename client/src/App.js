import React, { Component } from "react";
import Jumbo from "./components/Jumbo"
import Search from "./components/Search";
import Results from "./components/Results";
import Saved from "./components/Saved";
import API from "./utils/API"
import { Input, FormBtn } from "./components/Form";

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
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

 /*  submitAndRender = () => {
    this.handleFormSubmit();
    this.renderArticles();
  } */
  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.query); // 
    API.getArticles(this.state.query, this.state.startDate, this.state.endDate)
    .then(res => {
      this.setState({ results: (res.data.response.docs) });
      
    }); 
  };


  saveArticle = () => {
    console.log("save button clicked!")
    console.log(this.title);
  };

  renderArticles = () => {
    return (
      this.state.results.map(article => {
      console.log(article);
      return (<Results
        _id={article._id}
        key={article._id}
        title={article.headline.main}
        date={article.pub_date}
        url={article.web_url}
        onClick={() => this.saveArticle()}
      />)
    }))
  }
  
  
  
  render() {
    // axios request in Results
    // db request in Saved
    return (
      <div>
        <Jumbo info="Save your favorite articles">NYT Article Search</Jumbo>
        <Search>
        <Input
            value={this.state.query}
            onChange={this.handleInputChange}
            name="query"
            placeholder="query terms"
        />
        <Input
          value={this.state.startDate}
          onChange={this.handleInputChange}
          name="startDate"
          placeholder="start Date YYYYMMDD(required)"
          maxLength='8'
        />
        <Input
          value={this.state.endDate}
          onChange={this.handleInputChange}
          name="endDate"
          placeholder="end Date YYYYMMDD(required)"
          maxLength='8'
        />
        <FormBtn
          onClick={this.handleFormSubmit}
        >Article Search
        </FormBtn>
        </Search>
        <div>
          <h3 className="text-center">Articles</h3>
          {this.renderArticles()}
        </div>



        <Saved>{this.state.saved}</Saved>
      </div>
    );
  }
}

export default App;
