import React, { Component } from "react";
import Display from "./Display";
import SourceTextInput from "./source-text-input";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      value: "",
      keyword: null,
      number: 0,
      input: "",
      cipher: "",
      isLowerCaseLetter: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
    this.isLowerCaseLetter = this.isLowerCaseLetter.bind(this);
  }

  handleChange(e) {
    const word = e.target.value;
    if (this.state.isLowerCaseLetter) {
      this.setState({ value: word, isLowerCaseLetter: false });
    }
  }

  handleSubmit(e) {
    this.setState({ keyword: this.state.value, number: 0 });
    e.preventDefault();
  }

  onClick(letter, transformedLetter) {
    let reducedNumber = this.state.number + 1;
    if(this.state.keyword && reducedNumber >= this.state.keyword.length) {
      reducedNumber -= this.state.keyword.length;
    }
    this.setState({
      number: reducedNumber,
      input: this.state.input + letter,
      cipher: this.state.cipher + transformedLetter
    });
  }

  isLowerCaseLetter(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode === 8) {
      this.setState({ isLowerCaseLetter: true })
    } else if (charCode < 65 || charCode > 90) {
      this.setState({ isLowerCaseLetter: false })
    } else {
      this.setState({ isLowerCaseLetter: true })
    }
}

  render() {
    const { value, keyword, number } = this.state;
    return (
      <div>
        <h2>Configuration</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            KEYWORD<br/>
            <input type="text" value={value} onChange={this.handleChange} onKeyDown={this.isLowerCaseLetter}/>
          </label>
          <input type="submit" value="Update" style={{backgroundColor: "white"}}/>
        </form>
        {keyword && <Display keyword={keyword} number={number}/>}
        <h2>Encoding</h2>
        {keyword &&
          <SourceTextInput
            keyword={keyword}
            number={number}
            onClick={this.onClick.bind(this)}
          />
        }
        <form onSubmit={() => this.setState({ input: "", cipher: "", number: 0 })}>
          <input type="text" value={this.state.input} readOnly/>
          <input type="submit" value="Clear" style={{ backgroundColor: "white" }}/>
        </form>
        <h3>Cipher</h3>
        <input type="text" value={this.state.cipher} readOnly/>
      </div>
    );
  }
}
