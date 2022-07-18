import styled from "styled-components";
import PhaseOne from "../../assets/images/Vector.png";






export const CategoryContainer = styled.div`

  background: #ffffff;
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

export const CategoryWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 10%;
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
  align-items: left;
  padding: 35px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const CategoryImage = styled.img`
  display: flex;
  align-items: center;
  width: 163.63px;
  height: 102.14px;
  left: 638px;
  top: 1194px;
  
  object-fit: contain;

  cursor: pointer;
  margin-bottom: 10px;
`;
export const Icons = styled.img`
  display: flex;
  align-items: center;
  max-height: 150px;
  max-width: 150px;
  object-fit: contain;

  cursor: pointer;
  margin-bottom: 10px;
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
  font-size: 48px;
  color: rgba(0, 20, 197, 1);
  margin-bottom: 64px;
  font-weight: 600;
  line-height: 96px;
  font-family:'Montserrat';

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

export const Listing = styled.li`
    font-size: 22px;
    line-height: 38.5px;
    color: #ffffff;
    font-family: 'Jost';
   

`;
