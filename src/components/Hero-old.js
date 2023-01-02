import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery, Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import clouds from "../images/clouds.png";

const Hero = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "car2.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid;

  return (
    <>
      <CloudsImage></CloudsImage>
      <BackgroundImage
        Tag="section"
        className={className}
        fluid={imageData}
        backgroundColor={`#040e18`}
      >
        <article>
          <h1>SERVIS ODRŽAVANJA I PORAVKE MOTORA</h1>
          <h3>Vodeći specijalizovani servis za popravku motora</h3>
          <Link to="/galery" className="btn">
            Galerija
          </Link>
         
        </article>
      </BackgroundImage>
    </>
  );
};

const CloudsImage = styled.div`
  background-image: url(${clouds});
  position: absolute;
  z-index: 100;
  bottom: 0;
  left: 0;
  width: 250.625em;
  height: 43.75em;
  -webkit-animation: cloudLoop 80s linear infinite;
  animation: cloudLoop 80s linear infinite;
  @keyframes cloudLoop {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(-50%, 0, 0);
      transform: translate3d(-50%, 0, 0);
    }
  }
`;

export default styled(Hero)`
  //padding-top: 110px;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  article {
    z-index: 300;
    position: absolute;
    width: 85vw;
    max-width: 800px;
    color: var(--mainWhite);
    text-align: center;
    h1 {
      text-transform: uppercase;
      font-weight: 500;
      line-height: 1.25;
      //margin: 2rem 0 3rem 0;
      letter-spacing: 3px;
    }
    h3 {
      font-weight: 400;
      //font-family: "Caveat", cursive;
    }

    @media (min-width: 800px) {
      /* padding: 0 1rem; */
      a {
        font-size: 1.25rem;
        padding: 0.5rem 1.25rem;
      }
      h1 {
        letter-spacing: 5px;
        margin: 2rem 0 1rem 0;
      }
      h3{
        margin-bottom:1rem ;
      }
    }
  }
`;
