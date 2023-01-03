import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { FaAlignRight } from "react-icons/fa";
//import { GiAutoRepair } from "react-icons/gi";
import { HideOn } from "react-hide-on-scroll";
import Slide from "react-reveal/Slide";
import logo from "../images/logo-orange.svg";

import { GatsbyContext } from "../context/context";
import links from "../constants/links";
import socialLinks from "../constants/social_links";

const Navbar = () => {
  const { showSidebar } = useContext(GatsbyContext);
  return (
    <Wrapper>
      {/*Shown navbar bcg on offset while scrolling for different device px*/}
      <HideOn inverse height={100}>
        <Slide top>
          <div className="wrapperBcg"></div>
        </Slide>
      </HideOn>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" className="logo-container">
            <img src={logo} alt="web dev" className="logo" />
            {/* 
            <GiAutoRepair className="logo"></GiAutoRepair>
            <span className="white">TURBO</span>
            <span>TIM SERVIS</span>
          */}
          </Link>
          <button type="button" className="toggle-btn" onClick={showSidebar}>
            <FaAlignRight />
          </button>
        </div>
        <div className="nav-links">
          {links.map((link) => {
            return (
              <Link key={link.id} to={link.url} activeClassName="active">
                {link.text}
              </Link>
            );
          })}
        </div>

        <span className="tel-number">(+381) 656 838 126</span>

        <div className="social-links">
          {socialLinks.map((link) => {
            return (
              <a href={link.url} key={link.id} className="social-link">
                {link.icon}
              </a>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  //MOBILE VIEW
  position: fixed;
  left: 0;
  width: 100%;
  z-index: 400;
  height: 5.5rem;
  display: flex;
  align-items: center;
  .wrapperBcg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    background-color: rgb(0, 0, 0, 0.8);
    z-index: -1;
    height: 5.5rem;
    border-bottom: 1px solid var(--clr-orange-1);
    box-shadow: var(--dark-shadow);
  }
  .nav-center {
    width: 90vw;
    max-width: 2200px;
    margin: 0 auto;
  }
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo-container {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      .logo {
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
    .toggle-btn {
      font-size: 2rem;
      background: transparent;
      border-color: transparent;
      color: var(--mainWhite);
      cursor: pointer;
      transition: var(--transition);
      &:hover {
        color: var(--clr-orange-1);
      }
    }
  }

  .nav-links,
  .social-links,
  .tel-number {
    display: none;
  }
  //DESKTOP VIEW

  @media screen and (min-width: 1224px) {
    .toggle-btn {
      display: none;
    }
    .nav-links {
      display: flex;
      justify-content: flex-end;
      a {
        margin-right: 2rem;
        text-transform: uppercase;
        color: var(--mainWhite);
        font-weight: 700;
        letter-spacing: var(--spacing);
        transition: var(--transition);
        padding: 0.5rem 0;
        position: relative;
        &::before {
          transition: all 200ms linear 0ms;
          position: absolute;
          content: "";
          bottom: -6px;
          z-index: 100;
          display: block;
          width: 100%;
          height: 2px;
          border-radius: 14px;
          left: 50%;
          transform: translateX(-50%) scale(0);
          background-color: var(--clr-orange-1);
        }
        &:hover {
          color: var(--clr-orange-1);
          &::before {
            transform: translateX(-50%) scale(1);
          }
        }
      }
      .active {
        color: var(--clr-orange-1);
        box-shadow: 0px 2px var(--clr-orange-1);
        &:hover::before {
          display: none;
        }
      }
    }

    .nav-center {
      display: grid;
      grid-template-columns: 1fr 1fr 0.5fr 0.8fr;
      align-items: center;
      //gap:2rem ;
    }

    .social-links {
      display: flex;
      justify-content: flex-end;
      .social-link {
        font-size: 1.55rem;
        color: var(--mainWhite);
        transition: var(--transition);
        margin: 0 0.6rem;
      }
      .social-link:hover {
        color: var(--clr-orange-1);
      }
    }
    .tel-number {
      text-align: center;
      font-weight: 700;
      font-size: 1.1rem;
      line-height: 1.1em;
      position: relative;
      display: block;
      background-color: inherit;
      overflow: hidden;
      background-color: initial;
      padding: 10px 10px;
      clip-path: polygon(
        20px 0,
        100% 0,
        100% calc(100% - 20px),
        calc(100% - 20px) 100%,
        0 100%,
        0 20px
      );
      overflow: hidden;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border: 2px solid var(--clr-orange-1);
      }
    }
  }
`;

export default Navbar;
