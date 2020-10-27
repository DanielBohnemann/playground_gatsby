import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'




const AboutPage = () => {
    return (
        <Layout>
            <h1>About Me</h1>
            <p>I am a Junior at Creighton University currently majoring in Financial Technology.</p>
            <p>Here is how to <Link to="/contact"> contact me</Link></p>
        </Layout>
    )
}

export default AboutPage