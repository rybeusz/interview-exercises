import React from "react";
import "./styles.css";

export class FeedInput extends React.Component {
  textAreaRef = React.createRef();

  onKeyDown = e => {
    let value = this.textAreaRef.current.value.trim();

    if (e.keyCode === 13 && e.shiftKey === false && value.length) {
      e.preventDefault();
      this.textAreaRef.current.value = "";
      this.props.addFeed(value, Date.now());
    }
  };

  render() {
    return (
      <textarea
        className="feedInput"
        ref={this.textAreaRef}
        onKeyDown={this.onKeyDown}
      />
    );
  }
}
