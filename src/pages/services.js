import React from "react";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import { graphql, Link } from "gatsby";
import { Layout, Seo, Services } from "../components";

const services = ({ data }) => {
  const imageData1 = data.desktop1.childImageSharp.fluid;
  return (
    <Layout>
      <Wrapper>
        <BackgroundImage
          Tag="section"
          fluid={imageData1}
          backgroundColor={`#040e18`}
          className="contact-header-container"
        >
          <div className="section-center contact-header-title ">
            <ul>
              <li>
                <Link to="/">POČETNA</Link>
              </li>
              <li>SERVISI</li>
            </ul>
            <div>
              <h1>SERVISI</h1>
            </div>
          </div>
        </BackgroundImage>
        <Services></Services>
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
  }
`;
const Wrapper = styled.section`
  padding: 8rem 0;
  background-color: var(--clr-black-3);
  color: var(--mainWhite);
  /*  HEADER SECTION */
  .contact-header-container {
    text-align: left;
    padding: 54px 0;
    position: relative;
    .contact-header-title {
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
`;

export const Head = () => <Seo title="Servisi" />;

export default services;
