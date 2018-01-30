// INITIALIZE STATE
const initialState = {
  emperorsMessage: '',
  lukesMessage: '',
  vadersAura: '0'
}


// DEFINE ACTIONS
const SET_EMP_MSG = 'SET_EMP_MSG';
const SET_LUKE_MSG = 'SET_LUKE_MSG';
const ALTER_VADER_AURA = 'ALTER_VADER_AURA';

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
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_EMP_MSG:
      return Object.assign({}, state, { emperorsMessage: action.payload });
    default:
      return state;
  }
}




// NOTES FOR AURA CASE
// let aura = +state.vadersAura + +action.payload;
// aura = aura > 255 ? 255 : aura < 0 ? 0 : aura;
// return Object.assign({}, state, { vadersAura: aura.toString() });