import React from 'react';
import { connect } from 'react-redux';

function Vader(props) {
  const aura = props.vadersAura;

  return (
    <div className="Vader" style={{ borderColor: `rgb(${aura}, ${aura}, ${aura})` }}>
      {/* <h1>Vader</h1> */}
    </div>
  )
}

function mapStateToProps({ vadersAura }) {
  return { vadersAura }
}

export default connect(mapStateToProps)(Vader);