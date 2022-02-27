import React, { useState, useEffect, useContext } from 'react'
import { navigate } from 'gatsby'
import { Img } from 'react-image'
import { MegaContext } from '../providers/MegaProvider'
import { useWindowSize} from '../helpers/useWindowSize'

import globe from '../images/globe.gif'

import * as styles from '../styles/skate-city.module.scss'

const SkateCity = ({
    skateCIty
}) => {
    const [mega, setMega] = useContext(MegaContext)
    const size = useWindowSize()
    const [uniqueCities, setUniqueCities] = useState(0)
    const [uniqueStates, setUniqueStates] = useState(0)

    useEffect(() => {
        var allCities = []
        var allStates = []
        skateCity.spots.map(spot => {
            return allStates.push(spot.state)
        })
        skateCity.spots.map(spot => {
            return allCities.push(spot.city)
        })
        setUniqueCities(new Set(allCities).size)
        setUniqueStates(new Set(allStates).size)
    }, [skateCity.spots])

    return (
        <div className={styles.container}>
            <p>skate city</p>
        </div>
    )
}

export default SkateCity