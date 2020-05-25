import React from 'react'
import { graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import Day from '../components/SingleTour/Day'
import Img from 'gatsby-image'
import styles from '../css/template.module.css'
import { FaMoneyBillWave, FaMap } from 'react-icons/fa'
import SEO from '../components/SEO'

const tourTemplate = ({ data }) => {
    const {
        name,
        price,
        days,
        country,
        start,
        images,
        description: { description },
        journey,
    } = data.tour

    const [mainImage, ...tourImages] = images
    return (
        <Layout>
            <SEO title={name} />
            <StyledHero img={mainImage.fluid} />
            <section className={styles.template}>
                <div className={styles.center}>
                    <div className={styles.images}>
                        {tourImages.map((item, index) => (
                            <Img
                                className={styles.image}
                                key={index}
                                fluid={item.fluid}
                                alt="single tour"
                            />
                        ))}
                    </div>
                    <h2>{name}</h2>
                    <div className={styles.info}>
                        <p>
                            <FaMoneyBillWave className={styles.icon} />
                            starting from ${price}
                        </p>
                        <p>
                            <FaMap className={styles.icon} />
                            {country}
                        </p>
                        <h4>starts on: {start}</h4>
                        <h4>duration: {days} days</h4>
                        <p className={styles.desc}>{description}</p>
                        <h2>daily schedule</h2>
                        <div className={styles.journey}>
                            {journey.map((item, index) => {
                                return (
                                    <Day
                                        key={index}
                                        day={item.day}
                                        info={item.info}
                                    />
                                )
                            })}
                        </div>
                    </div>
                    <AniLink fade to="/tours" className="btn-primary">
                        back to tours
                    </AniLink>
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        tour: contentfulTour(slug: { eq: $slug }) {
            name
            price
            country
            days
            description {
                description
            }
            start(formatString: "dddd MMMM Do, YYYY")
            journey {
                day
                info
            }
            images {
                fluid {
                    ...GatsbyContentfulFluid
                }
            }
        }
    }
`
export default tourTemplate
