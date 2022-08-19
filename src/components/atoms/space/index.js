import React from 'react';
import Wrapper from './stye';

const index = ({ height = 64 }) => {
  return <Wrapper height={`${height}px`} />;
};

export default index;
