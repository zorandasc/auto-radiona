import React from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

import Button from "./Button";

const Prices = () => {
  return (
    <Wrapper className="section">
      <div className="section-center prices-center">
        <div className="prices-info">
          {/* 
          <h2>PRISTUPAČNI CIJENOVNI PLANOVI</h2>
          <p>
            Mi pružamo najbolji servis automobila i preporučujemo najbolje
            proizvode kroz proces nezavisnog nadzora
          </p>
          <ul>
            <li>GARANCIJA NA SERVIS 12 MESECI</li>
            <li>VREME REMONTA 24h</li>
            <li>ON-LINE ZAKAZIVANJE</li>
          </ul>
          */}
        </div>
        {/* 
        <PriceCard price="59.99" title="PERSONALNI" shadow></PriceCard>
        <PriceCard price="99.99" title="PROFESIONALNI"></PriceCard>
        */}
      </div>
    </Wrapper>
  );
};

const PriceCard = ({ price, title, shadow }) => {
  return (
    <CardWrapper shadow={shadow}>
      <div className="pricing-header">
        <h6 className="pricing-title">{title}</h6>
        <h2 className="pricing-price">
          <span>RSD </span>
          <span>{price}</span>
        </h2>
        <div className="pricing-time">po mjesecu</div>
      </div>
      <div className="pricing-content">
        <ul>
          <li>
            Scheduled servicing <FaCheck></FaCheck>
          </li>
          <li>
            Component wear reminders <FaCheck></FaCheck>
          </li>
          <li>
            Introduce new revenue streams<FaCheck></FaCheck>
          </li>
          <li className="shadow">
            All routine maintenance <FaCheck></FaCheck>
          </li>
          <li className="shadow">
            24/7 customer service<FaCheck></FaCheck>
          </li>
        </ul>
        <Button path="/">PRIHVATI</Button>
      </div>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  position: relative;
  padding: 30px;
  text-align: center;
  background-color: var(--clr-black-4);
  box-shadow: var(--primary-light-shadow);
  margin-bottom: 2rem;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-top: 4px solid var(--clr-orange-1);
    transform: scaleX(0);
    transition: all 200ms linear 0ms;
  }
  &:hover {
    box-shadow: var(--primary-dark-shadow);
    &::before {
      transform: scaleX(1);
    }
  }
  .pricing-header {
    display: inline-block;
    border-bottom: 2px solid #505050;
    padding-bottom: 28px;
    margin-bottom: 24px;
    .pricing-title {
      font-size: 15px;
      color: #c2c2c2;
      margin-bottom: 12px;
    }
    .pricing-time {
      font-size: 14px;
      color: #fff;
      margin-top: 4px;
    }
  }
  .pricing-content {
    ul {
      padding-bottom: 30px;
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style: none;
        font-size: 16px;
        line-height: 25px;
        margin-bottom: 16px;
      }
      .shadow {
        color: ${(props) => (props.shadow ? "#707070" : "inherit")};
      }
    }
  }
`;

const Wrapper = styled.section`
  background-color: var(--clr-black-3);
  color: var(--mainWhite);
  .prices-info {
    margin-bottom: 2rem;
    ul {
      li {
        margin-top: 12px;
      }
      li::before {
        content: "";
        display: inline-block;
        width: 15px;
        height: 15px;
        margin-right: 10px;
        background-color: var(--clr-orange-1);
      }
    }
  }

  @media screen and (min-width: 676px) {
    .prices-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      -webkit-column-gap: 2rem;
      -moz-column-gap: 2rem;
      column-gap: 2rem;
    }
  }
  @media screen and (min-width: 992px) {
    .prices-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default Prices;
