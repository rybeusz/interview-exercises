import React from "react";
import ReactDOM from "react-dom";
import data from "./data.json";

import "./styles.css";
import { Feed } from "./Feed.jsx";
import { FeedInput } from "./FeedInput.jsx";

class App extends React.Component {
  state = {
    feed: [...data.feed]
  };

  addLike = feedId => {
    this.setState(prevState => ({
      feed: prevState.feed.map(x =>
        x.id === feedId ? { ...x, likes: x.likes + 1 } : x
      )
    }));
  };

  addFeed = (value, timestamp) => {
    const newFeed = {
      id: Math.random(), //id in normal app should be created on backend, for simplicity it's random there
      timestamp,
      value,
      user: "User 3", //assume that user3 is logged in all the time
      likes: 0
    };
    this.setState(prevState => ({
      feed: [...prevState.feed, newFeed]
    }));
  };

  render() {
    return (
      <div className="App">
        Feeds counter: {this.state.feed.length}
        {this.state.feed.map(x => (
          <Feed key={x.id} addLike={this.addLike} {...x} />
        ))}
        Add new feed (click enter):
        <FeedInput addFeed={this.addFeed} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
