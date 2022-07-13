import { baseButtonStyles } from '../../styles/baseCss';
import styled, { css } from 'styled-components';
import * as variables from '../../styles/variables';

interface ButtonProps {
  width: number;
  height: number;
  padding: number;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

export const Button = styled.button<ButtonProps>`
  ${baseButtonStyles};
  position: absolute;

  ${props =>
    props.top &&
    css`
      top: ${props.top};
    `}

  ${props =>
    props.bottom &&
    css`
      bottom: ${props.bottom};
    `}

    ${props =>
    props.left &&
    css`
      left: ${props.left};
    `}
    
    ${props =>
    props.right &&
    css`
      right: ${props.right};
    `}

  
  width: ${props => `${props.width}rem`};
  height: ${props => `${props.height}rem`};
  padding: ${props => `${props.padding}rem`};
  color: ${variables.WHITE};
  background-color: ${variables.BLACK};
  border-radius: 50%;
`;
