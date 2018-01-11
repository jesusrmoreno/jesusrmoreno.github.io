import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Navbar from "../components/Navbar";
import "./index.css";

const TemplateWrapper = ({ children }) => (
  <div
    style={{
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column"
    }}
  >
    <Helmet
      title="Jesus R. Moreno"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" },
        { name: "viewport", content: "width=device-width, initial-scale=1" }
      ]}
      link={[
        {
          href:
            "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800",
          rel: "stylesheet",
        }
      ]}
    />
    <Navbar />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 700,
        width: "100%",
        paddingLeft: 32,
        paddingRight: 32
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
