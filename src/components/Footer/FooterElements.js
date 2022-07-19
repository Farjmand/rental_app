import styled from "styled-components";
import { Link } from "react-router-dom";
import FooterBackground from "../../assets/images/FooterBackground.png";
import Moon_Footer from "../../assets/images/Moon_Footer.svg";

export const FooterContainer = styled.footer`
  
  background: rgba(32, 4, 146, 1);
  display: flex;
  @media screen and (max-width: 768px) {
    background-position: center center;
    background-size: cover;
    height: 100vh;
    width: 100%;
    float: left;
  }
`;
export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 16px;
  text-align: right;
  width: 85px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled(Link)`
  font-size: 14px;
  margin-bottom: 16px;
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  font-family: 'Gruppo';
  &:hover {
    color: #0B1686;
    transition: 0.3s ease-out;
`;

export const FooterBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
