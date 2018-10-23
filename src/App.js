import React, { Component } from 'react';
import './App.css';
import Textinput from '../src/Components/Controls/TextInput/TextInput'

class App extends Component {
  render() {
    return (
      <div className="App">
        <form className="ReactForm">
          <Textinput inputtabindex="1" inputvalue="Email Address" />
        </form>
      </div>
    );
  }
}

export default App;
