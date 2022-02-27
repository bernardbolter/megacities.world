import React, { useState, useEffect, createContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { shuffle } from '../helpers'

export const MegaContext = createContext()

const MegaProvider = ({ children }) => {
    const megacitiesData = useStaticQuery(graphql`
    query MegaQuery {
        allMegacitiesJson {
          edges {
            node {
              cities {
                artist
                englishName
                lat
                name
                population
                slug
                title
                video
              }
              completed
              country
              englishName
              flag
              id
              name
              slug
              spots {
                city
                name
                skaters
                slug
                start
                state
                title
                video
              }
              year
              type
            }
          }
        }
      }
    `)

    const [mega, setMega] = useState({
        megacities: [],
        world: [],
        greetings: [],
        url: 'https://madeinberlin.net/artwork/megacities/'
    })

    useEffect(() => {
        const rawMegacities = []
        if (megacitiesData.allMegacitiesJson.edges.length !== 0) {
            megacitiesData.allMegacitiesJson.edges.map(megacity => {
                return rawMegacities.push(megacity.node)
            })
        }

        setMega(state => ({ ...state, megacities: shuffle(rawMegacities) }))
    }, [megacitiesData])

    return (
        <MegaContext.Provider
            value={[mega, setMega]}
        >
            {children}
        </MegaContext.Provider>
    )
}

export default MegaProvider