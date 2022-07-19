import styled from "styled-components";
import EllipseOne from "../../assets/images/Ellipse7.png";
import EllipseTwo from "../../assets/images/Ellipse2.png";
import EllipseThree from "../../assets/images/Ellipse8.png";




export const PhasesContainer = styled.div`

  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #009B76 100% );
  padding-top: 5px;
  display: grid;
  align-items: center;

  color: white;
  padding-bottom: 10px;
  height: 200vh;
  @media screen and (max-width: 768px) {

    height: 100vh;
    width: 100vw;
    float: left;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const Grid = styled.div`
  max-width: 100%;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr;
  display: flex;
  gap: 10rem;
  padding: 0.25rem;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;


export const Column1 = styled.div`
  background-image: url(${EllipseOne});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  padding: 1rem;
  width: 100%;
  height: 100%;

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const Column2 = styled.div`
  background-image: url(${EllipseTwo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  padding: 5rem;
  width: 100%;
  height: 100%;

  transition: all 0.2s ease-in-out;
 
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const Column3 = styled.div`
  background:url(${EllipseThree});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  padding: 1rem;
  width: 100%;
  height: 100%;
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

export const Title = styled.h1`
margin-top: 15px;
  font-size: 40px;
  color: #000000;
  margin-bottom: 64px;
  font-weight: 400;
  line-height: 48.47px;
  font-family:'Gruppo';
  text-align:center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const CardHeading = styled.p`
    font-size: 25px;
    line-height: 40px;
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
