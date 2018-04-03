// initialState
const initialState = {
  lukeMsg: '',
  emperorMsg: '',
  vaderAura: ''
}

// constants
const SET_LUKE_MSG = 'SET_LUKE_MSG'
const SET_EMPEROR_MSG = 'SET_EMPEROR_MSG'

// action creators
export function setLukeMsg(msg) {
  return {
    type: SET_LUKE_MSG,
    payload: msg
  }
}

export function setEmperorMsg(msg) {
  return {
    type: SET_EMPEROR_MSG,
    payload: msg
  }
}

// reducer function

export default function reducer(state = initialState, action) {
  // if (action.type === SET_LUKE_MSG) {
  //   return Object.assign({}, state, { lukeMsg: action.payload })
  // }
  switch (action.type) {
    case SET_LUKE_MSG:
      return Object.assign({}, state, { lukeMsg: action.payload })
    case SET_EMPEROR_MSG:
      return Object.assign({}, state, { emperorMsg: action.payload })
    default:
      return state;
  }

}