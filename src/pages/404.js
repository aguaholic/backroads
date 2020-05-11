import React from 'react'
import Layout from '../components/Layout'
import styles from '../css/error.module.css'
import Banner from '../components/Banner'
import { Link } from 'gatsby'

const Error = () => {
    return (
        <Layout>
            <header className={styles.error}>
                <Banner title="oops it's a dead end" />
                <Link to="/" className="btn-white">
                    Back to home page
                </Link>
            </header>
        </Layout>
    )
}

export default Error
