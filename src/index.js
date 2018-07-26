import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

class Header extends Component {
    render () {
      return (
        <div>
          <Bad/>
          <h1>React 小书</h1>
        </div>
      )
    }
}

class Bad extends Component {
  render() {
    return (
      1
    )
  }
}



ReactDOM.render(
    <Header />, 
    document.getElementById('root')
);
