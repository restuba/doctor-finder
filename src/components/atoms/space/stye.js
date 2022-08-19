import styled from 'styled-components';

const Wrapper = styled.div`
  height: ${(props) => {
    return props.height;
  }};
`;
export default Wrapper;
