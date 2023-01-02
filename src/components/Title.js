import React from "react";
import styled from "styled-components";

const Title = ({ title }) => {
  return (
    <Wrapper>
      <h2>{title || "default title"}</h2>
      <div className="underline"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
 // margin-bottom: 4rem;
  text-align: center;
`;

export default Title;
