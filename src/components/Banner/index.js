import React from "react";
import { 
    StyledBanner,
    Input,
    Heading,
    SearchButton,
 } from "./BannerElements";



const Banner = () => {

       
    return (
     
        <StyledBanner>
               <StyledBanner.Container>
                <Heading> RENT THINGS. THE WEB3 WAY. </Heading>
               <Input type="text" placeholder="" />
               <SearchButton>  SEARCH  </SearchButton>
                </StyledBanner.Container> 
        </StyledBanner>
   
    )

};

export default Banner;