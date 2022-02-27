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
        shuffledMegacities: [],
        greetings: [],
        url: 'https://madeinberlin.net/artwork/megacities/',
        megaIndexSlug: ''
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

    useEffect(() => {
      var getShuffledCities = mega.megacities;
      getShuffledCities.forEach(function(v,i) {
          if (v.slug === 'skate-city') {
              getShuffledCities.push(getShuffledCities[i])
              getShuffledCities.splice(i, 1)
          }
          if (v.slug === mega.megaIndexSlug) {
              getShuffledCities.unshift(getShuffledCities[i])
              getShuffledCities.splice(i + 1, 1)
          }
      })
      setMega(state => ({ ...state, shuffledMegacities: getShuffledCities }));

      return () => getShuffledCities = {}
    }, [mega.megacities, mega.megaIndexSlug])

    return (
        <MegaContext.Provider
            value={[mega, setMega]}
        >
            {children}
        </MegaContext.Provider>
    )
}

export default MegaProvider