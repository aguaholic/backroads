import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const getImage = graphql`
    query aboutImage {
        aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
            childImageSharp {
                fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

const About = () => {
    const { aboutImage } = useStaticQuery(getImage)
    return (
        <section className={styles.about}>
            <Title title="About" subtitle="us" />
            <div className={styles.aboutCenter}>
                <article className={styles.aboutImg}>
                    <div className={styles.imgContainer}>
                        <Img
                            fluid={aboutImage.childImageSharp.fluid}
                            alt="awesone landscape"
                        />
                    </div>
                </article>
                <h4>explore the difference</h4>
                <p>
                    Fugiat veniam qui duis ea cillum sint pariatur laborum est
                    aliqua adipisicing enim. Do ut quis cupidatat fugiat qui.
                    Sunt est velit in cupidatat nisi reprehenderit occaecat in
                    irure.
                </p>
                <p>
                    Fugiat veniam qui duis ea cillum sint pariatur laborum est
                    aliqua adipisicing enim. Do ut quis cupidatat fugiat qui.
                    Sunt est velit in cupidatat nisi reprehenderit occaecat in
                    irure.
                </p>
                <button type="button" className="btn-primary">
                    Read more
                </button>
            </div>
        </section>
    )
}

export default About
