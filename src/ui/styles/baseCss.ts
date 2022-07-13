import { css } from 'styled-components';
import * as variables from '../styles/variables';

export const baseButtonStyles = css`
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const bigText = css`
  font-size: 2.8rem;
  font-weight: 700;
  color: ${variables.WHITE};
`;
