import { baseButtonStyles, bigText } from '../../styles/baseCss';
import styled, { css } from 'styled-components';
import * as variables from '../../styles/variables';

interface NavigationProps {
  isVisible: boolean;
}

export const Backdrop = styled.div<NavigationProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;

  width: 100vw;
  height: 100vh;

  background-color: ${variables.BACKDROP_BG};
  backdrop-filter: blur(${variables.BLUR});
  z-index: ${variables.BACKDROP_INDEX};

  ${props =>
    !props.isVisible &&
    css`
      width: 0;
    `}
`;

export const Navigation = styled.nav<NavigationProps>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;

  width: 50rem;
  min-height: 100vh;

  background-color: ${variables.BLUE_PRIMARY};
  z-index: ${variables.NAVIGATION_INDEX};
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;

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

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 2rem;
  margin: 4rem;
  /* height: 60vh; */

  @media screen and (max-width: 500px) {
    margin: 2rem;
  }
`;

export const NavigationHeading = styled.h3`
  ${bigText}
  margin: 2rem 4rem;

  @media screen and (max-width: 530px) {
    font-size: 2.2rem;
  }

  @media screen and (max-width: 500px) {
    margin: 2rem;
  }
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

  /* position: absolute; */
  /* bottom: 0;
  left: 0;
  right: 0; */

  width: 100%;
  min-height: 10rem;
  background-color: ${variables.BLACK};

  @media screen and (max-width: 530px) {
    font-size: 2.2rem;

    min-height: 6rem;
  }
`;
