import styled, { keyframes } from 'styled-components';
import * as variables from '../../styles/variables';

export const SkeletonAnimation = keyframes`
  from {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const SkeletonContainer = styled.div`
  width: 22rem;
  height: 35rem;
  background-color: ${variables.WHITE};
  border-radius: 1rem;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
`;

export const SkeletonFlex = styled.div`
  display: flex;
  gap: 2rem;
  padding: 0 2rem;
  margin-bottom: 2rem;
`;

export const SkeletonImage = styled.div`
  width: 18rem;
  height: 18rem;
  background-color: ${variables.WHITE_LIGHT};
  border-radius: 1rem;
  margin: 2rem;

  opacity: 0;
  animation: ${SkeletonAnimation} 1s linear infinite;
`;

export const SkeletonInformation = styled.div`
  width: 18rem;
  height: 3rem;
  border-radius: 1rem;
  background-color: ${variables.WHITE_LIGHT};

  opacity: 0;
  animation: ${SkeletonAnimation} 1s linear infinite;
`;

export const SkeletonButton = styled.div`
  width: 100%;
  height: 3rem;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: ${variables.WHITE_LIGHT};

  opacity: 0;
  animation: ${SkeletonAnimation} 1s linear infinite;
`;
