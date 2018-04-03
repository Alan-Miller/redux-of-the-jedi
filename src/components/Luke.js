import React from 'react';
import { setLukeMsg } from '../reducer';
import { connect } from 'react-redux';

function Luke(props) {
  // const { setLukeMsg } = props
  
  return (
    <div className="Luke" onClick={() => {
      console.log("Luke action")
      props.changeLukeMsg('There is good in you Father. I can feel it!')
    }}>
      <h2>Luke</h2>
    </div>
  )
}

const outputActions = {
  changeLukeMsg: setLukeMsg
}

export default connect(null, outputActions)(Luke);