import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { doctorRootSelector, getListDoctor } from '../../../modules';

const Index = () => {
  // eslint-disable-next-line no-unused-vars
  const { list, loading, error } = useSelector(doctorRootSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListDoctor());
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <title>Doctor Finder - Home</title>
      </Helmet>
      Hallo from Home
    </div>
  );
};

export default Index;
