import { actionType } from './actionType';

const messageType = {
  type: '',
  message: '',
};

const doctorInitialState = {
  loading: false,
  error: messageType,
  success: messageType,
  list: [],
};

const initialState = {
  ...doctorInitialState,
  action: '',
};

// eslint-disable-next-line import/prefer-default-export, default-param-last
export const doctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOADING_FETCH:
      return {
        ...state,
        action: action.type,
        loading: true,
      };
    case actionType.ERROR_FETCH:
      return {
        ...state,
        action: action.type,
        error: action.payload,
        loading: false,
      };
    case actionType.RESET_LIST_DOCTOR:
      return {
        ...state,
        action: '',
        error: messageType,
        success: messageType,
        loading: false,
      };
    case actionType.SUCCESS_FETCH:
      return {
        ...state,
        action: action.type,
        success: action.payload,
        loading: false,
      };
    case actionType.UPDATE_LIST_DOCTOR:
      return {
        ...state,
        action: action.type,
        list: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
