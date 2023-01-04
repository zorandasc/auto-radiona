import * as React from "react";

import {
  Layout,
  Hero,
  Counters,
  About,
  Prices,
  Works,
  Seo,
  Advices,
} from "../components";

const IndexPage = () => {
  return (
    <Layout>
      <Hero></Hero>
      <Counters></Counters>
      <About></About>
      <Works></Works>
      <Advices></Advices>
      <Prices></Prices>
    </Layout>
  );
};

export const Head = () => <Seo title="Početna" />;

export default IndexPage;
