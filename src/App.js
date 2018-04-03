import React, { Component } from 'react';
import Header from './components/Header'
import Luke from './components/Luke'
import Emperor from './components/Emperor'
import Vader from './components/Vader'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Luke />
        <Emperor />
        <Vader />
        <div className="dark side"><h2>{this.props.whatEmperorSaid}</h2></div>
        <div className="light side"><h2>{this.props.whatLukeSaid}</h2></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("state", state)
  console.log("lukeMsg", state.lukeMsg)
  return {
    whatLukeSaid: state.lukeMsg,
    whatEmperorSaid: state.emperorMsg
  }
}

// export default App;
export default connect(mapStateToProps)(App)