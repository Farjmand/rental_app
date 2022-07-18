import React from "react";
import { AboutContainer, AboutH1, AboutH2, AboutWrapper } from "./InfoElements";


const About = () => {
  return (
    <AboutContainer>
      <AboutH1>About Us</AboutH1>
   
        <AboutWrapper>
          <AboutH2>
          We exist to reinvent the way hiring works for everyone involved. Kazmos is on a mission to take on the challenges of scaling in the web 3 world through a gamified hiring platform that will foster new forms of upskilling and hiring. We are driven to bridge the gap between companies seeking to build in the Web3 space, and professionals looking to contribute to its ecosystem. And do so in a totally new way.
          </AboutH2>
        </AboutWrapper>
   
    </AboutContainer>
  );
};

export default About;
