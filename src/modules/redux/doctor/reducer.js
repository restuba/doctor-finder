import { actionType } from './actionType';

const messageType = {
  type: '',
  message: '',
};

const doctorInitialState = {
  loading: false,
  error: messageType,
  success: messageType,
  listSource: [],
  listDoctors: [],
  listHospitals: [],
  listSpecialization: [],
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
    case actionType.UPDATE_LIST_SOURCE:
      return {
        ...state,
        action: action.type,
        listSource: action.payload,
        loading: false,
      };
    case actionType.UPDATE_LIST_DOCTOR:
      return {
        ...state,
        action: action.type,
        listDoctors: action.payload,
      };
    case actionType.UPDATE_LIST_HOSPITAL:
      return {
        ...state,
        listHospitals: action.payload,
      };
    case actionType.UPDATE_LIST_SPECIALIZATION:
      return {
        ...state,
        listSpecialization: action.payload,
      };
    default:
      return state;
  }
};
