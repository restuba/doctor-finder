import styled from 'styled-components';
import { breakpoints } from '../../../configs';

const Wrapper = styled.div`
  min-height: ${({ responsive }) => {
    return `${responsive.sm.height}px`;
  }};

  @media screen and (min-width: ${breakpoints.md}) {
    min-height: ${({ responsive }) => {
      return `${responsive.md.height}px`;
    }};
  }
  display: flex;
  align-items: center;
  justify-content: center;
  .container_empty_results {
    max-width: 514px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

export default Wrapper;
