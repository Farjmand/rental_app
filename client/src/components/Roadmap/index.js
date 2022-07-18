import React from "react";
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
    <PhasesContainer>
      <PhasesH1>Roadmap</PhasesH1>
      {/* <WholePhaseIcon src={WholePhase} /> */}
      <PhasesWrapper>
      <PhasesCard1>
  <TextWrapper>
    <CardHeading> Community   </CardHeading>
    <ul>
      <Listing>  Discord community launch </Listing>  
      <Listing> IRL events  </Listing>
      <Listing> Web 3 & NFT job marketplace </Listing>
      <Listing>  Speed hiring events & games  </Listing> 
      <Listing>  Kazmos Whitepaper  </Listing>
       </ul>
       </TextWrapper>
        </PhasesCard1>
        <PhasesCard2>
      <TextWrapper>
        <CardHeading> Inception </CardHeading>
        <ul>
          <Listing>  Missions Alpha </Listing>
          <Listing> Staking & Tokenized economy </Listing>
          <Listing> WhiteListingst project releases </Listing>
          <Listing> Kazmos platform MVP  </Listing>
        </ul>
        </TextWrapper>
        </PhasesCard2>

        <PhasesCard3>
        <TextWrapper>
        <CardHeading> Reinvention </CardHeading>
        <ul>
          <Listing>  Metaverse Ready </Listing>
          <Listing> A borderless ecosystem </Listing>
          <Listing> 60-second hiring engine</Listing>
          </ul>
          </TextWrapper>
        </PhasesCard3>
      </PhasesWrapper>
    </PhasesContainer>
  );
};

export default Phases;
