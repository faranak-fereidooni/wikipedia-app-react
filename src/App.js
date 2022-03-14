import React, { Component } from "react";
import SearchBox from "./components/searchBox";
import Results from "./components/results";
import { getSearchText } from "./services/wikipediServive";
import "./index.css";

class App extends Component {
  state = {
    search:[], 
    totalHits:0
  };

  handleSearchSubmit = async (e) => {
    e.preventDefault();
    const searchInfo = await getSearchText(e.target.search.value);
    const totalHits = searchInfo.data.query.searchinfo.totalhits;

    const data = searchInfo.data.query.search.map((search) => ({
        title: search.title,
        content: search.snippet,
        pageId : search.pageid,
      }));
    this.setState({ search: data,totalHits });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1 className="searchHeader text-center text-light display-5">
            WIKI SEEKER
          </h1>
          <SearchBox onSubmit={this.handleSearchSubmit} />
          <Results searchInfo={this.state.search} totalHits={this.state.totalHits}/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
