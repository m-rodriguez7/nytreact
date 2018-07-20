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
    api: API
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    console.log("page mounted!")
    this.savedArticleLoad();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault(); // 
    API.getArticles(this.state.query, this.state.startDate, this.state.endDate)
    .then(res => {
      this.setState({ results: (res.data.response.docs) });
      
    }); 
  };

  savedArticleLoad = () => {
    API.savedArticles()
    .then(res => {
      this.setState({ saved: res.data })
    })
  };

  renderSavedArticles = () => {
    return(
      this.state.saved.map(article => {
        return(
          <Saved
            id = {article._id}
            title={article.title}
            date={article.url}
            url={article.url}
            onClick={() => this.deleteArticle(article._id)}
          />
        )
      })
    );
  };

  saveArticle = (title, date, url) => {
    console.log("save button clicked!")
    let object = {}
    object.title=title;
    object.date=date;
    object.url=url;
    API.saveNewArticle(object);
  };

  deleteArticle = (id) => {
    console.log("delete clicked");
    API.deleteArticle(id);
  }

  renderArticles = () => {
    return this.state.results.map(article => {
      console.log(article);
      let articleObject = {}
      articleObject.title=article.headline;
      articleObject.date=article.pub_date;
      articleObject.url=article.web_url;
      return (
        <Results
        _id={article._id}
        key={article._id}
        title={article.headline.main}
        date={article.pub_date}
        url={article.web_url}
        onClick={() => this.saveArticle(articleObject)} // this button throws a 404
        />
      )
    })
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
          {this.renderSavedArticles()}
        </div>

      </div>
    );
  }
}

export default App;
