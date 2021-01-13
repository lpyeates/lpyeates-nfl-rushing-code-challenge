import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './NFL_logo.svg';
import './App.css';
//import data from './rushing.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {rushers: []};
    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    this.getKeys = this.getKeys.bind(this);
  }

  callAPI() {
    fetch("http://localhost:9000/")
        .then(res => res.text())
        .then(res => this.setState({ data: res }));
  }

  componentWillMount() {
    console.log('Well fuck me');
    const that = this;
    fetch("http://localhost:9000/")
        .then(res => res.json())
        .then(data => console.log(this))
        .then(data => this.setState({ rushers: data }))
        .then(data => console.log(this))
  }

  getKeys = function(){
    console.log(this.state);
    return Object.keys(this.state.rushers[0]);
  }
 
  getHeader = function(){
    var keys = this.getKeys();
    return keys.map((key, index) => {
      return <th key={key}>{key.toUpperCase()}</th>
    });
  }
 
  getRowsData = function(){
    var items = this.state.rushers;
    var keys = this.getKeys();
    return items.map((row, index) => {
      return <tr key={index}><RenderRow key={index} rushers={row} keys={keys}/></tr>
    });
  }

  render() {
    return (   
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo'/>
          <h1 className='App-title'>NFL Rushing Leaders</h1>
        </header>
        <table>
          <thead>
            <tr>{this.getHeader()}</tr>
          </thead>
          <tbody>
            {this.getRowsData()}
          </tbody>
        </table>
        <p className="App-intro">{this.state.apiResponse}</p>
      </div>
    );
  }
}

const RenderRow = (state) => {
  return state.keys.map((key, index) => {
    return <td key={state.rushers[key]}>{state.rushers[key]}</td>
  });
}

export default App;
