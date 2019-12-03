import React from "react";

class Form extends React.Component {
  state = {
    content: ""
  };

  handleChange = e => {
    const value = e.target.value;
    console.log(value);
    this.setState({
      content: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addItems(this.state);
    this.setState({
      content: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className="left purple-text">Add some stuff</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
          ></input>
          <button onSubmit={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
