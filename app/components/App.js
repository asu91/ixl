import React, { Component } from "react";
import Display from "./Display";
import SourceTextInput from "./source-text-input";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      value: "",
      word: null,
      number: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    this.setState({ word: this.state.value });
    e.preventDefault();
  }

  onClick(e) {
    this.setState({ number: this.state.number + 1 });
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
        <input type="button" onClick={this.onClick}/>
        {this.state.word && <Display word={this.state.word} number={this.state.number}/>}
        <p>Encoding</p>
        <SourceTextInput />
      </div>
    );
  }
}
