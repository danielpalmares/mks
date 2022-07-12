import styled from 'styled-components';
import * as variables from '../../styles/variables';

export const FooterContainer = styled.footer`
  width: 100%;
  height: 4rem;
  background-color: ${variables.FOOTER_BG};
  font-size: 1.2rem;
  font-weight: 400;

  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
