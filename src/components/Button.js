import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Button = ({ path, children }) => {
  return <Wrapper to={path}>{children}</Wrapper>;
};

const Wrapper = styled(Link)`
  display: inline-block;
  padding: 13px 30px 10px;
  background: var(--clr-orange-1);
  border: 2px solid var(--clr-orange-1);
  color: var(--mainWhite);
  box-shadow: var(--dark-shadow);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 18px;
  line-height: 1.3em;
  font-weight: 400;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
  clip-path: polygon(
    20px 0,
    100% 0,
    100% calc(100% - 20px),
    calc(100% - 20px) 100%,
    0 100%,
    0 20px
  );
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, transparent, #fff, transparent);
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-100%) skewX(-30deg);
    transition: all 1.5s cubic-bezier(0.19, 1, 0.22, 1);
  }

  &:hover {
    background-color: transparent;
    clip-path: none;
    &::before {
      left: 200%;
    }
  }
  //desktop view
  @media screen and (min-width: 676px) {
    padding: 18px 29px 15px;
  }
`;

export default Button;
