import { NavLink } from "react-router-dom";
import styled from '@emotion/styled';

export const MovieDetailsContainer = styled.div`
display:flex;
justify-content: center;
`

export const DetailsContainer = styled.div`
 width: 500px;
 margin-left: 40px;
 padding:20px;
`

export const GoBack = styled(NavLink)`
display: flex;
justify-content: center;
text-decoration: none;
color:black;
text-transform:uppercase;
text-align: center;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 24px;
width: 110px;
margin: auto;
margin-bottom: 30px;
  &.active{
    color:white;
    background: rgb(27,28,29);
  }
  :hover:not(.active),
  :focus-visible:not(.active){
        color:white;
        background: rgb(27,28,29);
  }
`

export const MovieDetailsImg = styled.img`
    object-fit: cover;
    border-radius: 30px;
`

export const MovieDetailsTitle = styled.h2`
font-size: 30px;
font-weight: 700;
margin: 0;
margin-bottom: 20px;
`

export const MovieDetailsDiscription = styled.p`
font-size: 20px;
margin: 0;
margin-bottom: 20px;
 span{
    font-weight: 700;
}
`

export const MovieDetailsAdditional = styled.h2`
font-size: 30px;
font-weight: 700;
margin: 0;
margin-bottom: 20px;
text-transform: uppercase;
`

export const AdditionalContainer = styled.div`
display: block;
justify-content: center;
margin-top: 30px;
text-align: center;
`

export const AdditionalList = styled.ul`
display: flex;
    justify-content: center;
    gap: 32px;
    margin-bottom: 32px;
`

export const AdditionalLink = styled(NavLink)`
 width: 120px;
 height: 40px;
 text-decoration: none;
 text-transform: uppercase;
 font-weight: 700;
 color: black;
text-align: center;
margin-bottom: 30px;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
  &.active{
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background: rgb(27,28,29);
  }
  :hover:not(.active),
  :focus-visible:not(.active){
        color: white;
        display: flex;
    flex-direction: column;
         justify-content: center;
             text-align: center;
        background: rgb(27,28,29);
  }
`
