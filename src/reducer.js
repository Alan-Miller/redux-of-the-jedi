// INITIALIZE STATE
const initialState = {
  emperorsMessage: '',
  lukesMessage: '',
  vadersAura: '0'
}


// DEFINE ACTIONS
const SET_EMP_MSG = 'SET_EMP_MSG';
// Luke action here
// Vader action here

// MAKE ACTION CREATORS TO SEND ACTIONS TO REDUCER
export function setEmpMsg(msg) {
  return {
    type: SET_EMP_MSG,
    payload: msg
  }
}

// Luke action creator here 
// Vader action creator here

// MAKE REDUCER FUNCTION WHICH WILL MAKES CHANGES TO STATE





// NOTES FOR AURA CASE
// let aura = +state.vadersAura + +action.payload;
// aura = aura > 255 ? 255 : aura < 0 ? 0 : aura;
// return Object.assign({}, state, { vadersAura: aura.toString() });