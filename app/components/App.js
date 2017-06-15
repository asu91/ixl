import React, { Component } from "react";
import Display from "./Display";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      value: "",
      word: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    this.setState({ word: this.state.value });
    e.preventDefault();
  }

  render() {
    return (
      <div>

        <p>Configuration</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            KEYWORD:<br/>
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Update"/>
        </form>
        {this.state.word && <Display word={this.state.word} />}
      </div>
    );
  }
}
