import React, { Component } from 'react';

class App extends Component {
  render() {
    return <p>Your App is running in {process.env.NODE_ENV} mode.</p>;
  }
}

export default App;
