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
        author,
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
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content={twitterUsername} />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${siteUrl}${image}`} />
            <meta name="twitter:creator" content={author} />
        </Helmet>
    )
}

export default SEO
