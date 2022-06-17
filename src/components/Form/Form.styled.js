import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
  position: relative;
  top: 5rem;
  background-color: #0275d8; 
  border: 1px solid #0275d8;
  border-radius: 0.25rem; 
  color: #fff; 
  padding: 1rem 1.5rem;
  text-decoration: none;

  :hover{
    background-color: #fff; 
    color: #0275d8; 
    border: 1px solid #0275d8;
  }
`
