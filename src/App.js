import React, { Component } from "react";
import SearchBox from "./components/SearchBox";
import "./App.css";
import "tachyons";
import Cardlist from "./components/Cardlist";
import Scroll from "./components/Scroll";
import ErrorBoundary from "./components/ErrorBoundary";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(resp => resp.json())
      .then(resp =>
        this.setState({
          robots: resp
        })
      )
      .catch(err => console.log(err));
  }

  onSearchChange = event => {
    this.setState({
      ...this.state,
      searchField: event.target.value
    });
  };

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox
          searchField={this.state.searchField}
          searchChange={this.onSearchChange}
        />
        <Scroll>
          <ErrorBoundary>
            <Cardlist robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
