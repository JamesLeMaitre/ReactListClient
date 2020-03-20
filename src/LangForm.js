import React, { Component } from "react";

class LangForm extends Component {
  state = {
    newLangage: ""
  };

  handleChange = e => {
    this.setState({ newLangage: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const id = new Date().getTime();
    const nom = this.state.newLangage;
    console.log(id);

    this.props.onLangAdd({ id, nom });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.newLangage}
          onChange={this.handleChange}
          type="text"
          placeholder="Ajouter"
        />
        <button>Save</button>
      </form>
    );
  }
}

export default LangForm;
