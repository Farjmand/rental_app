import styled from "styled-components";
import PhaseOne from "../../assets/images/Vector.png";

import GraphicsBusiness from "../../assets/images/GraphicsBusiness.png";


export const TalentContainer = styled.div`

background-image: url(${GraphicsBusiness});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;


  @media screen and (max-width: 768px) {
    background-position: center center;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    float: left;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const TalentWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 40px;
  padding: 0 50px;
  
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;


export const ImageColumn = styled.div`
 
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 35px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const TextColumn = styled.div`
 
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 50px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;



export const Title = styled.h1`
  font-size: 4rem;
  color: #fff;
  margin-bottom: 64px;
  font-weight: 700;
  line-height: 96px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;


export const TextWrapper = styled.div`

  align-items: center;
  padding: 50px 20px 30px 35px;
`;
export const CardHeading = styled.p`
    font-size: 42px;
    line-height: 53.59px;
    font-weight:600;
    text-align: center;
    color: #ffffff;
`;


export const BusinessListing = styled.ul`
list-style: none;
padding-left: 0;
float: left;
margin-top: 15px;
margin-right: 50px;
`;
export const Listing = styled.li`
   
    text-decoration: None;
`;
export const Icons = styled.img`
  display: flex;
  align-items: center;
  max-height: 50vh;
  max-width: 25vw;
  object-fit: contain;
  display:inline-block;
  cursor: pointer;
  margin-bottom: 10px;
`;
Listing.Heading = styled.h3`
font-family: 'Sora';
font-size: 22px;
color: #ffffff;
`;
Listing.Text = styled.p`
  float:right;
  font-size: 17px;
  line-height: 38.5px;
  color: #ffffff;
  font-family: 'Jost';
`;
