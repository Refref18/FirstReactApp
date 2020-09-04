import React from "react";

class Flipper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      head: 0,
      tail: 0,
      total: 0,
    };
  }

  handleClick() {
    let headOrTail = Math.floor(Math.random() * 2);
    headOrTail === 0
      ? this.setState({ head: this.state.head + 1 })
      : this.setState({ tail: this.state.tail + 1 });
    this.setState({ total: this.state.total + 1 });
  }

  render() {
    let status =
      "Out of " +
      this.state.total +
      " flip, there have been " +
      this.state.head +
      " head and " +
      this.state.tail +
      " tail.";
    return (
      <div className="Flipper">
        <h1>Let's flip a coin</h1>
        <button onClick={() => this.handleClick()}>Flip Me!</button>
        <div>{status}</div>
      </div>
    );
  }
}

export default Flipper;
