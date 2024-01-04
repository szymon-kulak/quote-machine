import './App.css';
import logo from './logo.svg';
import React from 'react';


class Calculator extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      num1: "",
      num2: "",
      calcType: "",
      results: "The results will appear here..."
    }
    this.handleNum1 = this.handleNum1.bind(this);
    this.handleNum2 = this.handleNum2.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleNum1(event) {
    this.setState({num1: event.target.value});
  } 
  
  handleNum2(event) {
    this.setState({num2: event.target.value});
  }  

  handleSelect(event) {
    this.setState({calcType: event.target.value});
  }

  calcResults(int1,int2,type) {
    if (!this.state.calcType && !this.state.num1 && !this.state.num2) {
      return "Your result will appear here.";
    } else if (!this.state.num1 || !this.state.num2) {
      return "Please provide both numbers";
    } else {
      switch(this.state.calcType) {
        case "add":
          return this.state.num1 + " + " + this.state.num2 + " = " + (parseFloat(this.state.num1) + parseFloat(this.state.num2));
        case "subtract":
          return this.state.num1 + " - " + this.state.num2 + " = " + (parseFloat(this.state.num1) - parseFloat(this.state.num2));
        case "multiply":
          return this.state.num1 + " * " + this.state.num2 + " = " + (parseFloat(this.state.num1) * parseFloat(this.state.num2));
        case "divide":
          return this.state.num1 + " / " + this.state.num2 + " = " + (parseFloat(this.state.num1) / parseFloat(this.state.num2)).toFixed(3);
        case "modulo":
          return this.state.num1 + " % " + this.state.num2 + " = " + (parseFloat(this.state.num1) % parseFloat(this.state.num2));
        default:
          return "Please choose calculation type";
      }
    }
  }
  
  render() {
    return (
      <main>
          <div className="calc">
              <h1 id = "title">A Sexy React Calculator</h1>
              <div id = "results">{this.calcResults(this.state.num1, this.state.num2, this.state.calcType)}</div>
              <form id = "userInput">
                  <input type="number" id="firstNum" value={this.state.num1} onChange={this.handleNum1}></input>
                  <select id="calcType" name="calcType" value={this.state.calcType} onChange={this.handleSelect}>
                      <option value="" selected disabled hidden></option>
                      <option value="add">+</option>
                      <option value="subtract">-</option>
                      <option value="multiply">*</option>
                      <option value="divide">/</option>
                      <option value="modulo">%</option>
                  </select>
                  <input type="number" id="secondNum" value={this.state.num2} onChange={this.handleNum2}></input>
              </form>
          </div>
      </main> 
    );
  }
  
}

function ReactLogo() {
  return (
    <img src={logo} alt="React.js Logo" className='react-logo'/>
  );
}

function App() {
  return (
    <div id="app">
      <ReactLogo />
      <Calculator />  
    </div>
  );
}

export default App;