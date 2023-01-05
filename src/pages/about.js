import React from "react";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import { StaticImage, getImage } from "gatsby-plugin-image";
import BackgroundImage from "gatsby-background-image";
import Bounce from "react-reveal/Bounce";

import { Layout, Title, TeamCard, Button, Seo } from "../components";

/*
const tags = [
  "HTML",
  "CSS",
  "JAVA",
  "SCRIPT",
  "REACT.JS",
  "NODE.JS",
  "GATSBY.JS",
];
*/
const about = ({ data }) => {
  // Set ImageData.
  const imageData1 = data.desktop1.childImageSharp.fluid;
  const imageData2 = data.desktop2.childImageSharp.fluid;
  const image1 = getImage(data.image1);
  const image2 = getImage(data.image2);
  const image3 = getImage(data.image3);
  const image4 = getImage(data.image4);

  const members = [
    { id: 1, name: "Alonzo Morning", job: "Ingener", image: image1 },
    { id: 2, name: "Michel Sumaher", job: "Mehanic", image: image2 },
    { id: 3, name: "Mika Raikonen", job: "Asswmbly Worker", image: image3 },
    { id: 4, name: "John Hakinen", job: "Designer", image: image4 },
    { id: 5, name: "Rubi Fernandez", job: "Tehnical Staff", image: image3 },
    { id: 6, name: "Toni Burton", job: "Painter", image: image1 },
  ];

  return (
    <Layout>
      <Wrapper>
        <BackgroundImage
          Tag="section"
          fluid={imageData1}
          backgroundColor={`#040e18`}
          className="about-header-container"
        >
          <div className="section-center about-header-title ">
            <ul>
              <li>
                <Link to="/">POČETNA</Link>
              </li>
              <li>O NAMA</li>
            </ul>
            <div>
              <h1>O NAMA</h1>
            </div>
          </div>
        </BackgroundImage>

        <div className="section-center about-center">
          <Bounce left>
            <div className="about-img">
              <StaticImage
                src="../images/about-3.jpg"
                layout="constrained"
                //placeholder="blurred"
                className="img"
                alt="Herro image"
              ></StaticImage>
            </div>
          </Bounce>
          <article className="about-text">
            <Title title="MI ČINIMO POPRAVKU AUTA UGODNIM" />
            <p>
              Turbo Tim Servis je grupa sa dugom tradicijom i velikim iskustvom
              u auto industriji.
            </p>
            <p>
              TURBO TIM SERVIS će uz pomoć znanja i iskustva stećenog
              dosadašnjim radom u oblasti automehanike i veština stećenih u radu
              sa savremenih mašinama se postarati da Vaš motor, zahvaljujući
              ispravnoj turbini, postigne maksimalne performanse.
            </p>
            <p>
              Ukoliko sumnjate da postoje problemi u radu vaše turbine,
              kontaktirajte TURBO TIM SERVIS.
            </p>
            <div className="about-btn-desktop">
              <Button path="/contact">Kontakt</Button>
            </div>
            {/* 
            <div className="about-stack">
              {tags.map((item, index) => {
                return <span key={index}>{item}</span>;
              })}
            </div>
            */}
          </article>
        </div>
        {/* 
        <div className="section-center team">
          <div className="section-title">
            <h3>ČLANOVI EKSPERTSKOG TIMA </h3>
          </div>
          <div className="members">
            {members.map((member) => (
              <TeamCard
                key={member.id}
                name={member.name}
                jobTitle={member.job}
                image={member.image}
              ></TeamCard>
            ))}
          </div>
        </div>
        */}
        <BackgroundImage
          Tag="section"
          fluid={imageData2}
          backgroundColor={`#040e18`}
          className="about-book-container"
        >
          <div className="overlay"></div>
          <div className="section-center about-book-title ">
            <h2>ZAKAŽITE VAŠ SERVIS DANAS</h2>
            <div>
              <p>
                Sa kvalitetnim dijelovima za svaki budžet, prijateljsko i
                istrenirano osoblje učiniti će da svaki vaš posjet bude
                informativan i bez po muke.
              </p>
            </div>
            <Button path="/contact">ZAKAŽITE ODMAH</Button>
          </div>
        </BackgroundImage>
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query {
    desktop1: file(relativePath: { eq: "page-title-bg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    desktop2: file(relativePath: { eq: "about-bg-01.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image1: file(name: { eq: "team01" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          transformOptions: { grayscale: true }
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    image2: file(name: { eq: "team02" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          transformOptions: { grayscale: true }
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    image3: file(name: { eq: "team03" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          transformOptions: { grayscale: true }
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    image4: file(name: { eq: "team04" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          transformOptions: { grayscale: true }
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;

const Wrapper = styled.section`
  padding: 8rem 0;
  background-color: var(--clr-black-3);
  color: var(--mainWhite);

  /*  HEADER SECTION */
  .about-header-container {
    text-align: left;
    padding: 54px 0;
    position: relative;
    .about-header-title {
      width: 100%;
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;

      ul {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin: 0 0 31px;
        list-style: none;
        color: var(--clr-orange-1);

        li:first-child a {
          color: var(--mainWhite);
        }
        li:first-child a:hover {
          color: var(--clr-orange-1);
        }

        li:not(:first-child)::before {
          content: "•";
          border-radius: 50%;
          padding: 0 11px;
          color: var(--clr-orange-1);
          font-size: 10px;
          font-weight: 900;
          display: inline-block;
        }
      }
    }
  }

  /*  CENTER SECTION */
  .about-center {
    padding: 100px 0;
  }

  .about-img {
    overflow: hidden;
    margin-bottom: 2rem;
    height: 30rem;
    width: 100%;
    display: block;
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
      &:hover {
        transform: scale(1.45) rotate(-1.5deg);
      }
    }
  }
  .about-text .section-title {
    margin-bottom: 2rem;
    text-align: left;
  }

  .about-text p {
    line-height: 2;
  }

  .about-stack span {
    display: inline-block;
    background: var(--clr-black-1);
    color: var(--clr-orange-1);
    margin: 0.25rem;
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.85rem;
  }
  .about-stack span {
    margin-top: 0.5rem;
  }

  @media screen and (min-width: 992px) {
    .about-center {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      align-items: center;
      column-gap: 4rem;
    }
    .about-img {
      grid-column: 1 / span 5;
      margin-bottom: 0;
    }
    .about-text {
      grid-column: 6 / -1;
    }
  }

  /*  TEAM SECTION */

  .team {
    margin-top: 4rem;
    h3 {
      // padding-bottom: 3rem;
    }
    .section-title {
      position: relative;
      padding-bottom: 35px;
      margin-bottom: 39px;
      width: 100%;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        border-top: 2px solid #242424;
        transition: all 200ms linear 0ms;
      }
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        border-top: 2px solid #242424;
        transform: scaleX(0);
        border-color: var(--clr-orange-1);
        transition: all 200ms linear 0ms;
      }
      position: relative;
      padding-bottom: 35px;
      margin-bottom: 39px;
      width: 100%;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        border-top: 2px solid #242424;
        transition: all 200ms linear 0ms;
      }
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        border-top: 2px solid #242424;
        transform: scaleX(0);
        border-color: var(--clr-orange-1);
        transition: all 200ms linear 0ms;
      }
    }
    &:hover {
      .section-title::after {
        transform: scaleX(1);
      }
    }
  }

  @media screen and (min-width: 676px) {
    .members {
      display: grid;
      grid-template-columns: 1fr 1fr;
      -webkit-column-gap: 2rem;
      -moz-column-gap: 2rem;
      column-gap: 2rem;
    }
  }
  @media screen and (min-width: 992px) {
    .members {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  /*  BOOK SECTION */
  .about-book-container {
    margin-top: 90px;
    margin-bottom: 100px;
    padding: 76px 0px 96px 0px;
    position: relative;
    .overlay {
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      position: absolute;
      background-color: #000000;
      opacity: 0.55;
      z-index: -1;
    }
    .about-book-title {
      max-width: 1200px;

      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 15px;
      p {
        padding: 20px 0px 0px 0px;
      }
      @media screen and (min-width: 676px) {
        p {
          width: calc(4.6em * 6.1) !important;
        }
      }
    }
  }
`;

export const Head = () => <Seo title="O Nama" />;

export default about;
