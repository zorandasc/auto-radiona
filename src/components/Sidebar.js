import React, { useContext } from "react";
import styled from "styled-components";
//import { MdClose } from "react-icons/md";
import { Link } from "gatsby";

import { GatsbyContext } from "../context/context";
import links from "../constants/links";
import socialLinks from "../constants/social_links";

import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const { isSidebarOpen, hideSidebar } = useContext(GatsbyContext);
  return (
    <Wrapper isSidebarOpen={isSidebarOpen}>
      <button className="close-btn" type="button" onClick={hideSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <ul className="sidebar-links">
          <li>
            <Link to="/" onClick={hideSidebar} activeClassName="active">
              Početna
            </Link>
          </li>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <Link
                  to={link.url}
                  onClick={hideSidebar}
                  activeClassName="active"
                >
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="social-links sidebar-icons">
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
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  background: var(--clr-black-2);
  position: fixed;
  top: 0;
  left: 0;
  width: 95%;
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

  .sidebar-links li a {
    display: block;
    text-align: center;
    text-transform: capitalize;
    color: var(--mainWhite);
    letter-spacing: var(--spacing);
    margin-bottom: 0.5rem;
    font-size: 2rem;
    transition: var(--transition);
    border-radius: var(--radius);
    border-bottom: 1px solid var(--mainWhite);
  }
  .active,
  .sidebar-links li a:hover {
    background: var(--clr-orange-1);
    color: var(--clr-black-2);
  }
  .close-btn {
    position: absolute;
    right: 4.75%;
    top: 2.75%;
    font-size: 2.5rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-orange-1);
    cursor: pointer;
  }
  .social-links {
    margin-top: 4rem;
    display: flex;
    justify-content: flex-end;
  }
  .social-link {
    font-size: 1.55rem;
    color: var(--mainWhite);
    transition: var(--transition);
    margin: 0 1rem;
  }
  .social-link:hover {
    color: var(--clr-orange-1);
  }
  @media screen and (min-width: 992px) {
    transform: translateX(-100%);
  }
`;

export default Sidebar;
