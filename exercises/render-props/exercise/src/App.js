import React, { Component } from 'react';
import './App.css';

import Fetch from './Fetch';

// used in animation API and context API
// externalizing internal state, used mostly for libraries
// used in react-vistulized, ex:  renderHeader

class App extends Component {
  render() {
    return <Fetch url="http://test.com">
      {
        ({ loading, error, data }) => {
          if (error !== null) {
            return <p>Error: {error}</p>
          }
          return loading ?
            <p>Loading</p>
            : <p>{data}</p>
        }
      }
    </Fetch>
  }
}

export default App
