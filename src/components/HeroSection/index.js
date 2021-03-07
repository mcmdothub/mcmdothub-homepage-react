import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
      <VideoBg src={Video} type="video/mp4" autoPlay 
                loop muted playsInline/>
      </HeroBg>
      <HeroContent>
      <HeroItems>
        <HeroH1>I DESIGN & BUILD DIGITAL PRODUCTS</HeroH1>
        <HeroP>
        I like to develop expertise in a number of areas over the course of my life and career. I currently work remotely with a selected freelance client base and are open for new opportunities.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            round="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
        </HeroItems>
      </HeroContent>

    </HeroContainer>
  );
};

export default HeroSection;
