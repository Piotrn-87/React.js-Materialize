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
          <input
            placeholder="Add some stuff"
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
          ></input>
          <button
            className="btn waves-effect waves-light"
            onSubmit={this.handleSubmit}
          >
            <i className="material-icons right"> send</i>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
