import React from 'react'
import Tour from '../Tours/Tour'
import Title from '../Title'
import { useStaticQuery, graphql } from 'gatsby'
import styles from '../../css/items.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const getFeaturedTours = graphql`
    query {
        featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
            totalCount
            edges {
                node {
                    contentful_id
                    name
                    price
                    slug
                    country
                    days
                    images {
                        fluid {
                            ...GatsbyContentfulFluid_tracedSVG
                        }
                    }
                }
            }
        }
    }
`

const FeaturedTours = () => {
    const {
        featuredTours: { edges },
    } = useStaticQuery(getFeaturedTours)

    return (
        <section className={styles.tours}>
            <Title title="featured" subtitle="tours" />
            <div className={styles.center}>
                {edges.map(({ node }) => {
                    return <Tour key={node.contentful_id} tour={node} />
                })}
            </div>
            <AniLink fade to="/tours" className="btn-primary">
                all tours
            </AniLink>
        </section>
    )
}

export default FeaturedTours
