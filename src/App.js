import React, { Component } from 'react';
import Header from './components/Header';
import Emperor from './components/Emperor';
import Vader from './components/Vader';
import Luke from './components/Luke';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

        <div className="dark side"><h2>{this.props.emperorsMessage}</h2></div>
        <div className="light side"><h2>{this.props.lukesMessage}</h2></div>

        <Emperor />
        <Vader />
        <Luke />

      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);