import React from 'react'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import ContactForm from '../components/Contact'

const Contact = ({ data }) => {
    return (
        <Layout>
            <StyledHero img={data.contactBcg.childImageSharp.fluid} />
            <ContactForm />
        </Layout>
    )
}

export const query = graphql`
    query {
        contactBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

export default Contact
