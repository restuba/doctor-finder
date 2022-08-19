import React from 'react';
import Wrapper from './style';

const Index = (props) => {
  const { children, background } = props;
  return (
    <Wrapper background={background}>
      <div className="component_content_template">{children}</div>
    </Wrapper>
  );
};

export default Index;
