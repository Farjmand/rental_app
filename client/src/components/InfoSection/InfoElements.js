import styled from "styled-components";
import FooterBackground from "../../assets/images/FooterBackground.png";

export const AboutContainer = styled.div`

  background-image: url(${FooterBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  @media screen and (max-width: 768px) {

    height: 100vh;
    width: 100vw;
    float: left;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }

  
`;

export const AboutWrapper = styled.div`
  
  margin: 0 auto;
  display: row;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 100px;
  padding: 0 150px;



  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const AboutH1 = styled.h1`
  font-size: 64px;
  color: #ffffff;
  margin-bottom: 64px;
  font-weight:700;
  line-height: 96px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const AboutH2 = styled.a`
  
text-align: center; 
font-size: 21px;
font-weight: 400;
margin-bottom: 10px;
line-height: 34.24px;
color: #ffffff;
font-family: 'Jost';
`;


