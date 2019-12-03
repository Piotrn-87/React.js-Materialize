import React from "react";
import Form from "./Form";
import ItemsList from "./ItemsList";

class App extends React.Component {
  state = {
    items: [{ id: 1, content: "Training React.js" }]
  };

  deleteItems = items => {
    const deleteItems = this.state.items.filter(item => {
      return item.id !== items;
    });
    this.setState({
      items: deleteItems
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
        <ItemsList stuff={this.state.items} deleteItems={this.deleteItems} />
        <Form addItems={this.addItems} />
      </div>
    );
  }
}

export default App;
