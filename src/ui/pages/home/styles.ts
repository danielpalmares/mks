import styled from 'styled-components';
import * as variables from '../../styles/variables';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;

  padding: 15rem 2rem;
  margin: 0 auto;

  @media screen and (max-width: 500px) {
    padding: 10rem 2rem;
  }
`;

export const ProductCard = styled.div`
  width: 22rem;
  height: auto;
  overflow: hidden;
  position: relative;

  box-shadow: ${variables.SHADOW_LIGHT};
  background-color: ${variables.WHITE};
  border-radius: 1rem;
`;

export const ImageContainer = styled.div`
  width: 18rem;
  height: 18rem;
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1rem;

  height: calc(100% - 18rem);
  padding: 1rem 1rem 0 1rem;
`;

export const NameAndPriceContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
`;

export const ProductName = styled.span`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${variables.BLACK_200};
`;

export const ProductPrice = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${variables.WHITE};
  background-color: ${variables.BLACK_300};
  padding: 0.5rem;
  border-radius: 0.5rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 300;
  height: 100%;
  margin-bottom: 4rem;
  display: flex;
  align-items: end;
`;

export const BuyButton = styled.button`
  width: 100%;
  height: 3rem;

  position: absolute;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;
  color: ${variables.WHITE};
  background-color: ${variables.BLUE_PRIMARY};

  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  svg {
    margin-bottom: 0.3rem;
  }
`;
