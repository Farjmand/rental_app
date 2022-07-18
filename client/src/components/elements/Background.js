import styled from "styled-components";
import FooterBackground from "../../assets/images/FooterBackground.png";


export const BackgroundContainer = styled.footer`
  
  background-image: url(${FooterBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  @media screen and (max-width: 768px) {
    background-position: center center;
    background-size: cover;
    height: 100vh;
    width: 100%;
    float: left;
  }
`;