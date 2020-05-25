import React from 'react'
import TourList from '../Tours/TourList'
import { useStaticQuery, graphql } from 'gatsby'

const getTours = graphql`
    query {
        tours: allContentfulTour {
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
                            ...GatsbyContentfulFluid
                        }
                    }
                }
            }
        }
    }
`

const Tours = () => {
    const { tours } = useStaticQuery(getTours)

    return (
        <div>
            <TourList tours={tours} />
        </div>
    )
}

export default Tours
