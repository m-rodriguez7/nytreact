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
    results: []
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    console.log("page mounted!")
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.query); // 
    API.getArticles(this.state.query, this.state.startDate, this.state.endDate)
    .then(res => {
      this.setState({ results: (res.data.response.docs) });
      
    }); 
  };

  savedArticleLoad = () => {
    console.log("help");
    API.savedArticles()
    .then(article => {
      return(
        <Saved
          title={article.title}
          date={article.url}
          url={article.url}
          onClick={() => this.deleteArticle(article.title)}
        />
      )
    })
  }
  saveArticle = (title, date, url) => {
    console.log("save button clicked!")
    API.saveNew(title, date, url);
  };

  deleteArticle = (title) => {
    console.log("delete clicked");
    API.deleteArticle(title);
  }

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
        onClick={() => this.saveArticle(article.headline.main, article.pub_date, article.web_url)}
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
        <div>
          <h3 className="text-center">Saved</h3>
          {this.savedArticleLoad()}
        </div>

      </div>
    );
  }
}

export default App;
