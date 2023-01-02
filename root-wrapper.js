import React from "react";
import { createGlobalStyle } from "styled-components";
import { GatsbyProvider } from "./src/context/context";

const GlobalStyle = createGlobalStyle`

:root{
  --mainWhite: whitesmoke;
  --clr-black-1: #333;
  --clr-black-2:rgb(18,18,18);
  --clr-black-3:rgb(22, 22, 22);
  --clr-black-4:#121212;
  --clr-orange-1:#d16527;
  //--clr-orange-1:#b17c12;
  --clr-gold-1:#896E07;
  --clr-gold-2:rgb(150, 125, 40);
  
  //--ff-primary: "Roboto", sans-serif;
  //--ff-secondary: "Open Sans", sans-serif;
  --ff-primary: "Chakra Petch", sans-serif;
  --ff-secondary: "Chakra Petch", sans-serif;
  --transition: all 0.3s linear;
  --spacing: 0.2rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --primary-light-shadow: 0 5px 15px rgba(209, 101, 39, 0.2);
  --primary-dark-shadow: 0 5px 15px rgba(209, 101, 39, 0.6);
  --max-width: 1170px;
  --fixed-width: 700px;
}

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: var(--ff-secondary);
  background: var(--clr-black-2);
  color: var(--mainWhite);
  font-size: 16px;
  line-height: 1.444;
  color: #ededed;
  font-weight: 300;
  letter-spacing: 0;
}

ul {
  list-style-type: none;
}
a {
  text-decoration: none;
  color: var(--mainWhite);
}

img{
  width: 100% ;
  display: block;
}

h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
  
  font-family: var(--ff-primary);
}
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}
p {
  margin-bottom: 1.25rem;
 ;
}

@media screen and (min-width: 800px) {
   h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1rem;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}

/*  global classes */

.btn {
  text-transform: uppercase;
  background: var( --clr-orange-1);
  color: var(--mainWhite);
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  font-weight: 400;
  transition: var(--transition);
  font-size: 0.875rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
}
.btn:hover {
  background: transparent;
  color: var(--mainWhite);
  border-color: var(--mainWhite);
}
/* section */
.section {
  padding: 5rem 0;
  position: relative;
}
.section-center {
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
}
@media screen and (min-width: 992px) {
  .section-center {
    width: 95vw;
  }
}

.underline {
  width: 5rem;
  height: 0.25rem;
  margin-bottom: 1.25rem;
  background: var(--clr-orange-1);
  margin-left: auto;
  margin-right: auto;
}

`;

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <GatsbyProvider>{element}</GatsbyProvider>
    </>
  );
};
