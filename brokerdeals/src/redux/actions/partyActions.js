import {
  SET_LOADING,
  GET_PARTY,
  SET_CURRENT,
  CLEAR_CURRENT,
  PARTY_ERROR,
  ADD_PARTY,
} from './types';
import axios from 'axios';

export const getParties = userData => async dispatch => {
  try {
    setLoading();

    let url = `https://mysterious-fjord-22450.herokuapp.com/api/v1/parties/get/${userData.user_id}`;
    const resp = await axios.get(url);
    const data = resp.data;
    dispatch({
      type: GET_PARTY,
      payload: data,
    });
  } catch (err) {
    const errMsg = err.response.data;
    dispatch({
      type: PARTY_ERROR,
      payload: errMsg,
    });
  }
};

export const addParty = body => async dispatch => {
  try {
    setLoading();

    const resp = await axios.put(
      'https://mysterious-fjord-22450.herokuapp.com/api/v1/parties/add',
      body,
    );

    console.log('rrrrrrr', resp.data);
    const data = resp.data[0];
    dispatch({
      type: ADD_PARTY,
      payload: data,
    });
  } catch (err) {
    const errMsg = err.response.data;
    dispatch({
      type: PARTY_ERROR,
      payload: errMsg,
    });
  }
};

// export const deleteLogs = (id) => async (dispatch) => {
//   try {
//     setLoading();

//     await fetch(`/logs/${id}`, {
//       method: 'DELETE',
//     });

//     dispatch({
//       type: DELETE_LOG,
//       payload: id,
//     });
//   } catch (err) {
//     dispatch({
//       type: LOGS_ERROR,
//       payload: err.response.statusText,
//     });
//   }
// };

// export const updateLog = (log) => async (dispatch) => {
//   try {
//     setLoading();

//     const res = await fetch(`/logs/${log.id}`, {
//       method: 'PUT',
//       body: JSON.stringify(log),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     const data = await res.json();
//     dispatch({
//       type: UPDATE_LOG,
//       payload: data,
//     });
//   } catch (err) {
//     dispatch({
//       type: LOGS_ERROR,
//       payload: err.response.statusText,
//     });
//   }
// };

// export const searchLogs = (text) => async (dispatch) => {
//   try {
//     setLoading();

//     const res = await fetch(`/logs?q=${text}`);
//     const data = await res.json();

//     dispatch({
//       type: SEARCH_LOGS,
//       payload: data,
//     });
//   } catch (err) {
//     dispatch({
//       type: LOGS_ERROR,
//       payload: err.response.statusText,
//     });
//   }
// };

export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
