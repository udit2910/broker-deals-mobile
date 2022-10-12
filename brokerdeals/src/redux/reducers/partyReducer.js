import {
  GET_PARTY,
  SET_LOADING,
  PARTY_ERROR,
  ADD_PARTY,
  DELETE_LOG,
  UPDATE_LOG,
  SEARCH_LOGS,
  SET_CURRENT,
  CLEAR_CURRENT,
} from '../actions/types';

const initialState = {
  partyData: null,
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PARTY:
      return {
        ...state,
        partyData: action.payload,
        loading: false,
        error: null,
      };
    case ADD_PARTY:
      return {
        ...state,
        partyData: action.payload,
        loading: false,
      };
    // case DELETE_LOG:
    //   return {
    //     ...state,
    //     logs: state.logs.filter((log) => log.id !== action.payload),
    //     loading: false,
    //   };
    // case UPDATE_LOG:
    //   return {
    //     ...state,
    //     logs: state.logs.map((log) =>
    //       log.id === action.payload.id ? action.payload : log
    //     ),
    //   };
    // case SEARCH_LOGS:
    //   return {
    //     ...state,
    //     logs: action.payload,
    //   };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    // case CLEAR_CURRENT:
    //   return {
    //     ...state,
    //     current: null,
    //   };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case PARTY_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
