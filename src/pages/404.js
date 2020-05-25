import React from 'react'
import Layout from '../components/Layout'
import styles from '../css/error.module.css'
import Banner from '../components/Banner'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import SEO from '../components/SEO'

const Error = () => {
    return (
        <Layout>
            <SEO title="404" />
            <header className={styles.error}>
                <Banner title="oops it's a dead end" />
                <AniLink fade to="/" className="btn-white">
                    Back to home page
                </AniLink>
            </header>
        </Layout>
    )
}

export default Error
