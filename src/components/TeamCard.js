import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import socialLinks from "../constants/social_links";

const TeamCard = ({ className, name, jobTitle, image }) => {
  return (
    <div className={className}>
      <div className="container">
        {/*<StaticImage
          src={`../images/team03.jpg`}
          layout="constrained"
          placeholder="blurred"
          transformOptions={{ grayscale: true }}
          className="member-img"
          alt="Herro image"
  ></StaticImage>*/}
        <GatsbyImage image={image} alt="Herro image" className="member-img" />
        <div className="member-info">
          <h4>{name}</h4>
          <p>{jobTitle}</p>
        </div>
        <div className="member-social">
          {socialLinks.map((link) => {
            return (
              <a href={link.url} key={link.id} className="social-link">
                {link.icon}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default styled(TeamCard)`
  transition: var(--transition);
  position: relative;
  margin-bottom: 2rem;
  height: 340px;
  .container {
    cursor: pointer;
    width: 100%;
    height: 100%;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      border-top: 5px solid var(--clr-orange-1);
      visibility: hidden;
      z-index: 3;
      transition: all 200ms linear 0ms;
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      background-color: rgba(13, 13, 13, 0.9);
      z-index: 2;
      transform: scaleY(0);
      transition: all 200ms linear 0ms;
    }
    &:hover {
      &::before {
        visibility: visible;
      }
      &::after {
        transform: scaleY(1);
      }
      .member-info {
        h4,
        p {
          opacity: 1;

          transform: translateY(0);
        }
      }
      .member-social {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  .member-img {
    width: 100%;
    height: 100%;
  }

  .member-info {
    position: absolute;
    top: 40px;
    padding-right: 40px;
    left: 40px;
    z-index: 3;
    h4,
    p {
      opacity: 0;
      transform: translateY(-10px);
      transition: all 200ms linear 0ms;
    }
  }
  .member-social {
    position: absolute;
    display: flex;
    justify-content: space-around;
    left: 40px;
    bottom: 40px;
    z-index: 3;
    opacity: 0;
    transform: translateY(10px);
    transition: all 200ms linear 0ms;
    .social-link {
      display: inline-block;
      //background-color: #d16527;
      color: var(--clr-orange-1);
      font-size: 1.55rem;
      width: 30px;
      height: 30px;
      margin: 0 0.3rem;
      line-height: 30px;
      text-align: center;
      //border: 1px solid #d16527;
      transition: 0.2s cubic-bezier(0.24, 0.74, 0.58, 1);
      &:hover {
        color: #ececec;
        background-color: initial;

        transform: translateY(-4px);
      }
    }
  }
`;
