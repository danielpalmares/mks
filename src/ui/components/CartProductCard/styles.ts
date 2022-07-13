import styled from 'styled-components';
import * as variables from '../../styles/variables';

export const CardContainer = styled.div`
  width: 38rem;
  height: 10rem;

  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 1rem;
  background-color: ${variables.WHITE};

  padding: 1rem;
  margin: 15rem auto 5rem auto;
  position: relative;

  img {
    width: 9rem;
    height: 9rem;
  }

  span {
    width: 10rem;
    font-size: 1.3rem;
  }
`;

export const QuantityContainer = styled.div`
  background-color: ${variables.WHITE};
  border: 1px solid ${variables.WHITE_LIGHT};
  border-radius: 0.5rem;
  overflow: hidden;
  white-space: nowrap;

  span {
    border-right: 1px solid ${variables.WHITE_LIGHT};
    border-left: 1px solid ${variables.WHITE_LIGHT};
    padding: 0 0.5rem;
    font-size: 1.3rem;
  }
`;

export const QuantityButton = styled.button`
  outline: none;
  background: none;
  border: none;
  padding: 0 0.5rem;
  cursor: pointer;
  font-size: 1.3rem;
`;

export const PriceText = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  display: flex;
  justify-content: end;
`;
