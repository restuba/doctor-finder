import { actionType } from './actionType';
import { BaseService } from '../../../services';
import { getArrayUniqueByKey } from '../../../utils';

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

const updateHospitals = (payload) => {
  return {
    type: actionType.UPDATE_LIST_HOSPITAL,
    payload,
  };
};

const updateSpecializations = (payload) => {
  return {
    type: actionType.UPDATE_LIST_SPECIALIZATION,
    payload,
  };
};

export const getListDoctor = () => {
  return (dispatch) => {
    dispatch(loadingFetch());
    return BaseService.get()
      .then(({ data }) => {
        dispatch(updateFetch(data));
        const hospitals = data?.map((item) => {
          const itemData = item?.hospital[0] || {};
          return { value: itemData?.id, label: itemData?.name };
        });
        const specializations = data?.map((item) => {
          const itemData = item?.specialization;
          return { value: itemData?.id, label: itemData?.name };
        });
        dispatch(
          updateSpecializations(getArrayUniqueByKey(specializations, 'value'))
        );
        dispatch(updateHospitals(getArrayUniqueByKey(hospitals, 'value')));
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
