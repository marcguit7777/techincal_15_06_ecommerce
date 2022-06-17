import styled from 'styled-components';

export const HeaderTable = styled.thead`
  background-color: #fff; 
  position: ${({ isPositionFix }) => isPositionFix ? 'sticky' : 'unset'};
  top: ${({ navbarHeight, isPositionFix }) => isPositionFix && `${navbarHeight}px`};
`
