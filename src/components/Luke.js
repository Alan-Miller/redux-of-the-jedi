import React from 'react';
import { connect } from 'react-redux';
import { alterVaderAura, setEmpMsg, setLukeMsg } from '../reducer';

function Luke(props) {
  return (
    <div className="Luke" onClick={() => {
      props.alterVaderAura(20);
      props.setEmpMsg('');
      props.setLukeMsg('Dad, don\'t be mean! Be nice instead!');
    }}>
      <h2>Luke</h2>
    </div>
  )
}

export default connect(null, { alterVaderAura, setEmpMsg, setLukeMsg })(Luke);