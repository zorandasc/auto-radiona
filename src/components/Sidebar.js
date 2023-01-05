import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";

import logo from "../images/logo-orange.svg";
import { GatsbyContext } from "../context/context";
import links from "../constants/links";
import socialLinks from "../constants/social_links";

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useContext(GatsbyContext);
  return (
    <Wrapper isSidebarOpen={isSidebarOpen}>
      <div className="sidebar-header">
        <Link to="/" onClick={toggleSidebar} className="logo-container">
          <img src={logo} alt="web dev" className="logo" />
        </Link>
      </div>
      <div className="sidebar-content">
        {isSidebarOpen && (
          <Bounce bottom cascade>
            <ul className="sidebar-links">
              <li>
                <Link to="/" onClick={toggleSidebar} activeClassName="active">
                  Početna
                </Link>
              </li>
              {links.map((link) => {
                return (
                  <li key={link.id}>
                    <Link
                      to={link.url}
                      onClick={toggleSidebar}
                      activeClassName="active"
                    >
                      {link.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Bounce>
        )}
        {isSidebarOpen && (
          <Zoom bottom cascade>
            <span className="tel-number">(+381) 656 838 126</span>
          </Zoom>
        )}

        {isSidebarOpen && (
          <Zoom bottom cascade>
            <ul className="social-links">
              {socialLinks.map((link) => {
                return (
                  <li key={link.id}>
                    <a
                      href={link.url}
                      className="social-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.icon}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Zoom>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  background: var(--clr-black-3);
  position: fixed;
  top: 0;
  left: 0;
  width: 80%;
  height: 100%;
  z-index: 999;
  display: grid;
  place-items: center;
  opacity: 0;
  box-shadow: var(--primary-dark-shadow);
  transition: var(--transition);
  transform: translateX(-100%);
  transform: ${(props) =>
    props.isSidebarOpen ? "translateX(0)" : "translateX(-100%)"};
  opacity: ${(props) => (props.isSidebarOpen ? "1" : "0")};
  .sidebar-header {
    position: absolute;
    width: 100%;
    top: 1%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 1rem;
  }

  .sidebar-content {
    width: 100%;
  }

  .sidebar-links {
    margin-bottom: 3rem;
  }

  .sidebar-links li a {
    display: block;
    text-align: center;
    text-transform: capitalize;
    color: var(--mainWhite);
    letter-spacing: var(--spacing);
    padding: 0.5rem 0;
    margin: 0 1rem;
    font-size: 1.6rem;
    transition: var(--transition);
    border-radius: var(--radius);
    border-bottom: 1px solid var(--mainWhite);
  }
  .active,
  .sidebar-links li a:hover {
    background: var(--clr-orange-1);
    color: var(--clr-black-3);
  }
  .close-btn {
    font-size: 2.5rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-orange-1);
    cursor: pointer;
  }
  .social-links {
    position: absolute;
    bottom: 5%;
    left: 0;
    width: 100%;
    margin-top: 4rem;
    display: flex;
    justify-content: space-around;
  }
  .social-link {
    font-size: 2rem;
    background-color: var(--clr-orange-1);
    color: var(--clr-black-2);
    transition: var(--transition);
    margin: 0 1rem;
    display: flex;
  }
  .social-link:hover {
    color: var(--mainWhite);
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
    margin: 0 1rem;
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
  @media screen and (min-width: 992px) {
    transform: translateX(-100%);
  }
`;

export default Sidebar;
