import styled from "styled-components";



export const Heading = styled.h1`
    padding-top: 100px;
    font-size: 48px;
    font-family: 'Gruppo';
    text-align: center;
    line-height: 46.38px;
    color: #ffffff;
    font-weight: 400;
    padding-bottom: 150px;
`;


export const SearchButton = styled.button`

font-family: 'Montserrat';
position: absolute;
width: 137.94px;
height: 48px;
left: 876px;
color: rgba(4, 97, 159, 1);
border-color: #F5F5F5;
background: #F5F5F5;
border-radius: 10px;
font-size: 14px;
text-align: center;
font-weight: 600;
`;


export const StyledBanner = styled.section` 
background: radial-gradient(circle, #5FBCDA, #200492);
background-repeat: no-repeat;
height:150vh;
width: 100vw;

@media screen and (max-width: 768px) {
    background-position: center center;
    background-size: cover;
    height: 100vh;
    width: 100%;
    float: left;
  }
`;
StyledBanner.Container = styled.div`

position: center;
padding-top: 10%;


`;


export const Input = styled.input`
  position: absolute;
  width: 433px;
  height: 48px;
  left: 427px;
  font-size: 18px;
  background: #F5F5F5;
  border: none;
  border-radius: 24px;
  ::placeholder {
    color: palevioletred;
  }
`;









