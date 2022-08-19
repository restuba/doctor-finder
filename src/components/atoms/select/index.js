import { Select as SelectLib } from 'antd';
import styled from 'styled-components';

const Select = styled(SelectLib)`
  /* overflow: hidden; */
  .ant-select-selector {
    border-radius: 10px !important;
    height: 44px !important;
    overflow: hidden;
    .ant-select-selection-search-input {
      height: 44px !important;
    }
    .ant-select-selection-placeholder,
    .ant-select-selection-item {
      display: flex;
      align-items: center;
    }
  }
`;

export default Select;
