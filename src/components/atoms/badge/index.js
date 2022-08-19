import React from 'react';
import Wrapper from './style';

const Index = (props) => {
  const { children, className, inactive } = props;

  return (
    <Wrapper
      className={`${className ?? ''} ${
        inactive ? 'inactive' : ''
      } font-paragraph`}
    >
      {children}
    </Wrapper>
  );
};

export default Index;
