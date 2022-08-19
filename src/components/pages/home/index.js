import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { doctorRootSelector, getListDoctor } from '../../../modules';
import { ContentTemplate } from '../../templates';
import { Banner, List, SearchFilter } from '../../organisms';
import { Card } from '../../molecules';
import { Space } from '../../atoms';

const Index = () => {
  const [filterData, setFilterData] = useState({});
  const { listDoctors, listHospitals, listSpecialization, loading } =
    useSelector(doctorRootSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListDoctor(filterData));
  }, [dispatch, filterData]);

  const onChangeFilter = (values, attribute) => {
    setFilterData((prevState) => {
      return { ...prevState, [attribute]: values };
    });
  };

  return (
    <>
      <Helmet>
        <title>Doctor Finder - Home</title>
      </Helmet>
      <ContentTemplate>
        <Banner />
      </ContentTemplate>
      <ContentTemplate background="linear-gradient(180deg, #F5F8FB 0%, #E8EFF2 35.8%)">
        <SearchFilter
          inputProps={{ placeholder: 'Keyword', key: 'keyword' }}
          selectProps={{
            placeholder: 'Hospital',
            key: 'hospital',
            options: listHospitals,
          }}
          additionalSelectProps={{
            placeholder: 'Specialization',
            key: 'specialization',
            options: listSpecialization,
          }}
          onChangeFilter={onChangeFilter}
        />
        <List
          dataSource={listDoctors}
          loading={loading}
          renderItem={(record) => {
            const hospitals = record?.hospital || [];
            const hospital = hospitals?.[0] || {};
            const hospitalName = hospital?.name;
            const specializationName = record?.specialization?.name;
            return (
              <Card
                key={record?.doctor_id}
                title={record?.name}
                subtitle={`${hospitalName} - ${specializationName}`}
                image={record?.photo?.formats?.thumbnail}
                footer={record?.price?.formatted}
              />
            );
          }}
        />
        <Space />
      </ContentTemplate>
    </>
  );
};

export default Index;
