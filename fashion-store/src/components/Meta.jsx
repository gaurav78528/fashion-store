import React from "react";
import { Helmet } from "react-helmet";
const Meta = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Our Store</title>
      {/* <link rel="canonical" href="http://mysite.com/example" /> */}
    </Helmet>
  );
};

export default Meta;
