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

const mapDispatchToProps = dispatch => {
  return {
    alterVaderAura: (influence) => dispatch({
      type: 'ALTER_VADER_AURA',
      payload: influence
    }),
    setEmpMsg: (msg) => dispatch({
      type: 'SET_EMP_MSG',
      payload: msg
    }),
    setLukeMsg: (msg) => dispatch({
      type: 'SET_LUKE_MSG',
      payload: msg
    })
  }
}

export default connect(null, mapDispatchToProps)(Luke);