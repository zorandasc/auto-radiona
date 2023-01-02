import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Title from "./Title";
import Button from "./Button";
import services from "../constants/services";

const Services = () => {
  return (
    <Wrapper className="section">
      <div className="section-center services-header">
        <Title title="Naši Servisi" />
        <Button path="/services">SVI SERVISI</Button>
      </div>

      <div className="section-center services-center">
        {services.map((service) => {
          const { id, icon, title, text } = service;
          return (
            <article key={id} className="service">
              <img src={icon} className="service-icon" alt="icon" />
              <h4>{title}</h4>
              <p>{text}</p>
              <div className="detail-link">
                <Link to="/services">DETALJNI SERVIS</Link>
              </div>
            </article>
          );
        })}
        <Button path="/services">SVI SERVISI</Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--clr-black-2);
  color: var(--mainWhite);
  .services-header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    a {
      display: none;
    }
    @media screen and (min-width: 676px) {
      a {
        display: block;
      }
    }
  }
  .service {
    background-color: var(--clr-black-3);
    padding: 3rem 1.5rem;
    margin-bottom: 2rem;
    border-radius: var(--radius);
    text-align: left;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    box-shadow: var(--primary-light-shadow);
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      border-top: 2px solid #242424;
      transition: all 200ms linear 0ms;
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      transition: all 200ms linear 0ms;
      border-top: 3px solid var(--clr-orange-1);
      transform: scaleX(0);
    }
    &:hover {
      box-shadow: var(--primary-dark-shadow);
      &::after {
        transform: scaleX(1);
      }
    }
    .service-icon {
      width: auto;
      height: auto;
      margin-bottom: 1.5rem;
      color: red;
    }
    .detail-link {
      margin-top: 33px;

      a {
        display: flex;
        align-items: center;
        color: #ededed;
        font-size: 16px;
        font-weight: 700;
        transition: 0.2s cubic-bezier(0.24, 0.74, 0.58, 1);

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

  @media screen and (min-width: 676px) {
    .services-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      -webkit-column-gap: 2rem;
      -moz-column-gap: 2rem;
      column-gap: 2rem;
      a {
        display: none;
      }
    }
  }
  @media screen and (min-width: 992px) {
    .services-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default Services;
