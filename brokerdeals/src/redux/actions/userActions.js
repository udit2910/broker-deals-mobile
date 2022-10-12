import {
  USER_LOGIN,
  SET_LOADING,
  LOGIN_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT,
} from './types';
import axios from 'axios';

// export const getLogs = () => {
//   return async dispatch => {
//     setLoading();

//     const res = await fetch('/logs');
//     const data = await res.json();

//     dispatch({
//       type: GET_LOGS,
//       payload: data
//     });
//   };
// };

export const userLogin = body => async dispatch => {
  try {
    dispatch({
      type: SET_LOADING,
      payload: true,
    });
    const resp = await axios.post(
      'https://mysterious-fjord-22450.herokuapp.com/api/v1/users/login',
      body,
    );

    if (Array.isArray(resp.data)) {
      const data = resp.data[0];
      dispatch({
        type: USER_LOGIN,
        payload: data,
      });
    } else {
      const data = resp.data;
      dispatch({
        type: USER_LOGIN,
        payload: data,
      });
    }

    dispatch({
      type: SET_LOADING,
      payload: false,
    });
  } catch (err) {
    const errMsg = err.response.data;
    dispatch({
      type: LOGIN_ERROR,
      payload: errMsg,
    });
    dispatch({
      type: SET_LOADING,
      payload: false,
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
