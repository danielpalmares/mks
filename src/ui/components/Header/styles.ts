import styled from 'styled-components';
import * as variables from '../../styles/variables';

export const Container = styled.div`
  position: fixed;
  inset: 0;
  height: 10rem;
  background-color: ${variables.BLUE_PRIMARY};
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  z-index: 100;

  @media screen and (max-width: 420px) {
    padding: 1rem 2rem;
    height: 8rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: end;
  gap: 1rem;

  @media screen and (max-width: 420px) {
    h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 1.8rem;
      margin-bottom: 0.3rem;
    }
  }
`;

export const CartButton = styled.button`
  outline: none;
  border: none;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: ${variables.WHITE};
  padding: 1rem 2rem;
  font-size: 1.8rem;
  font-weight: 700;
  color: ${variables.BLACK};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 600;
  color: ${variables.WHITE};
`;

export const SubTitle = styled.h2`
  font-size: 2rem;
  font-weight: 300;
  color: ${variables.WHITE};
  margin-bottom: 0.5rem;
`;
