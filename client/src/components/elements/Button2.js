import styled from "styled-components";
// import { Link } from "react-scroll";

export const Button = styled.a`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#010606" : "#0B1686")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#ffffff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#ffffff" : "#0B1686")};
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;
