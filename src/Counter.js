import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counts: 0 };
  }

  add() {
    this.setState({ counts: this.state.counts + 1 });
  }
  extract() {
    this.setState({ counts: this.state.counts - 1 });
  }

  render() {
    return (
      <div className="Counter">
        {this.state.counts}
        <button className="Add" onClick={() => this.add()}>
          Add
        </button>
        <button className="Extract" onClick={() => this.extract()}>
          extract
        </button>
      </div>
    );
  }
}

export default Counter;
