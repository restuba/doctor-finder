import styled from 'styled-components';

const Wrapper = styled.div`
  background: ${({ background }) => {
    if (background) return background;
    return 'white';
  }};
  .component_content_template {
    max-width: 1140px;
    margin: auto;
    padding: 8px 32px;
  }
`;

export default Wrapper;
