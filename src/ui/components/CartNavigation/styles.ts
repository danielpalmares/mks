import { baseButtonStyles, bigText } from '../../styles/baseCss';
import styled from 'styled-components';
import * as variables from '../../styles/variables';

interface NavigationProps {
  isVisible: boolean;
}

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  top: 0;

  width: 100vw;
  height: 100vh;

  background-color: ${variables.BACKDROP_BG};
  backdrop-filter: blur(${variables.BLUR});
  z-index: ${variables.BACKDROP_INDEX};
`;

export const Navigation = styled.nav<NavigationProps>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 50rem;

  background-color: ${variables.BLUE_PRIMARY};
  z-index: ${variables.NAVIGATION_INDEX};

  transition: transform 0.2s;
  transform: ${props =>
    props.isVisible ? 'translateX(0%)' : 'translateX(100%)'};

  @media screen and (max-width: 530px) {
    width: 45rem;
  }

  @media screen and (max-width: 500px) {
    width: 30rem;
  }
`;

export const NavigationHeading = styled.h3`
  ${bigText}
  position: absolute;
  top: 2rem;
  left: 4rem;
`;

export const CloseButton = styled.button`
  ${baseButtonStyles};

  position: absolute;
  right: 2rem;
  top: 2rem;

  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  padding: 1rem;

  color: ${variables.WHITE};
  background-color: ${variables.BLACK};
`;

export const FinishButton = styled.button`
  ${baseButtonStyles};
  ${bigText};

  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 10rem;
  background-color: ${variables.BLACK};
`;
