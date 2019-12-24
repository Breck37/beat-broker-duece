import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import SampleKey from "../components/Keys/sampleKey"
import { Airhorn } from "../sounds"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>

    <SampleKey sound={Airhorn} text="Horn" />
  </Layout>
)

export default IndexPage
