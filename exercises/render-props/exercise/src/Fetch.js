import React, { Component } from 'react';

const fakeFetch = url => new Promise(resolve => {
  setTimeout(() => {
    resolve(('Hey'))
  }, 1000);
})

class Fetch extends Component {
  state = {
    loading: true,
    error: null,
    data: null,
  }

  compnentDidMount() {
    fakeFetch(this.props.url)
      .then(data => {
        this.setState({
          data,
          loading: false
        })
      })
      .catch(err => {
        this.setState({
          error: err,
          loading: false
        })
      })

  }

  render() {
    return this.props.children(this.state)
  }
}

export default Fetch;
