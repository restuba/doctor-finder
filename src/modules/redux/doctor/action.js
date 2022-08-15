import { actionType } from './actionType';
import { BaseService } from '../../../services';

const loadingFetch = () => {
  return {
    type: actionType.LOADING_FETCH,
  };
};

const successFetch = (payload) => {
  return {
    type: actionType.SUCCESS_FETCH,
    payload,
  };
};

const errorFetch = (payload) => {
  return {
    type: actionType.ERROR_FETCH,
    payload,
  };
};

const updateFetch = (payload) => {
  return {
    type: actionType.UPDATE_LIST_DOCTOR,
    payload,
  };
};

// eslint-disable-next-line import/prefer-default-export
export const getListDoctor = () => {
  return (dispatch) => {
    dispatch(loadingFetch());
    return BaseService.get()
      .then((response) => {
        dispatch(updateFetch(response.data));
        dispatch(
          successFetch({
            message: 'success get list doctor',
            type: actionType.GET_LIST_DOCTOR,
          })
        );
      })
      .catch(() => {
        dispatch(
          errorFetch({
            message: 'error get list doctor',
            type: actionType.GET_LIST_DOCTOR,
          })
        );
      });
  };
};
