import React from 'react';
import { setEmpMsg } from '../reducer';
import { connect } from 'react-redux';

function Emperor(props) {
  return (
    <div className="Emperor" onClick={() => props.setEmpMsg('Vader, don\'t be a baby!')}>
      <h2>Emperor</h2>
    </div>
  )
}

const mapDispatchToProps = { setEmpMsg: setEmpMsg }

export default connect(null, mapDispatchToProps)(Emperor);