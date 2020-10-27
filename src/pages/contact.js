import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const ContactPage = () => {
    return (
        <Layout>
            <h1>How to contact me</h1>
            <p>Phone: 9136832847</p>
            <p>Here is the link to <Link to="https://blueline.instructure.com/"> my twitter</Link></p>
        </Layout>
    )
}

export default ContactPage