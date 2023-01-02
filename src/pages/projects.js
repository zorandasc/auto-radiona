import React from "react";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import { getImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import { Layout, WorkCard, Seo } from "../components";

const projects = ({ data }) => {
  const headerImage = data.desktop1.childImageSharp.fluid;
  const image1 = getImage(data.image1);
  const image2 = getImage(data.image2);
  const image3 = getImage(data.image3);
  const image4 = getImage(data.image4);
  const image5 = getImage(data.image5);
  const image6 = getImage(data.image6);
  const image7 = getImage(data.image7);
  const image8 = getImage(data.image8);
  const image9 = getImage(data.image9);

  const projects = [
    { id: 1, title: "Besplatna Diagnoza motora", image: image1 },
    { id: 2, title: "Premium pregled kočnica", image: image2 },
    { id: 3, title: "Popravka unutrašnjeg prenosa", image: image3 },
    { id: 4, title: "Tehnički pregled vozila", image: image4 },
    { id: 5, title: "Premium gume", image: image5 },
    { id: 6, title: "Farovi i limarija", image: image6 },
    { id: 7, title: "Farovi i limarija", image: image7 },
    { id: 8, title: "Zamjena ulja", image: image8 },
    { id: 9, title: "Inspekcija elektronike", image: image9 },
  ];
  return (
    <Layout>
      <Wrapper>
        <BackgroundImage
          Tag="section"
          fluid={headerImage}
          backgroundColor={`#040e18`}
          className="page-header-container"
        >
          <div className="section-center page-header-title ">
            <ul>
              <li>
                <Link to="/">POČETNA</Link>
              </li>
              <li>PROJEKTI</li>
            </ul>
            <div>
              <h1>PROJEKTI</h1>
            </div>
          </div>
        </BackgroundImage>
        <div className="section-center projects-center">
          {projects.map((work, index) => {
            return (
              <WorkCard
                key={work.id}
                className={`div-${index}`}
                title={work.title}
                image={work.image}
              ></WorkCard>
            );
          })}
        </div>
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
    image1: file(name: { eq: "work" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    image2: file(name: { eq: "work2" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    image3: file(name: { eq: "work3" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    image4: file(name: { eq: "work4" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    image5: file(name: { eq: "work5" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    image6: file(name: { eq: "work6" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    image7: file(name: { eq: "work7" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    image8: file(name: { eq: "work8" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    image9: file(name: { eq: "work9" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`;

const Wrapper = styled.section`
  padding: 8rem 0;
  background-color: var(--clr-black-3);
  color: var(--mainWhite);
  /*  HEADER SECTION */
  .page-header-container {
    text-align: left;
    padding: 54px 0;
    position: relative;
    .page-header-title {
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
  .projects-center {
    display: grid;
    padding: 4rem 1rem;
    gap: 16px;
  }
  @media (min-width: 768px) {
    .projects-center {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 900px) {
    .projects-center {
      grid-template-columns: repeat(4, 1fr);
      .div-0 {
        grid-column: 1/3;
      }
      .div-5 {
        grid-column: 3/5;
      }
      .div-7 {
        grid-column: 2/4;
      }
    }
  }
`;


export const Head = () => <Seo title="Projekti" />;

export default projects;
