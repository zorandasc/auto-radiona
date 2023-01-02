import React from "react";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import { graphql, Link } from "gatsby";
import { TfiEmail } from "react-icons/tfi";
import { AiOutlinePhone } from "react-icons/ai";
import { BsFillHouseDoorFill, BsFillClockFill } from "react-icons/bs";

import { Layout, Seo } from "../components";

const contact = ({ data }) => {
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
              <li>KONTAKT</li>
            </ul>
            <div>
              <h1>KONTAKT</h1>
            </div>
          </div>
        </BackgroundImage>
        <div className="section-center address-center">
          <div className="address">
            <h4>
              ADRESA{" "}
              <BsFillHouseDoorFill className="icon"></BsFillHouseDoorFill>
            </h4>
            <div className="street">
              <span>6 April bb, Prijepolje, Srbija</span>
            </div>
            <div>
              <span></span>
            </div>
          </div>
          <div className="address">
            <h4>
              RADNO VRIJEME <BsFillClockFill className="icon"></BsFillClockFill>
            </h4>
            <div className="time">
              <span>Ponedeljak - Cetvrtak</span>
              <span>8 am - 8 pm</span>
            </div>
            <div className="time">
              <span>Petak</span>
              <span>8 am - 6 pm</span>
            </div>
            <div className="time">
              <span>Subota</span>
              <span>9 am - 4 pm</span>
            </div>
            <div className="time">
              <span>Nedelja</span>
              <span>Zatvoreno</span>
            </div>
          </div>
          <div className="address">
            <h4>KORISNIČKA PODRŠKA</h4>
            <div className="tel-email">
              <AiOutlinePhone className="icon"></AiOutlinePhone>(+381) 656 838
              126
            </div>
            <div className="tel-email">
              <TfiEmail className="icon"></TfiEmail>turbotimservis@gmail.com
            </div>
          </div>
        </div>
        <div className="section-center map">
          <article className=" contact-form">
            <h3>Za upite i nedoumice</h3>
            <form className="form-group">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="ime"
                  className="form-control"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="form-control"
                />
                <textarea
                  name="message"
                  rows="5"
                  placeholder="poruka"
                  className="form-control"
                ></textarea>
              </div>
              <button type="submit" className="submit-btn btn">
                pošalji
              </button>
            </form>
          </article>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46393.86333269222!2d19.63479187736095!3d43.38504307913142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4757f8f0cf7fb1e5%3A0x2480c811ef3e7ab!2s6.%20aprila%2C%20Prijepolje%2C%20Serbia!5e0!3m2!1sen!2sba!4v1669974738727!5m2!1sen!2sba"
            width="500"
            height="400"
            style={{ border: "0", overflow: "hidden", margin: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="google map address"
          ></iframe>
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
  /*  ADRESSSECTION */
  .address-center {
    padding-top: 100px;
  }
  .address {
    background-color: var(--clr-black-4);
    padding: 38px 30px 44px;
    margin-bottom: 2rem;
    border: 1px solid #343434;
    text-align: left;
    box-shadow: var(--primary-light-shadow);
    -webkit-transition: var(--transition);
    transition: var(--transition);
    h4 {
      margin-bottom: 2rem;
      font-size: 23px;
      line-height: 1.4347;
      font-weight: 700;
      color: var(--mainWhite);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    div {
      margin-top: 14px;
      a {
        color: var(--mainWhite);
        transition: var(--transition);
        &:hover {
          color: var(--clr-orange-1);
        }
      }
    }
    .time,
    .street {
      margin-bottom: 1.25rem;
      display: flex;
      justify-content: space-between;
    }
    .tel-email {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .icon {
      font-size: 1.5em;
    }
  }
  .address:hover {
    box-shadow: var(--primary-dark-shadow);
  }

  @media screen and (min-width: 676px) {
    .address-center {
      padding-bottom: 100px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      -webkit-column-gap: 2rem;
      -moz-column-gap: 2rem;
      column-gap: 2rem;
    }
  }
  @media screen and (min-width: 992px) {
    .address-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  /*  FORM SECTION */
  .contact-form {
    background: var(--clr-black-4);
    border-radius: var(--radius);
    text-align: center;
    box-shadow: var(--primary-light-shadow);
    transition: var(--transition);
    width: 90vw;
    max-width: 35rem;
    margin-bottom: 2rem;
  }
  .contact-form:hover {
    box-shadow: var(--primary-dark-shadow);
  }
  .contact-form h3 {
    padding-top: 1.25rem;
  }
  .form-group {
    padding: 1rem 1.5rem;
  }

  .form-control {
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    border: none;
    margin-bottom: 1.25rem;
    background: var(--mainWhite);
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
  }
  .form-control::placeholder {
    font-family: var(--ff-primary);
    color: var(--clr-black-3);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
  }
  .submit-btn {
    background-color: var(--clr-orange-1);
    display: block;
    width: 100%;
    padding: 1rem;
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
  .map {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Head = () => <Seo title="Kontakt" />;

export default contact;
