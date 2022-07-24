import React from "react";
import {
  PhasesContainer,
  Grid,
  Column1,
  Column2,
  Column3,
  TextWrapper,
  CardHeading,
  Title

} from "./PhaseElements";



const Category = () => {
  return (
    <PhasesContainer id = "roadmap">
      <Title> LETS RENT EVERYTHING IN <br/>
DECENTRIALIZED WORLD </Title>
    
      <Grid>
        <Column1>
        <TextWrapper>
          <CardHeading>
          MEET THE <br/> PERSON  IN <br/>REAL LIFE
          </CardHeading>
        </TextWrapper>
        </Column1>

        <Column2>
        <TextWrapper>
          <CardHeading>
          MINT NFT
          </CardHeading>
        </TextWrapper>
        </Column2>
      
        <Column3>
        <TextWrapper>
          <CardHeading>
          GET THE THING <br/> YOU WANT <br /> TO RENT
          </CardHeading>
        </TextWrapper>
        </Column3>
      </Grid>
      
    </PhasesContainer>
  );
};

export default Category;
