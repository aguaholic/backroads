import React, { useState } from 'react'
import styles from '../../css/items.module.css'
import Tour from './Tour'
import Title from '../Title'

const TourList = props => {
    const [tours, setTours] = useState(props.tours.edges)
    const [sortedTours, setsortedTours] = useState(props.tours.edges)

    return (
        <section className={styles.tours}>
            <Title title="our" subtitle="tours" />
            <div className={styles.center}>
                {sortedTours.map(({ node }) => {
                    return <Tour key={node.contentful_id} tour={node} />
                })}
            </div>
        </section>
    )
}

export default TourList
