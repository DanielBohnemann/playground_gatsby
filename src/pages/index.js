//https://www.youtube.com/watch?v=8t0vNu2fCCM
//1:29:00

import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>I am Danny, a student at Creighton University.</h2>
      <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
    </Layout>
  )
}

export default IndexPage