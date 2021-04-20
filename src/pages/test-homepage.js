import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Hero from "../components/Hero";
import Attend from "../components/Attend";


import Layout from "../components/layout"
import SEO from "../components/seo"


const Homepage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero/>
    <Attend/>
  </Layout>
)

export default Homepage
