import React from 'react';
import { Spin } from 'antd';
import Wrapper from './style';
import { EmptyResult } from '../../molecules';

const Index = (props) => {
  const { dataSource = [], renderItem, loading = false } = props;
  return (
    <Spin spinning={loading}>
      <Wrapper>
        {(dataSource?.length > 0 || loading) && (
          <div className="component_list">{dataSource?.map(renderItem)}</div>
        )}
        {dataSource?.length === 0 && !loading && (
          <EmptyResult
            title="No item found"
            desc="We are sorry there are no item found."
          />
        )}
      </Wrapper>
    </Spin>
  );
};

export default Index;
