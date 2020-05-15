import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getSiteData = graphql`
    {
        site {
            siteMetadata {
                title
                description
                author
            }
        }
    }
`

const RegularHeader = () => {
    const {
        site: {
            siteMetadata: { title },
        },
    } = useStaticQuery(getSiteData)
    return (
        <div>
            <h4>{title} + hello pe-o-ple</h4>
        </div>
    )
}

export default RegularHeader
