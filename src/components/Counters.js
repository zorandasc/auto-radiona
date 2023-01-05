import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Zoom from "react-reveal/Zoom";

const Counter = ({ limit, measure, text, interval }) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNumber((n) => {
        if (n >= limit) clearInterval(intervalId);
        return n < limit ? n + 1 : n;
      });
    }, interval);
    return () => clearInterval(intervalId);
  }, [limit, interval]);

  return (
    <Zoom>
      <div className="about-counter">
        <div className="counter-number">
          <h1>{number}</h1>
          <h1>{measure}</h1>
        </div>
        <div className="counter-text">
          <p>{text}</p>
        </div>
      </div>
    </Zoom>
  );
};

const Counters = () => {
  return (
    <Wrapper>
      <div className="section-center about-counters">
        <Counter
          limit={15}
          measure="+"
          text="Više od 15 godina rada na polju auto popravki i održavanja"
          interval={100}
        ></Counter>
        <Counter
          limit={12}
          measure="M"
          text="Garanacija na servis 12 meseci"
          interval={100}
        ></Counter>
        <Counter
          limit={24}
          measure="h"
          text="Vreme remonta 24 sata"
          interval={90}
        ></Counter>
        <Counter
          limit={99}
          measure="%"
          text="Zadovoljnih korisnika"
          interval={20}
        ></Counter>
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
