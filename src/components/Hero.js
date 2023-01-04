import React, { useRef } from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import Zoom from "react-reveal/Zoom";

import engineVideo from "../assets/engine.mp4";
import Button from "./Button";

const Hero = () => {
  const videoRef = useRef();
  const setPlayBack = () => {
    videoRef.current.playbackRate = 0.8;
  };
  return (
    <Wrapper>
      <div className="hero-bg"></div>
      <Zoom top cascade>
        <article>
          <h1>SERVIS ZA REPARACIJU TURBINA</h1>

          <h3>
            Specijalizovani servis i reparacija turbina svih vozila putničkog,
            autobuskog i teretnog programa
          </h3>
          <div>
            <Button path="/contact">ZAKAŽITE SERVIS</Button>
          </div>
        </article>
      </Zoom>

      <video
        autoPlay
        loop
        className="video"
        ref={videoRef}
        onCanPlay={() => setPlayBack()}
        muted
      >
        <source src={engineVideo} type="video/mp4" />
        <source src={engineVideo} type="video/ogg" />
      </video>
      <StaticImage
        src="../images/engine.jpg"
        layout="constrained"
        //placeholder="blurred"
        className="hero-img"
        alt="Herro image"
      ></StaticImage>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  // width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .video {
    position: absolute;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    display: none !important;
  }

  .hero-img {
    min-height: 100%;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 1 !important;
    display: block !important ;
  }

  .hero-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.6);
  }
  article {
    z-index: 300;
    position: absolute;
    width: 85vw;
    max-width: 800px;
    color: var(--mainWhite);
    text-align: left;
    margin-top: -8rem;
    h1 {
      text-transform: uppercase;
      font-weight: 700;
      line-height: 1.25;
      letter-spacing: 1px;
      font-size: 2rem;
    }
    h3 {
      text-transform: none;
      font-weight: 400;
      margin-bottom: 2rem;
    }
  }

  @media (min-width: 600px) {
    .video {
      display: block !important ;
    }
    .hero-img {
      display: none !important;
    }
  }

  @media (min-width: 800px) {
    article {
      margin-top: 0;
      h1 {
        font-size: 3rem;
        letter-spacing: 5px;
        margin: 2rem 0 1rem 0;
      }
    }
  }
`;

export default Hero;
