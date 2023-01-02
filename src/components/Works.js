import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

import Button from "./Button";

const Works = () => {
  return (
    <Wrapper>
      <div className="box-container ">
        <div className="box image-container">
          <StaticImage
            src="../images/work10.jpg"
            layout="constrained"
            //placeholder="blurred"
            className="img"
            alt="Herro image"
          ></StaticImage>
          <div className="inner-img-title">
            <h3>ŠTA JE TURBINA I ČEMU </h3>
            <h3>SLUŽI?</h3>
          </div>
        </div>
        <div className="box text-container">
          <h3>ŠTA JE TURBINA I ČEMU SLUŽI?</h3>
          <p>
            Osnovna uluga je da u cilindre motora ubacuje više vazduha čime se
            povećava efikasnost i snaga motora. Za optimalno funkcionisanje
            turbine, neophodno je permanentno podmazivanje pokretnih elemenata.
          </p>
          <Button path="/">VIŠE</Button>
        </div>
      </div>
      <div className="box-container reverse">
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
        <div className="box image-container">
          <StaticImage
            src="../images/work.jpg"
            layout="constrained"
            //placeholder="blurred"
            className="img"
            alt="Herro image"
          ></StaticImage>
          <div className="inner-img-title">
            <h3>NAJČEŠĆI RAZLOZI KVARA </h3>
            <h3>TURBINE</h3>
          </div>
        </div>
      </div>
      <div className="box-container ">
        <div className="box image-container">
          <StaticImage
            src="../images/work2.jpg"
            layout="constrained"
            //placeholder="blurred"
            className="img"
            alt="Herro image"
          ></StaticImage>
          <div className="inner-img-title">
            <h3>SIMPTOMI KVARA TURBINE</h3>
          </div>
        </div>
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
    </Wrapper>
  );
};

const Wrapper = styled.section`
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

export default Works;
