import styled from "styled-components";
import { Link } from "react-router-dom";

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
export const SearchButton = styled(Link)`
  border: 2px solid #fff;
  border-radius: 25px;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(15px);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 50px;
  gap: 10px;
  position: absolute;
  width: 977px;
  height: 204px;
  left: 231px;
  top: 493px;

  @media screen and (max-width: 768px) {
    height: auto;
    width: 50%;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

SearchButton.text = styled.h1`
  position: static;
  width: 877px;
  height: 118px;
  left: 10px;
  top: 10px;
  font-family: "Sora", sans-serif;
  @media screen and (min-width: 768px) {
    font-weight: 300;
    font-size: 42px;
    line-height: 59px;
    text-align: center;
    line-height: 48.93px;
  }
  color: #ffffff;
  text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;

  @media screen and (max-width: 768px) {
    font-weight: 300;
    font-size: 18px;
    line-height: 39px;
    text-align: center;
    line-height: 28.93px;
    color: #ffffff;
    height: auto;
    width: 100%;
    position: initial;
  }
`;
