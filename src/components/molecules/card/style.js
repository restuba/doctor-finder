import styled from 'styled-components';
import { colors } from '../../../configs';

const Wrapper = styled.div`
  border: 1px solid ${colors.light2};
  padding: 8px;
  border-radius: 10px;
  cursor: pointer;
  .component_card {
    display: flex;
    flex-direction: row;
    gap: 20px;
    .component_card_image {
      width: 160px;
      min-width: 160px;
      height: 160px;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    .component_card_main {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .component_header {
        display: flex;
        flex-direction: column;
        row-gap: 4px;
      }
      .component_footer {
        text-align: right;
      }
    }
  }
`;

export default Wrapper;
