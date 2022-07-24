import React from "react";
import {
  BusinessContainer,
  TalentWrapper,
  Title,
  ImageColumn,
  TextColumn,
  Icons,
  TextWrapper,
  CardHeading,
  BusinessListing,
  Listing,
} from "./BusinessElements";
import add1 from "../../assets/images/icons/add1.png";
import flag from "../../assets/images/icons/flag.png";
import support from "../../assets/images/icons/support.png";
const Business = () => {
  return (
    <BusinessContainer id = "business">
      <Title>Business</Title>
      {/* <WholePhaseIcon src={WholePhase} /> */}
      <TalentWrapper>
        <ImageColumn></ImageColumn>

        <TextColumn>
          <TextWrapper>
            <BusinessListing>
              <Listing>
               
                <Icons src={add1}></Icons>
                <Listing.Heading> Create a Job </Listing.Heading>
                <Listing.Text>
                  Fill out our easy-to-use form. Post your job in under 60
                  seconds.
                </Listing.Text>
              </Listing>
              <Listing>
            
                <Icons src={flag}></Icons>
                <Listing.Heading> Post Missions</Listing.Heading>
                <Listing.Text>
                  Create an assessment to qualify candidates. NFTs are awarded
                  to the brave ones who pass. Recreate a new way of vetting
                  candidates.
                </Listing.Text>
              </Listing>
              <Listing>
            
                <Icons src={support}></Icons>
                <Listing.Heading> Receive Matches Instantly </Listing.Heading>
                <Listing.Text>
              
                  Explore the list of highly-skilled candidates matched
                  perfectly to your requirements. Completely funneled through a
                  gamified process.
                </Listing.Text>
              </Listing>
            </BusinessListing>
          </TextWrapper>
        </TextColumn>
      </TalentWrapper>
    </BusinessContainer>
  );
};

export default Business;
