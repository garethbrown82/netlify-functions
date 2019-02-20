import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    name: '',
    message: '',
  }

  componentDidMount = () => {
    fetch('http://localhost:9000/helloworld')
      .then((res) => res.json())
      .then((json) => this.setState({
        name: json.name,
        message: json.message,
      }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {`${this.state.name} says ${this.state.message}`}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
