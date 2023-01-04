import React from "react";
import styled from "styled-components";
import Wobble from "react-reveal/Wobble";
import Fade from "react-reveal/Fade";


const Advices = () => {
  return (
    <Wrapper className="section ">
      <div className="section-center advices-container">
        <Wobble>
          <div className="advice-header">
            <h2>VAŽNI SAVETI</h2>
            <p>
              Da li ste znali da je preporuka proizvođača automobila da se
              turbina redovno servisira na pređenih 150.000 do 200.000km?
            </p>
          </div>
        </Wobble>
        <Fade top>
          <div className="advice">
            <h4>01</h4>
            <p>
              Redovno posećujte auto servis (redovna zamena filtera ulja i
              vazduha je veoma važna)
            </p>
          </div>
        </Fade>
        <Fade bottom>
          <div className="advice">
            <h4>02</h4>
            <p>Koristite kvalitetna ulja i lubrikante za podmazivanje</p>
          </div>
        </Fade>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  
  .advice-header {
    p {
      padding: 20px 0px 0px 0px;
    }
  }
  .advice {
    padding-top: 29px;
    margin: 0 15px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    h4 {
      font-size: 2rem;
      color: var(--clr-orange-1);
    }
    p {
      padding-left: 15px;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      border-top: 2px solid #242424;
      transition: all 200ms linear 0ms;
    }
    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      border-top: 2px solid #242424;
      transform: scaleX(0);
      border-color: var(--clr-orange-1);
      transition: all 200ms linear 0ms;
    }
    &:hover {
      &::after {
        transform: scaleX(1);
      }
    }
  }
  @media screen and (min-width: 676px) {
    .advices-container {
      padding: 100px 20px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      -webkit-column-gap: 2rem;
      -moz-column-gap: 2rem;
      column-gap: 2rem;
    }
  }
  @media screen and (min-width: 992px) {
    .advices-container {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default Advices;
