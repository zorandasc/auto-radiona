import React, { useContext } from "react";
import styled from "styled-components";

import { GatsbyContext } from "../context/context";

const Hamburger = () => {
  const { isSidebarOpen, toggleSidebar } = useContext(GatsbyContext);
  return (
    <Wrapper isSidebarOpen={isSidebarOpen}>
      <input
        type="checkbox"
        id="nav-toggle"
        className="nav-toggle"
        onClick={toggleSidebar}
      />
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  .nav-toggle {
    display: none;
  }

  .nav-toggle:checked ~ nav {
    transform: scale(1, 1);
  }

  .nav-toggle:checked ~ nav a {
    opacity: 1;
    /*OCEMO DELAY SAMO KAD PADA ALI NE I KADA SE SKUPLJA*/
    transition: opacity 250ms ease-in-out 250ms;
  }

  .nav-toggle-label {
    //position: absolute;
    //top: 0;
    //left: 0;
    //margin-left: 1em;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .nav-toggle-label span,
  .nav-toggle-label span::before,
  .nav-toggle-label span::after {
    display: block;
    background-color: var(--mainWhite);
    height: 4px;
    width: 2.5em;
    border-radius: 2px;
    position: relative;
    transition: all 350ms ease-in;
  }

  .nav-toggle-label span::before,
  .nav-toggle-label span::after {
    content: "";
    position: absolute;
  }
  .nav-toggle-label span::before {
    bottom: 8px;
  }
  .nav-toggle-label span::after {
    top: 8px;
  }

  /*PROMJENA HAMBURGERA U X*/
  //kevo nav je to radio preko checked atributa
  //.nav-toggle:checked ~ label span{}
  //.nav-toggle:checked ~ label > span::before {}
  //.nav-toggle:checked ~ label > span::after {}
  .nav-toggle ~ label span {
    background: ${(props) => (props.isSidebarOpen ? "transparent" : "")};
  }
  .nav-toggle ~ label > span::before {
    transform: ${(props) =>
      props.isSidebarOpen
        ? "rotate(-45deg) translate(-6px, 5px)"
        : "rotate(0) translateX(0)"};
  }
  .nav-toggle ~ label > span::after {
    transform: ${(props) =>
      props.isSidebarOpen
        ? "rotate(45deg) translate(-6px, -5px)"
        : "rotate(0) translateX(0)"};
  }

  @media screen and (min-width: 1224px) {
    .nav-toggle-label {
      display: none;
    }
  }
`;

export default Hamburger;
