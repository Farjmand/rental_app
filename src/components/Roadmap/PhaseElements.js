import styled from "styled-components";
import PolygonOne from "../../assets/images/Ellipse1.png";
import PolygonTwo from "../../assets/images/Ellipse7.png";
import PolygonThree from "../../assets/images/Ellipse8.png";



export const PhasesContainer = styled.div`

  background: linear-gradient(180deg, #009B76 0%, rgba(255, 255, 255, 0) 100%);
  padding-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-bottom: 10px;
 

  @media screen and (max-width: 768px) {

    height: 100vh;
    width: 100vw;
    float: left;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const PhasesWrapper = styled.div`
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


export const PhasesCard1 = styled.div`
  background-image: url(${PolygonOne});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const PhasesCard2 = styled.div`
  background-image: url(${PolygonTwo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  padding: 50px;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const PhasesCard3 = styled.div`
  background:url(${PolygonThree});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
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



export const PhasesH1 = styled.h1`
  font-size: 4rem;
  color: #fff;
  margin-bottom: 64px;
  font-weight: 700;
  line-height: 96px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const WholePhaseIcon = styled.img`
  width: 100%;
  display: flex;
  align-items: center;
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
    font-family: 'Gruppo';
`;

export const Listing = styled.li`
    font-size: 22px;
    line-height: 38.5px;
    color: #ffffff;
    font-family: 'Jost';
   

`;
