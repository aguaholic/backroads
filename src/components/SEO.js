import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
    query {
        site {
            siteMetadata {
                siteTitle: title
                siteDesc: description
                author
                twitterUsername
                image
                siteUrl
            }
        }
    }
`
const SEO = ({ title, description }) => {
    const { site } = useStaticQuery(getData)
    const {
        siteTitle,
        siteDesc,
        twitterUsername,
        image,
        siteUrl,
    } = site.siteMetadata

    return (
        <Helmet
            htmlAttributes={{ lang: 'en' }}
            title={`${title} | ${siteTitle}`}
        >
            <meta name="description" content={description || siteDesc} />
            <meta name="image" content={image} />

            {/*twitter card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={twitterUsername} />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={siteUrl} />
            <meta name="twitter:image" content={`${siteUrl}${image}`} />
        </Helmet>
    )
}

export default SEO
