import React from "react";
import {
  FooterContainer,
  FooterLinksWrapper,
  FooterLinksContainer,
  FooterLinkItems,
  FooterWrap,
  FooterLinkTitle,
  FooterBg,
} from "./FooterElements";
import { SmallButton } from '../elements/SmallButton';
import { Button, BtnWrap } from "../elements/Button2";
import Logo from "../../assets/Logo.png";
import { LogoIcon } from "../LogoIcon";


const Footer = () => {
  return (
    <FooterContainer>
    
      <FooterWrap>
        <FooterLinksContainer>
          <LogoIcon src={Logo}></LogoIcon>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle to="">Home</FooterLinkTitle>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle to="">Support</FooterLinkTitle>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle to="">Talent</FooterLinkTitle>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle to="">Business</FooterLinkTitle>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle to="">About Us</FooterLinkTitle>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <BtnWrap>
          <SmallButton to='https://discord.com/' target='_blank'>
								<SmallButton.text> Join our Community</SmallButton.text>
								</SmallButton>
          </BtnWrap>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
