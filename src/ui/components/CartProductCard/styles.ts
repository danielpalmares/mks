import styled from 'styled-components';
import { baseButtonStyles, flexCenter } from '../../styles/baseCss';
import * as variables from '../../styles/variables';

export const CardContainer = styled.div`
  width: auto;
  height: 10rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: ${variables.WHITE};
  border-radius: 1rem;
  padding: 2rem;
  position: relative;

  @media screen and (max-width: 530px) {
    flex-direction: column;
    height: auto;
  }
`;

export const ImageNameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 9rem;
    height: 9rem;
  }

  span {
    width: 10rem;
    font-size: 1.3rem;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    width: 100%;

    span {
      width: auto;
    }
  }
`;

export const QuantityPriceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  gap: 1rem;
`;

export const QuantityContainer = styled.div`
  width: 7rem;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${variables.WHITE};
  border: 1px solid ${variables.WHITE_LIGHT};
  border-radius: 0.5rem;

  overflow: hidden;
  white-space: nowrap;

  span {
    ${flexCenter};
    flex-grow: 1;
    font-size: ${variables.FONT_SMALL};
    width: 2rem;

    border-right: 1px solid ${variables.WHITE_LIGHT};
    border-left: 1px solid ${variables.WHITE_LIGHT};
    padding: 0 0.5rem;
    height: 100%;
  }

  button {
    ${baseButtonStyles};
    flex-grow: 1;
    font-size: ${variables.FONT_SMALL};
    width: 1rem;
    padding: 0 0.5rem;
    height: 100%;
  }
`;
