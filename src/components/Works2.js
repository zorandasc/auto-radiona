import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

import Button from "./Button";

const Works2 = () => {
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
    <Wrapper className="section ">
      <div className="section-center projects-center">
        <article className="project">
          <div className="project-img">
            <GatsbyImage image={image1} className="img" alt="image" />
          </div>
          <div className="project-info">
            <div className="box text-container">
              <h3>ŠTA JE TURBINA I ČEMU SLUŽI?</h3>
              <p>
                Osnovna uluga je da u cilindre motora ubacuje više vazduha čime
                se povećava efikasnost i snaga motora. Za optimalno
                funkcionisanje turbine, neophodno je permanentno podmazivanje
                pokretnih elemenata.
              </p>
              <Button path="/">VIŠE</Button>
            </div>
          </div>
        </article>
        <article className="project">
          <div className="project-img">
            <GatsbyImage image={image2} className="img" alt="image" />
          </div>
          <div className="project-info">
            <div className="box text-container">
              <h3>NAJČEŠĆI RAZLOZI KVARA TURBINE</h3>
              <ul>
                <li>Nedostatak ulja i prekid podmazivanja</li>
                <li>Neredovna zamena filtera ulja i vazduha</li>
                <li>Nečistoća ulja i ulazak stranog tela</li>
                <li>Broj pređenih kilometara</li>
              </ul>
              <Button path="/">VIŠE</Button>
            </div>
          </div>
        </article>
        <article className="project">
          <div className="project-img">
            <GatsbyImage image={image3} className="img" alt="image" />
          </div>
          <div className="project-info">
            <div className="box text-container">
              <h3>SIMPTOMI KVARA TURBINE</h3>
              <ul>
                <li>Gubitak snage motora</li>
                <li>Promena zvuka rada turbine</li>
                <li>Pojačan dim iz auspuha</li>
                <li>Pojačana potrošnja ulja</li>
              </ul>
              <Button path="/">VIŠE</Button>
            </div>
          </div>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
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
      padding: 20px 25px 40px 25px;
      ul {
        margin-bottom: 18px;
        li {
          text-transform: capitalize;
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

export default Works2;
