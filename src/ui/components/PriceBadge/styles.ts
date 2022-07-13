import styled from 'styled-components';
import * as variables from '../../styles/variables';

export const PriceText = styled.span`
  font-size: ${variables.FONT_SMALL};
  font-weight: 700;
  display: flex;
  justify-content: end;
  flex-grow: 1;

  @media screen and (max-width: 530px) {
    background-color: ${variables.BLACK_300};
    color: ${variables.WHITE};
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
`;
