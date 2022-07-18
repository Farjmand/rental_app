import React from "react";
import { Card } from "./Cards";
import { Heading1 } from "./elements/Heading1";
import { StyledBanner2 } from "./styled/Banner2.styled";

export function Banner2 () {

return (
   <StyledBanner2>
       <StyledBanner2.Container>
      <Heading1>
      Kazmos is Coming Soon... and we’re featuring: 
       </Heading1>
      <Card /> 
       </StyledBanner2.Container>
   </StyledBanner2>
)

}