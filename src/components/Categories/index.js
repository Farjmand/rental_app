import React from "react";
import {
  CategoryContainer,
  CategoryWrapper,
  Title,
  ImageColumn,
  TextColumn,
  TextWrapper,
  CardHeading,
  Listing,
  CategoryImage
} from "./CategoryElements";

import Icon1 from "../../assets/images/icons/Icon7.png";
import Icon2 from "../../assets/images/icons/Icon8.png";
import Icon3 from "../../assets/images/icons/Icon9.png";
import Icon4 from "../../assets/images/icons/Icon10.png";
import Icon5 from "../../assets/images/icons/Icon11.png";
import Icon6 from "../../assets/images/icons/Icon12.png";


const Category = () => {
  return (
    <CategoryContainer id = "category">
      <Title> FEATURED CATEGORIES </Title>
      {/* <WholePhaseIcon src={WholePhase} /> */}
      <CategoryWrapper>
        <ImageColumn>
        <CategoryImage src={Icon1}></CategoryImage>
        </ImageColumn>

        <ImageColumn>
        <CategoryImage src={Icon2}></CategoryImage>
        </ImageColumn>
      
        <ImageColumn>
        <CategoryImage src={Icon3}></CategoryImage>
        </ImageColumn>
      </CategoryWrapper>
      <CategoryWrapper>
        <ImageColumn>
        <CategoryImage src={Icon4}></CategoryImage>
        </ImageColumn>

        <ImageColumn>
        <CategoryImage src={Icon5}></CategoryImage>
        </ImageColumn>
      
        <ImageColumn>
        <CategoryImage src={Icon6}></CategoryImage>
        </ImageColumn>
      </CategoryWrapper>
    </CategoryContainer>
  );
};

export default Category;
