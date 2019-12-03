import React from "react";
import Form from "./Form";

class App extends React.Component {
  state = {
    items: [
      {
        id: 1,
        content: "Training React.js"
      }
    ]
  };

  deleteItems = items => {
    const deleteItems = this.state.items.filter(item => {
      return item.id !== items;
    });
  };

  addItems = item => {
    item.id = Math.random();
    let newListItem = [...this.state.items, item];
    this.setState({
      items: newListItem
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="center blue-text">Lets get ready to rumble ... !!! </h1>
        <Form />
      </div>
    );
  }
}

export default App;
