import React from "react";

class Todolist extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.state = { items: [], text: "" };
  }

  deleteItem(e) {
    const index = this.state.items.indexOf(e);
    let deleteItem = this.state.items;
    deleteItem.splice(index, 1);
    if (index > -1) {
      this.setState({ items: deleteItem });
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    let newItem = {
      text: this.state.text,
      id: Date.now(),
    };
    this.setState((state) => ({
      items: state.items.concat(newItem),
      text: "",
    }));
  }

  render() {
    return (
      <div className="Todolist">
        <form onSubmit={this.handleSubmit}>
          <label>New Task:</label>
          <input onChange={this.handleChange} value={this.state.text} />
          <button>Add</button>
        </form>
        <TodoListItems items={this.state.items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

class TodoListItems extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((element) => (
          <li key={element.id}>
            {element.text}
            <button onClick={() => this.props.deleteItem(element)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default Todolist;
