// src/components/Hero.jsx
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

/**
 * Hero with integrated animated pattern background + optional portrait image.
 *
 * Props:
 *  - portrait (boolean) - whether to show the portrait (default: true)
 *  - imageSrc (string) - override portrait image source (optional)
 *
 * Provided default portrait image (uploaded by you):
 * /mnt/data/c1d6aba9-78f4-4f57-a42c-2f54613de127.png
 */

const HERO_BG = "/mnt/data/1873d8e6-e937-4f7f-846c-22dc88a4d4c7.png";
const DEFAULT_PORTRAIT = "/src/assets/heropic.png";

const ACCENT = "#d89463";
const WHITE = "#fff";

const Section = styled.section`
  position: relative;
  width: 100%;
  min-height: 820px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-image: url("${HERO_BG}");
  background-position: center right;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 1100px) {
    min-height: 720px;
    background-position: center;
  }

  @media (max-width: 720px) {
    min-height: 680px;
  }
`;

/* Pattern layer */
const PatternBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  opacity: 0.95;

  &::before {
    content: "";
    position: absolute;
    inset: -145%;
    transform: rotate(-45deg);
    background: #000000;
    /* pattern (kept exactly as provided) */
    background-image: radial-gradient(4px 100px at 0px 235px, rgb(255, 140, 17), #0000),
      radial-gradient(4px 100px at 300px 235px, rgb(255, 119, 0), #884e2800),
      radial-gradient(1.5px 1.5px at 150px 117.5px, rgb(255, 144, 9) 100%, #0000 150%),
      radial-gradient(4px 100px at 0px 252px, rgb(156, 14, 137), #0000),
      radial-gradient(4px 100px at 300px 252px, rgb(23, 41, 206), #0000),
      radial-gradient(1.5px 1.5px at 150px 126px, rgb(247, 102, 18) 100%, #0000 150%),
      radial-gradient(4px 100px at 0px 150px, rgb(249, 121, 16), #0000),
      radial-gradient(4px 100px at 300px 150px, rgb(255, 128, 18), #0000),
      radial-gradient(1.5px 1.5px at 150px 75px, rgb(255, 116, 10) 100%, #0000 150%),
      radial-gradient(4px 100px at 0px 253px, rgb(249, 137, 17), #0000),
      radial-gradient(4px 100px at 300px 253px, rgb(248, 107, 14), #0000),
      radial-gradient(1.5px 1.5px at 150px 126.5px, rgb(252, 129, 14) 100%, #0000 150%),
      radial-gradient(4px 100px at 0px 204px, rgb(234, 115, 18), #0000),
      radial-gradient(4px 100px at 300px 204px, rgb(255, 139, 6), #0000),
      radial-gradient(1.5px 1.5px at 150px 102px, rgb(255, 128, 9) 100%, #0000 150%),
      radial-gradient(4px 100px at 0px 134px, rgb(249, 133, 9), #0000),
      radial-gradient(4px 100px at 300px 134px, rgb(251, 125, 15), #0000),
      radial-gradient(1.5px 1.5px at 150px 67px, rgb(255, 146, 13) 100%, #0000 150%),
      radial-gradient(4px 100px at 0px 179px, rgb(249, 137, 17), #0000),
      radial-gradient(4px 100px at 300px 179px, rgb(253, 122, 6), #0000),
      radial-gradient(1.5px 1.5px at 150px 89.5px, rgb(234, 132, 7) 100%, #0000 150%),
      radial-gradient(4px 100px at 0px 299px, rgb(255, 115, 0), #0000),
      radial-gradient(4px 100px at 300px 299px, rgb(255, 136, 0), #0000),
      radial-gradient(1.5px 1.5px at 150px 149.5px, rgb(255, 123, 0) 100%, #0000 150%),
      radial-gradient(4px 100px at 0px 215px, rgb(255, 145, 0), #0000),
      radial-gradient(4px 100px at 300px 215px, rgb(255, 132, 0), #0000),
      radial-gradient(1.5px 1.5px at 150px 107.5px, rgb(255, 136, 0) 100%, #0000 150%),
      radial-gradient(4px 100px at 0px 281px, rgb(255, 170, 0), #0000),
      radial-gradient(4px 100px at 300px 281px, rgb(255, 115, 0), #0000),
      radial-gradient(1.5px 1.5px at 150px 140.5px, rgb(255, 119, 0) 100%, #0000 150%),
      radial-gradient(4px 100px at 0px 158px, rgb(255, 123, 0), #0000),
      radial-gradient(4px 100px at 300px 158px, rgb(255, 132, 0), #0000),
      radial-gradient(1.5px 1.5px at 150px 79px, rgb(255, 149, 0) 100%, #0000 150%),
      radial-gradient(4px 100px at 0px 210px, rgb(255, 123, 0), #0000),
      radial-gradient(4px 100px at 300px 210px, rgb(255, 162, 0), #0000),
      radial-gradient(1.5px 1.5px at 150px 105px, rgb(255, 136, 0) 100%, #0000 150%);
    background-size:
      300px 235px, 300px 235px, 300px 235px, 300px 252px, 300px 252px, 300px 252px,
      300px 150px, 300px 150px, 300px 150px, 300px 253px, 300px 253px, 300px 253px,
      300px 204px, 300px 204px, 300px 204px, 300px 134px, 300px 134px, 300px 134px,
      300px 179px, 300px 179px, 300px 179px, 300px 299px, 300px 299px, 300px 299px,
      300px 215px, 300px 215px, 300px 215px, 300px 281px, 300px 281px, 300px 281px,
      300px 158px, 300px 158px, 300px 158px, 300px 210px, 300px 210px, 300px 210px;
    animation: hi 150s linear infinite;
  }

  @keyframes hi {
    0% {
      background-position:
        0px 220px, 3px 220px, 151.5px 337.5px, 25px 24px, 28px 24px, 176.5px 150px,
        50px 16px, 53px 16px, 201.5px 91px, 75px 224px, 78px 224px, 226.5px 350.5px,
        100px 19px, 103px 19px, 251.5px 121px, 125px 120px, 128px 120px, 276.5px 187px,
        150px 31px, 153px 31px, 301.5px 120.5px, 175px 235px, 178px 235px, 326.5px 384.5px,
        200px 121px, 203px 121px, 351.5px 228.5px, 225px 224px, 228px 224px, 376.5px 364.5px,
        250px 26px, 253px 26px, 401.5px 105px, 275px 75px, 278px 75px, 426.5px 180px;
    }
    to {
      background-position:
        0px 6800px, 3px 6800px, 151.5px 6917.5px, 25px 13632px, 28px 13632px, 176.5px 13758px,
        50px 5416px, 53px 5416px, 201.5px 5491px, 75px 17175px, 78px 17175px, 226.5px 17301.5px,
        100px 5119px, 103px 5119px, 251.5px 5221px, 125px 8428px, 128px 8428px, 276.5px 8495px,
        150px 9876px, 153px 9876px, 301.5px 9965.5px, 175px 13391px, 178px 13391px, 326.5px 13540.5px,
        200px 14741px, 203px 14741px, 351.5px 14848.5px, 225px 18770px, 228px 18770px, 376.5px 18910.5px,
        250px 5082px, 253px 5082px, 401.5px 5161px, 275px 6375px, 278px 6375px, 426.5px 6480px;
    }
  }

  /* reduce animation for users who prefer reduced motion */
  @media (prefers-reduced-motion: reduce) {
    &::before { animation: none; }
  }
`;

/* dark overlay */
const DarkOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  background: linear-gradient(180deg, rgba(17,11,12,0.25) 0%, rgba(17,11,12,0.5) 100%);
`;

/* content container */
const Container = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 28px;
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 980px) {
    padding: 56px 20px;
  }

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: flex-start;
    padding-top: 48px;
  }
`;

const Left = styled.div`
  flex: 1 1 58%;
  color: ${WHITE};
  max-width: 860px;

  @media (max-width: 720px) {
    width: 100%;
    max-width: 100%;
  }
`;

const Headline = styled.h1`
  margin: 0 0 10px 0;
  font-weight: 400;
  line-height: 1.02;
  color: ${WHITE};
  font-size: clamp(30px, 7.2vw, 50px);
  word-break: break-word;
`;

const Role = styled.h2`
  margin: 0 0 36px 0;
  font-weight: 600;
  color: ${ACCENT};
  font-size: clamp(20px, 6.2vw, 10px);
  letter-spacing: 0.6px;
`;

const Sub = styled.p`
  color: rgba(255,255,255,0.9);
  max-width: 560px;
  margin: 18px 0 28px 0;
  font-size: 16px;
  line-height: 1.6;
  opacity: 0.95;

  @media (max-width: 720px) {
    display: none;
  }
`;

const CTA = styled(Link)`
  display: inline-block;
  background: transparent;
  color: ${ACCENT};
  border: 1px solid ${ACCENT};
  padding: 14px 24px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 700;
  transition: all 180ms ease;
  box-shadow: none;

  &:hover {
    background: ${ACCENT};
    color: #2b1b1e;
  }
`;

/* portrait container placed to the right of the hero */
const PortraitWrap = styled.div`
  position: relative;
  flex: 0 0 36%;
  min-width: 260px;
  height: 460px;
  display: ${props => (props.show ? "block" : "none")};
  z-index: 3;
  pointer-events: none;

  @media (max-width: 980px) {
    display: none;
  }
`;

/* portrait image styling */
const Portrait = styled.img`
  position: absolute;
  right: -20px;
  bottom: 0;
  width: 360px;
  height: auto;
  max-width: 48vw;
  object-fit: contain;
  transform: translateY(6%);
  border-radius: 8px;
  box-shadow: 0 18px 50px rgba(11, 6, 7, 0.55);
  transition: transform 500ms cubic-bezier(.2,.9,.2,1), opacity 400ms ease;
  opacity: 0;
  transform-origin: center;

  /* entrance animation */
  @media (prefers-reduced-motion: no-preference) {
    animation: popIn 700ms ease forwards 150ms;
  } 
  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
  }

  @keyframes popIn {
    from {
      transform: translateY(18%) scale(0.98);
      opacity: 0;
    }
    to {
      transform: translateY(6%) scale(1);
      opacity: 1;
    }
  }
`;

/* right spacer fallback (keeps layout similar if portrait disabled) */
const RightSpacer = styled.div`
  flex: 0 0 36%;
  min-width: 260px;
  height: 100%;
  display: block;
  pointer-events: none;

  @media (max-width: 980px) {
    display: none;
  }
`;

/* Exported component */
export default function Hero({ portrait = true, imageSrc = DEFAULT_PORTRAIT }) {
  return (
    <Section id="hero" aria-label="Hero">
      <PatternBackground />
      <DarkOverlay />

      <Container>
        <Left>
          <Headline>Hello,I’m Sathwik</Headline>
          <Role>Full-satck-developer</Role>

          <Sub>
            I craft clean, simple and unique design — focused on UX, brand & product.
            
          </Sub>

          <CTA to="/work">View Works</CTA>
        </Left>

        {/* show portrait if portrait prop is true */}
        {portrait ? (
          <PortraitWrap show={portrait}>
            <Portrait src={imageSrc} alt="Portrait" />
          </PortraitWrap>
        ) : (
          <RightSpacer aria-hidden="true" />
        )}
      </Container>
    </Section>
  );
}
