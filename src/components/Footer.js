import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { TfiEmail } from "react-icons/tfi";
import { AiOutlinePhone } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
//import { GiAutoRepair } from "react-icons/gi";

import logo from "../images/logo-orange.svg";
import links from "../constants/links";
import socialLinks from "../constants/social_links";

const Footer = () => {
  return (
    <Wrapper>
      <div className="row">
        <div className="cell">
          <div className="title">
            <Link to="/" className="logo-container">
              <img src={logo} alt="web dev" className="logo" />
              {/* 
            <GiAutoRepair className="logo"></GiAutoRepair>
            <span className="white">TURBO</span>
            <span>TIM SERVIS</span>
          */}
            </Link>
          </div>
          <div className="content">
            Turbo Tim Servis je multinacionalna grupa sa velikim iskustvom u
            procesu distribucije, popravke i održavanja auto turbina
          </div>
        </div>
        <div className="cell">
          <div className="title">KONTAKT</div>
          <ul className="content contact">
            <li>
              <TfiEmail className="icon"></TfiEmail>turbotimservis@gmail.com
            </li>
            <li>
              <AiOutlinePhone className="icon"></AiOutlinePhone>(+381) 656 838
              126
            </li>
            <li>
              <BsHouseDoor className="icon"></BsHouseDoor>6 Aprila bb,
              Prijepolje, Srbija
            </li>
          </ul>
        </div>
        <div className="cell">
          <div className="title">POPULARNI SERVISI</div>
          <ul className="content popular">
            <li>
              <Link to="/">Početna</Link>
            </li>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <Link to={link.url} activeClassName="active">
                    {link.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="footer-links social-links">
        {socialLinks.map((link) => {
          return (
            <a
              href={link.url}
              key={link.id}
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              {link.icon}
            </a>
          );
        })}
      </div>
      <h4>
        copyright&copy;{new Date().getFullYear()}.<span> By Nazor Sicda</span>.
        All rights reserved
      </h4>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  //height: 9rem;
  background: var(--clr-black-3);
  text-align: center;
  display: grid;
  place-items: center;
  background: var(--clr-black-4);
  text-align: center;

  @media screen and (min-width: 676px) {
    padding: 2rem;
  }
  h4 {
    margin-top: 0.5rem;
    color: var(--mainWhite);
    font-weight: normal;
    text-transform: capitalize;
    span {
      color: var(--clr-orange-1);
    }
  }
  .footer-links {
    margin: 0 auto 1rem auto;
  }
  .social-links {
    display: flex;
    justify-content: space-around;
    .social-link {
      font-size: 2rem;
      color: var(--mainWhite);
      transition: var(--transition);
      margin: 0 1rem;
      &:hover {
        color: var(--clr-orange-1);
        transform: scale(1.2);
      }
      p {
        color: var(--mainWhite);
        margin-bottom: 0;
        @media (max-width: 576px) {
          font-size: 0.75rem;
        }
      }
    }
  }
  .row {
    padding: 1rem 0;
  }

  .cell {
    padding: 2rem 1rem;
    .title {
      text-align: left;
      padding-bottom: 2rem;
      font-weight: 600;

      @media screen and (min-width: 676px) {
        margin-left: 2rem;
      }
    }
    .content {
      text-align: left;
      margin: 0;
      li {
        padding: 1rem 0;
        display: flex;
        align-items: center;
        position: relative;
        .icon {
          font-size: 2em;
          margin-right: 1em;
        }
      }
      @media screen and (min-width: 676px) {
        margin: 1rem 2rem;
      }
    }
    .contact {
      li::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        border-top: 2px solid #242424;
        transition: all 200ms linear 0ms;
      }
    }
    .popular {
      li {
        text-transform: uppercase;
      }
      li::before {
        content: "";
        display: inline-block;
        width: 8px;
        height: 8px;
        margin-right: 10px;
        background-color: var(--clr-orange-1);
      }
    }

    .logo-container {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      text-align: center;
      .logo {
        font-size: 3rem;
        color: var(--clr-orange-1);
        cursor: pointer;
      }
      span {
        color: var(--clr-orange-1);
        font-size: 1.5rem;
        font-weight: 900;
        margin-bottom: 0;
      }
      .white {
        color: var(--mainWhite);
      }
    }
  }

  @media screen and (min-width: 676px) {
    .row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      -webkit-column-gap: 2rem;
      -moz-column-gap: 2rem;
      column-gap: 2rem;
    }
  }
  @media screen and (min-width: 992px) {
    .row {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default Footer;
