import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      { name : "Rashmi", Age: 20},
      { name : "Sumina", Age: 21},
      { name : "Sudrikshya", Age: 19}
    ],
    otherState :"other states are untouched"
  }

switchNameHandler = (newName) => {
  //console.log("clicked");
  // we cant use thithis.state.persons[0].name = "Rashmina Shrestha";
  this.setState({
    persons : [
      { name : newName, Age: 20},
      { name : "Sumina", Age: 21},
      { name : "Sudrikshya", Age: 20}
    ]
  });
}
nameChaneHandler = (event) => {
  this.setState({
    persons : [
      { name : "Rashmi", Age: 20},
      { name : event.target.value, Age: 21},
      { name : event.target.value, Age: 20}
    ]
  });
}

  render() {
    return (
      <div className="App">
        <h1>Hi, I am React App</h1>
        <p> Its working!!</p>
        <button onClick = {() => this.switchNameHandler("Rashmina Shrestha")}> Click Me!!</button>
        <Person 
        name = {this.state.persons[0].name} 
        Age = {this.state.persons[0].Age}/>
        <Person 
        name = {this.state.persons[1].name}
         Age = {this.state.persons[1].Age}
         changed = {this.nameChaneHandler}> 
         I love Programming.</Person>
        <Person 
        name = {this.state.persons[2].name} 
        Age = {this.state.persons[2].Age}
        changed = {this.nameChaneHandler}/>
      </div>
    );
    //return React.createElement('div', null, 'h1', 'Hi, I\'m React App');
  }
}

export default App;
