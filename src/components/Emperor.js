import React from 'react';
import { setEmperorMsg } from '../reducer';
import { connect } from 'react-redux';

function Emperor(props) {
  return (
    <div className="Emperor" onClick={() => {
      console.log("Emperor action creator!")
      props.setEmperorMsg("The Dark Side is the best side!")
    }}>
      <h2>Emperor</h2>
    </div>
  )
}

export default connect(null, { setEmperorMsg })(Emperor);