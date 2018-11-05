import React, { Component } from 'react';
import File1 from './File1';
import File2 from './File2';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <p>The react app </p>
        <File1/>
        <File2>
      </div>
      </Router>
    );
  }
}

export default App;
