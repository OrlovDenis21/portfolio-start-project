import styled from "styled-components";
import {theme} from "../../styles/Theme";


const Slider = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Slide = styled.div`
  text-align: center;
`

const Text = styled.p`

`

const Name = styled.span`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 22px 0 32px;
  display: inline-block;
`

const Pagination = styled.div`

  span {
    display: inline-block;
    width: 7px;
    height: 7px;
    margin: 5px;
    background-color: rgba(255, 255, 255, 0.50);
    border-radius: 20px;
    
    
    & + span {
      margin-left: 5px;
    }
    
    &.active {
      width: 20px;
      background: ${theme.colors.accent};
    }
    
  }
`

export const S = {
    Slider,
    Slide,
    Text,
    Name,
    Pagination,
}