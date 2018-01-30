import React from 'react';
import { connect } from 'react-redux';
import { alterVaderAura, setEmpMsg, setLukeMsg } from '../reducer';

function Emperor(props) {
  return (
    <div className="Emperor" onClick={() => {
      props.alterVaderAura(-20);
      props.setEmpMsg('The Dark Side is awesome. Don\'t be a baby, Vader.');
      props.setLukeMsg('');
    }}>
      <h2>Emperor</h2>
    </div>
  )
}

export default connect(null, { alterVaderAura, setEmpMsg, setLukeMsg })(Emperor);