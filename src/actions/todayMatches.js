import Axios from 'axios';

import constants from '../config/constants';
import { REQUEST_TODAY_MATCHES, RECEIVE_TODAY_MATCHES } from './actionTypes';

const requestTodayMatches = () => ({
  type: REQUEST_TODAY_MATCHES,
});

const receiveTodayMatches = json => ({
  type: RECEIVE_TODAY_MATCHES,
  payload: json.data,
});

export const getTodayMatches = () => async (dispatch) => {
  dispatch(requestTodayMatches());
  const response = await Axios.get(`${constants.API_BASE_URL}/matches/today`);
  dispatch(receiveTodayMatches(response));
};
