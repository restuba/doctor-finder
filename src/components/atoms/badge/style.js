import styled from 'styled-components';
import { colors } from '../../../configs';

const Wrapper = styled.div`
  padding: 8px 16px;
  background-color: ${colors.primary};
  border-radius: 100px;
  display: inline-block;

  &.inactive {
    background-color: ${colors.dark4};
    color: ${colors.dark0};
  }

  &.transparent {
    background-color: transparent;
  }
`;

export default Wrapper;
