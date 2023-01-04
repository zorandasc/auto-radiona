import React from "react";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";

import Button from "./Button";

const Works = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(name: { eq: "work10" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      image2: file(name: { eq: "work" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      image3: file(name: { eq: "work2" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);
  const image1 = getImage(data.image1);
  const image2 = getImage(data.image2);
  const image3 = getImage(data.image3);
  return (
    <>
      {/*FOR MOBILE AND MIDLE SCREEN */}
      <Wrapper1>
        <div className="box-container ">
          <Slide left>
            <div className="box image-container">
              <StaticImage
                src="../images/work10.jpg"
                layout="constrained"
                //placeholder="blurred"
                className="img"
                alt="Herro image"
              ></StaticImage>

              {/*FOR MOBILE CARD VIEW TWO H3 FOR TOP LINE */}
              <Zoom top text>
                <div className="inner-img-title">
                  <h3>ŠTA JE TURBINA I ČEMU </h3>
                  <h3>SLUŽI?</h3>
                </div>
              </Zoom>
            </div>
          </Slide>

          <div className="box text-container">
            {/*FOR MIDLE SCREEN VIEW */}
            <Slide right>
              <h3>ŠTA JE TURBINA I ČEMU SLUŽI?</h3>
            </Slide>
            <Zoom top cascade>
              <p>
                Osnovna uluga turbine je da u cilindre motora ubacuje više
                vazduha čime se povećava efikasnost i snaga motora. Za optimalno
                funkcionisanje turbine, neophodno je permanentno podmazivanje
                pokretnih elemenata.
              </p>
            </Zoom>
            <Button path="/">VIŠE</Button>
          </div>
        </div>
        <div className="box-container reverse">
          <div className="box text-container">
            <Slide left>
              <h3>NAJČEŠĆI RAZLOZI KVARA TURBINE</h3>
            </Slide>
            <Zoom top cascade>
              <ul>
                <li>Nedostatak ulja i prekid podmazivanja</li>
                <li>Neredovna zamena filtera ulja i vazduha</li>
                <li>Nečistoća ulja i ulazak stranog tela</li>
                <li>Broj pređenih kilometara</li>
              </ul>
            </Zoom>
            <Button path="/">VIŠE</Button>
          </div>
          <Slide right>
            <div className="box image-container">
              <StaticImage
                src="../images/work.jpg"
                layout="constrained"
                //placeholder="blurred"
                className="img"
                alt="Herro image"
              ></StaticImage>
              <Zoom top text>
                <div className="inner-img-title">
                  <h3>NAJČEŠĆI RAZLOZI KVARA </h3>
                  <h3>TURBINE</h3>
                </div>
              </Zoom>
            </div>
          </Slide>
        </div>
        <div className="box-container ">
          <Slide left>
            <div className="box image-container">
              <StaticImage
                src="../images/work2.jpg"
                layout="constrained"
                //placeholder="blurred"
                className="img"
                alt="Herro image"
              ></StaticImage>
              <Zoom top text>
                <div className="inner-img-title">
                  <h3>SIMPTOMI KVARA TURBINE</h3>
                </div>
              </Zoom>
            </div>
          </Slide>
          <div className="box text-container">
            <Slide right>
              <h3>SIMPTOMI KVARA TURBINE</h3>
            </Slide>
            <Zoom top cascade>
              <ul>
                <li>Gubitak snage motora</li>
                <li>Promena zvuka rada turbine</li>
                <li>Pojačan dim iz auspuha</li>
                <li>Pojačana potrošnja ulja</li>
              </ul>
            </Zoom>
            <Button path="/">VIŠE</Button>
          </div>
        </div>
      </Wrapper1>
      {/*FOR WIDE SCREEN */}
      <Wrapper2 className="section ">
        <div className="section-center projects-center">
          <article className="project">
            <Bounce left>
              <div className="project-img">
                <GatsbyImage image={image1} className="img" alt="image" />
              </div>
            </Bounce>
            <Zoom top cascade>
              <div className="project-info">
                <div className="box text-container">
                  <Zoom top cascade>
                    <h3>ŠTA JE TURBINA I ČEMU SLUŽI?</h3>
                    <p>
                      Osnovna uluga je da u cilindre motora ubacuje više vazduha
                      čime se povećava efikasnost i snaga motora. Za optimalno
                      funkcionisanje turbine, neophodno je permanentno
                      podmazivanje pokretnih elemenata.
                    </p>
                  </Zoom>
                  <Button path="/">VIŠE</Button>
                </div>
              </div>
            </Zoom>
          </article>
          <article className="project">
            <Bounce right>
              <div className="project-img">
                <GatsbyImage image={image2} className="img" alt="image" />
              </div>
            </Bounce>
            <div className="project-info">
              <div className="box text-container">
                <Zoom top cascade>
                  <h3>NAJČEŠĆI RAZLOZI KVARA TURBINE</h3>
                  <ul>
                    <li>Nedostatak ulja i prekid podmazivanja</li>
                    <li>Neredovna zamena filtera ulja i vazduha</li>
                    <li>Nečistoća ulja i ulazak stranog tela</li>
                    <li>Broj pređenih kilometara</li>
                  </ul>
                </Zoom>
                <Button path="/">VIŠE</Button>
              </div>
            </div>
          </article>
          <article className="project">
            <Bounce left>
              <div className="project-img">
                <GatsbyImage image={image3} className="img" alt="image" />
              </div>
            </Bounce>
            <div className="project-info">
              <div className="box text-container">
                <Zoom top cascade>
                  <h3>SIMPTOMI KVARA TURBINE</h3>

                  <ul>
                    <li>Gubitak snage motora</li>
                    <li>Promena zvuka rada turbine</li>
                    <li>Pojačan dim iz auspuha</li>
                    <li>Pojačana potrošnja ulja</li>
                  </ul>
                </Zoom>
                <Button path="/">VIŠE</Button>
              </div>
            </div>
          </article>
        </div>
      </Wrapper2>
    </>
  );
};

const Wrapper1 = styled.section`
  background-color: var(--clr-black-3);
  color: var(--mainWhite);
  width: 100%;

  .box-container,
  .reverse {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    flex-direction: column !important;
  }
  .reverse {
    flex-direction: column-reverse !important;
  }

  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;
  }
  .image-container {
    overflow: hidden;
    height: 20rem;
    position: relative;
    .img {
      width: 100%;
      height: 100%;
      transition: all 200ms linear 0ms;
      filter: brightness(60%);
      &:hover {
        transform: scale(1.45) rotate(-1.5deg);
      }
    }
    .inner-img-title {
      position: absolute;
      left: 20px;
      bottom: 21px;
      border-top: 2px solid var(--clr-orange-1);
      padding-top: 7px;
    }
    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      border-top: 3px solid #555;
    }
  }
  .text-container {
    h3 {
      display: none;
    }
    padding: 20px 25px 80px 25px;
    ul {
      margin-bottom: 18px;
      li {
        margin-top: 12px;
      }
      li::before {
        content: "";
        display: inline-block;
        width: 15px;
        height: 15px;
        margin-right: 10px;
        background-color: var(--clr-orange-1);
      }
    }
  }

  //desktop view
  @media screen and (min-width: 676px) {
    .image-container {
      height: 30rem;
      .inner-img-title {
        display: none;
      }
      &::after {
        display: none;
      }
    }
    .text-container {
      padding: 80px 25px 80px 25px;
      h3 {
        display: inline;
      }
      p {
        padding-right: 2rem;
      }
    }
  }
  @media screen and (min-width: 992px) {
    .box {
      width: 50%;
    }
    .box-container,
    .reverse {
      flex-direction: row !important;
    }
    .text-container {
      padding: 0px 30px 17px 70px;
    }
  }
  @media screen and (min-width: 1600px) {
    display: none;
  }
`;

const Wrapper2 = styled.section`
  display: none;
  background: var(--clr-black-3);
  .project {
    display: grid;
    margin-bottom: 4rem;
    &:hover .project-img .img {
      transform: scale(1.45) rotate(-1.5deg);
    }
  }
  .project-img {
    overflow: hidden;
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    height: 19rem;
    z-index: 1;
    clip-path: polygon(
      40px 0,
      100% 0,
      100% calc(100% - 40px),
      calc(100% - 40px) 100%,
      0 100%,
      0 40px
    );
    .img {
      width: 100%;
      height: 100%;
      transition: all 200ms linear 0ms;
      filter: brightness(60%);
    }
  }

  .project-info {
    background: var(--clr-black-3);
    padding: 1rem 2rem;
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    opacity: 0.8;
    .box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      position: relative;
    }
    .text-container {
      padding: 20px 15px 40px 25px;
      ul {
        margin-bottom: 18px;
        li {
          margin-top: 12px;
        }
        li::before {
          content: "";
          display: inline-block;
          width: 15px;
          height: 15px;
          margin-right: 10px;
          background-color: var(--clr-orange-1);
        }
      }
    }
  }

  @media screen and (min-width: 576px) {
    .project-img {
      height: 19rem;
    }
  }
  @media screen and (min-width: 768px) {
    .project-img {
      height: 22rem;
    }
  }
  @media screen and (min-width: 992px) {
    .project {
      grid-template-columns: repeat(12, 1fr);
      align-items: center;
    }
    .project-img {
      grid-column: 1 / span 8;
      /* grid-column-end: 8; */
      grid-row: 1 / 1;
      height: 30rem;
      border-radius: var(--radius);
      box-shadow: var(--dark-shadow);
    }
    .project-info {
      border-radius: var(--radius);
      box-shadow: var(--primary-dark-shadow);
      z-index: 1;
      grid-column: 5 /12;
      grid-row: 1 / 1;
    }
    .project:nth-of-type(even) .project-img {
      grid-column: 5 / -1;
      grid-row: 1 / 1;
    }
    .project:nth-of-type(even) .project-info {
      grid-column: 2 / span 7;
      grid-row: 1 / 1;
      text-align: left;
    }
  }
  @media screen and (min-width: 1600px) {
    display: block;
  }
`;

export default Works;
