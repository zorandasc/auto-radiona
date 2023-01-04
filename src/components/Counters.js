import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HideOn } from "react-hide-on-scroll";

const Counter = ({ limit, measure, text }) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNumber((n) => {
        if (n >= limit) clearInterval(intervalId);
        return n < limit ? n + 1 : n;
      });
    }, 100);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="about-counter">
      <div className="counter-number">
        <h1>{number}</h1>
        <h1>{measure}</h1>
      </div>
      <div className="counter-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

const Counters = () => {

  return (
    <Wrapper>
      <div className="section-center about-counters">
        <div className="about-counter">
          <div className="counter-number">
            <h1>15</h1>
            <h1>+</h1>
          </div>
          <div className="counter-text">
            <p>Više od 15 godina rada na polju auto popravki i održavanja</p>
          </div>
        </div>
        <div className="about-counter">
          <div className="counter-number">
            <h1>12</h1>
            <h1>M</h1>
          </div>
          <div className="counter-text">
            <p>Garanacija na servis 12 meseci</p>
          </div>
        </div>
        <div className="about-counter">
          <div className="counter-number">
            <h1>24</h1>
            <h1>h</h1>
          </div>
          <div className="counter-text">
            <p>Vreme remonta 24 sata</p>
          </div>
        </div>

        <div className="about-counter">
          <div className="counter-number">
            <h1>99</h1>
            <h1>%</h1>
          </div>
          <div className="counter-text">
            <p>Zadovoljnih korisnika</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--clr-black-3);
  color: var(--mainWhite);

  .about-counters {
    padding: 4rem 0rem;

    .about-counter {
      width: 100%;
      flex-wrap: wrap;
      align-content: flex-start;
      margin-bottom: 2rem;
      &:hover {
        .counter-number::after {
          transform: scaleX(1);
        }
      }
      .counter-number {
        position: relative;
        display: flex;
        &::before {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          border-top: 2px solid #242424;
          transition: all 200ms linear 0ms;
        }
        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          border-top: 2px solid #242424;
          transform: scaleX(0);
          border-color: var(--clr-orange-1);
          transition: all 200ms linear 0ms;
        }
      }
      .counter-text {
        width: 85%;
        padding: 15px 0 0;
      }
    }
  }
  @media screen and (min-width: 676px) {
    .about-counters {
      //padding: 4rem 2.5rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      -webkit-column-gap: 2rem;
      -moz-column-gap: 2rem;
      column-gap: 2rem;
    }
  }
  @media screen and (min-width: 992px) {
    .about-counters {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
`;

export default Counters;
