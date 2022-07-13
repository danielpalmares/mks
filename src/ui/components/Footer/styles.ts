import { flexCenter } from '../../styles/baseCss';
import styled from 'styled-components';
import * as variables from '../../styles/variables';

export const FooterContainer = styled.footer`
  width: 100%;
  height: 4rem;
  background-color: ${variables.FOOTER_BG};
  font-size: ${variables.FONT_SMALL};

  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  ${flexCenter};
`;
