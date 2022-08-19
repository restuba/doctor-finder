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

const updateHospitals = (data) => {
  const hospitals = data?.map((item) => {
    const itemData = item?.hospital[0] || {};
    return { value: itemData?.id, label: itemData?.name };
  });
  const payload = getArrayUniqueByKey(hospitals, 'value');
  return {
    type: actionType.UPDATE_LIST_HOSPITAL,
    payload,
  };
};

const updateSpecializations = (data) => {
  const specializations = data?.map((item) => {
    const itemData = item?.specialization;
    return { value: itemData?.id, label: itemData?.name };
  });
  const payload = getArrayUniqueByKey(specializations, 'value');
  return {
    type: actionType.UPDATE_LIST_SPECIALIZATION,
    payload,
  };
};

const updateDoctors = (data, filter) => {
  const {
    keyword = '',
    hospital = [],
    specialization: specialize = [],
  } = filter;
  const isEmptyHospital = hospital?.length === 0;
  const isEmptySpecialize = specialize?.length === 0;
  const payload = data?.filter((item) => {
    const name = item?.name || '';
    const hospitalID = item?.hospital?.[0]?.id;
    const specializeID = item?.specialization?.id;
    const byName = name.toLowerCase().includes(keyword.toLowerCase());
    const byHospitalID = isEmptyHospital ? true : hospital.includes(hospitalID);
    const bySpecializeID = isEmptySpecialize
      ? true
      : specialize.includes(specializeID);
    return byName && byHospitalID && bySpecializeID;
  });
  return {
    type: actionType.UPDATE_LIST_DOCTOR,
    payload,
  };
};

const updateSource = (payload) => {
  return {
    type: actionType.UPDATE_LIST_SOURCE,
    payload,
  };
};

export const getListDoctor = (filterData) => {
  return (dispatch) => {
    dispatch(loadingFetch());
    return BaseService.get()
      .then(({ data }) => {
        dispatch(updateDoctors(data, filterData));
        dispatch(updateSpecializations(data));
        dispatch(updateHospitals(data));
        dispatch(updateSource(data));
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
