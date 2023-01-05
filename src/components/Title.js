import React from "react";
import styled from "styled-components";
import Bounce from "react-reveal/Bounce";

const Title = ({ title }) => {
  return (
    <Bounce bottom cascade>
      <Wrapper>
        <h2>{title || "default title"}</h2>
        <div className="underline"></div>
      </Wrapper>
    </Bounce>
  );
};

const Wrapper = styled.div`
  // margin-bottom: 4rem;
  text-align: center;
`;

export default Title;
