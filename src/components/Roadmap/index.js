import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import {
  PhasesContainer,
  PhasesWrapper,
  PhasesH1,
  PhasesCard1,
  PhasesCard2,
  PhasesCard3,
  TextWrapper,
  CardHeading,
  Listing,

} from "./PhaseElements";

const Phases = () => {
  return (


    <MDBContainer>
      <MDBRow>
        <MDBCol>One of three columns</MDBCol>
        <MDBCol>One of three columns</MDBCol>
        <MDBCol>One of three columns</MDBCol>
      </MDBRow>
    </MDBContainer>
   
  );
};

export default Phases;
