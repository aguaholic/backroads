import React from 'react'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import ToursComponent from '../components/Tours/Tours'
import SEO from '../components/SEO'

const Tours = ({ data }) => {
    return (
        <Layout>
            <SEO title="Tours" />
            <StyledHero img={data.toursBcg.childImageSharp.fluid} />
            <ToursComponent />
        </Layout>
    )
}

export const query = graphql`
    query {
        toursBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

export default Tours
