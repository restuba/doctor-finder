import styled from 'styled-components';
import { breakpoints, colors } from '../../../configs';

const Wrapper = styled.div`
  background-color: ${colors.white};
  padding: 24px 28px;
  box-shadow: 0px 4px 22px rgb(0 0 0 / 8%);
  border-radius: 10px;
  margin-top: 32px;
  min-height: 540px;
  .component_list {
    display: grid;
    grid-template-columns: repeat(1, auto);
    gap: 20px;
  }

  @media screen and (min-width: ${breakpoints.md}) {
    .component_list {
      grid-template-columns: repeat(2, auto);
    }
  }
`;

export default Wrapper;
