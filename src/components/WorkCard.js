import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const WorkCard = ({ className, title, image }) => {
  return (
    <div className={className}>
      <div className="container">
        <GatsbyImage image={image} alt="image" className="work-img" />
        <div className="work-title-container">
          <div className="work-title">
            <h4>{title}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default styled(WorkCard)`
  transition: var(--transition);
  position: relative;
  margin-bottom: 1rem;
  height: 400px;
  .container {
    cursor: pointer;
    width: 100%;
    height: 100%;
    overflow: hidden;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      border-top: 5px solid var(--clr-orange-1);
      visibility: hidden;
      z-index: 4;
      transition: all 200ms linear 0ms;
    }

    &:hover {
      &::before {
        visibility: visible;
      }
      .work-title-container {
        background-color: rgba(22, 22, 22, 0.6);
        h4 {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .work-img {
        transform: scale(1.45) rotate(-1.5deg);
      }
    }
    .work-img {
      width: 100%;
      height: 100%;
      transition: all 200ms linear 0ms;
    }

    .work-title-container {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 3;
      transition: all 0.3s ease-in-out;
      .work-title {
        position: absolute;
        left: 20px;
        top: 40px;
      }
      h4 {
        text-transform: uppercase;
        line-height: 1.55;
        opacity: 0;
        transform: translateY(-10px);
        transition: all 200ms linear 0ms;
      }
    }
  }
`;
