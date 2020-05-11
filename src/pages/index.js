import React from 'react'
import Layout from '../components/Layout'
import SimpleHero from '../components/SimpleHero'
import Banner from '../components/Banner'
import { Link } from 'gatsby'
import About from '../components/Home/About'
import Services from '../components/Home/Services'

export default () => (
    <Layout>
        <SimpleHero>
            <Banner
                title="continue exploring"
                info="Ullamco minim duis incididunt non magna nisi ad deserunt. Consectetur culpa ex aliqua sunt."
            />
            <Link to="/tours" className="btn-white">
                Explore tours
            </Link>
        </SimpleHero>
        <About />
        <Services />
    </Layout>
)
