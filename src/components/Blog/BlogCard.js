import React from 'react'
import styles from '../../css/blog-card.module.css'
import Image from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const BlogCard = ({ blog }) => {
    const { slug, title, image, published } = blog
    return (
        <article className={styles.blog}>
            <div className={styles.imgContainer}>
                <Image
                    className={styles.img}
                    fluid={image.fluid}
                    alt="blog card"
                />
                <AniLink className={styles.link} fade to={`/blog/${slug}`}>
                    read more
                </AniLink>
                <h6 className={styles.date}>{published}</h6>
                <div className={styles.footer}>
                    <h4>{title}</h4>
                </div>
            </div>
        </article>
    )
}

export default BlogCard
