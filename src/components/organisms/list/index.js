import React from 'react';
import Wrapper from './style';

const Index = (props) => {
  const { dataSource, renderItem } = props;
  return (
    <Wrapper>
      <div className="component_list">{dataSource?.map(renderItem)}</div>
    </Wrapper>
  );
};

export default Index;
