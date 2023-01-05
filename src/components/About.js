import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import Roll from "react-reveal/Roll";
import Zoom from "react-reveal/Zoom";

import Title from "./Title";
import Button from "./Button";

const About = () => {
  return (
    <Wrapper className="section">
      <div className="section-center about-center">
        <article className="about-text">
          <div className="about-header">
            <Title title="o nama" />
          </div>
          <Zoom bottom>
            <p>
              Turbo Tim Servis je grupa sa dugom tradicijom i velikim iskustvom
              u auto industriji.
            </p>
            <p>
              TURBO TIM SERVIS će uz pomoć znanja i iskustva stećenog
              dosadašnjim radom u oblasti automehanike i veština stećenih u radu
              sa savremenim mašinama se postarati da Vaš motor, zahvaljujući
              ispravnoj turbini, postigne maksimalne performanse.
            </p>
          </Zoom>
          <div className="about-btn-desktop">
            <Button path="/about">pročitaj više</Button>
          </div>
        </article>
        <Roll right>
          <div className="about-img">
            <StaticImage
              src="../images/about-3.jpg"
              layout="constrained"
              //placeholder="blurred"
              className="img"
              alt="Herro image"
            ></StaticImage>
          </div>
        </Roll>
        <div className="about-btn-mobile">
          <Button path="/about">više o nama</Button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--clr-black-2);
  color: var(--mainWhite);

  .about-text {
    text-align: left;
    margin-bottom: 3rem;
    .about-header {
      display: flex;
    }
    p {
      line-height: 2;
    }
    .contact-link {
      color: var(--clr-orange-1);
      font-weight: 700;
    }
    .about-btn-desktop {
      margin-top: 4rem;
      display: none;
      @media screen and (min-width: 676px) {
        display: block;
      }
    }
    .detail-link {
      display: flex;
      a {
        display: flex;
        align-items: center;
        color: #ededed;
        font-size: 16px;
        font-weight: 700;
        transition: 0.2s cubic-bezier(0.24, 0.74, 0.58, 1);
        padding-right: 0.3rem;

        &:hover {
          color: var(--clr-orange-1);
        }
        &::before {
          content: "⮕";
          position: relative;
          font-size: 10px;
          margin-right: 10px;
          line-height: 1;
          color: #ededed;
          background-color: var(--clr-orange-1);
          padding: 4.5px 6.5px 5.5px 7.5px;
          clip-path: polygon(
            5px 0,
            100% 0,
            100% calc(100% - 5px),
            calc(100% - 5px) 100%,
            0 100%,
            0 5px
          );
          overflow: hidden;
        }
      }
    }
  }

  .about-img {
    overflow: hidden;
    margin-bottom: 2rem;
    height: 25rem;
    width: 100%;
    display: block;
    clip-path: polygon(
      40px 0,
      100% 0,
      100% calc(100% - 40px),
      calc(100% - 40px) 100%,
      0 100%,
      0 40px
    );

    .img {
      width: 100%;
      height: 100%;
      transition: all 200ms linear 0ms;
      filter: brightness(60%);
      &:hover {
        transform: scale(1.45) rotate(-1.5deg);
      }
    }
  }

  @media screen and (min-width: 676px) {
    .about-center {
      .about-btn-mobile {
        display: none;
      }
    }
  }

  @media screen and (min-width: 992px) {
    .about-center {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      align-items: center;
      column-gap: 4rem;
    }
    .about-img {
      grid-column: 6 / -1;
      margin-bottom: 0;
    }
    .about-text {
      grid-column: 1 / span 5;
    }
  }
`;

export default About;
