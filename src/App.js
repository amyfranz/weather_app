import React, { Component } from "react";
import Data from "./data";
import Search from "./components/search";
import ShowCard from "./components/showCard";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      weather: null,
      query: null,
    };
  }
  componentDidMount() {}
  api = {
    end: "&units=metric&APPID=7be07c41b034df24e94a811e7c26f330",
    base: "https://api.openweathermap.org/data/2.5/weather?q=",
  };

  render() {
    return (
      <div
        className={
          this.state.weather !== null
            ? this.state.weather.main.temp > 16
              ? "App warm"
              : "App"
            : "App"
        }
      >
        <main>
          <Search
            query={this.state.query}
            search={this.search}
            handleQueryChange={this.handleQueryChange}
          />
          {this.state.weather !== null ? (
            <ShowCard
              weather={this.state.weather}
              dateBuilder={this.dateBuilder}
            />
          ) : null}
        </main>
      </div>
    );
  }
  dateBuilder = (d) => {
    const day = Data.days[d.getDay()];
    const date = d.getDate();
    const month = Data.months[d.getMonth()];
    const year = d.getFullYear();
    return `${day}, ${date} ${month} ${year}`;
  };
  search = (e) => {
    if (e.key === "Enter") {
      fetch(`${this.api.base}${this.state.query}${this.api.end}`)
        .then((res) => res.json())
        .then((result) => {
          result.message
            ? alert("The location you entered could not be found")
            : this.setState({ weather: result });
          this.setState({ query: "" });
        });
    }
  };
  handleQueryChange = (query) => {
    this.setState({ query });
  };
}
