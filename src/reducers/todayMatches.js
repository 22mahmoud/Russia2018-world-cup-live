import { RECEIVE_TODAY_MATCHES, REQUEST_TODAY_MATCHES } from '../actions/actionTypes';

const initialState = {
  loading: false,
  matches: [],
};

const todayMatches = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_TODAY_MATCHES:
      return {
        ...state,
        loading: true,
      };
    case RECEIVE_TODAY_MATCHES:
      return {
        ...state,
        loading: false,
        matches: action.payload,
      };
    default:
      return initialState;
  }
};

export default todayMatches;
