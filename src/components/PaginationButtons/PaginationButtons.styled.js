import styled from 'styled-components/macro';
import {StyledLink} from 'components/Form/Form.styled'


const getBackroundColor = (isActive, forbidden) => {
  if (isActive) return '#0275d8'
  if (forbidden) return '#fff'
  else return '#0275d8'
}

const getColor = (isActive, forbidden) => {
  if (isActive) return '#fff'
  if (forbidden) return '#0275d8'
  else return '#fff'

}

export const PageTag = styled.a`
  position: relative;
  float: left;
  padding: 0.5rem 0.75rem;
  margin: 0.25rem;
  line-height: 1.5rem;
  color: ${({ isActive })=> isActive ? '#fff' : '#0275d8'};
  text-decoration: none;
  background-color: ${({ isActive })=> isActive ? '#0275d8' : '#fff'};
  border: 1px solid #ddd;
  border-radius: 10px;
  cursor: ${({ forbidden })=> forbidden ? 'not-allowed' : 'pointer'};

  :hover{
    background-color: ${({ isActive, forbidden })=> (() =>getBackroundColor(isActive, forbidden))};
    color: ${({ isActive, forbidden })=> (() =>getColor(isActive, forbidden))};
  }
`

export const StyledLinkNewProduct = styled(StyledLink)`
  position: unset;
  display: block;
`
