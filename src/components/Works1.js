import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import WorkCard from "./WorkCard";

const Works1 = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(name: { eq: "turbina1" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      image2: file(name: { eq: "turbina2" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      image3: file(name: { eq: "turbina3" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      image4: file(name: { eq: "work4" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);
  const image1 = getImage(data.image1);
  const image2 = getImage(data.image2);
  const image3 = getImage(data.image3);
  const image4 = getImage(data.image4);

  const works = [
    { id: 1, title: "Besplatna Diagnoza motora", image: image1 },
    { id: 2, title: "Premium pregled kočnica", image: image2 },
    { id: 3, title: "Popravka unutrašnjeg prenosa", image: image3 },
    { id: 4, title: "Tehnički pregled vozila", image: image4 },
  ];
  return (
    <Wrapper className="section">
      <div className="section-center work-section">
        <div className="section-title">
          <h2>Popularni Artikli</h2>
        </div>
        <div className="works">
          {works.map((work) => (
            <WorkCard
              key={work.id}
              title={work.title}
              image={work.image}
            ></WorkCard>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--clr-black-3);
  color: var(--mainWhite);
  .work-section {
    .section-title {
      position: relative;
      padding-bottom: 35px;
      margin-bottom: 39px;
      width: 100%;
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
    .works {
      display: grid;
      grid-template-columns: 1fr 1fr;
      -webkit-column-gap: 2rem;
      -moz-column-gap: 2rem;
      column-gap: 2rem;
    }
  }
  @media screen and (min-width: 992px) {
    .works {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
`;

export default Works1;
