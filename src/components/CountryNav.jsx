import React, { useState, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MegaContext } from "../providers/MegaProvider"

import * as styles from '../styles/country-nav.module.scss'

const CountryNav = ({ setMegaIndex }) => {
    const [mega] = useContext(MegaContext)
    const [showCountryNav, setShowCountryNav] = useState(false)

    return (
        <div className={styles.container}>
            <div
                className={styles.header}
                onClick={() => setShowCountryNav(!showCountryNav)}
            >
                <h3>Select Megacity</h3>
            </div>
            <AnimatePresence>
                {showCountryNav && (
                <motion.div 
                    className={styles.list}
                    animate = {{
                        transition: {
                            staggerChildren: 0.05,
                            staggerDirection: 1
                        }
                    }}
                    exit = {{
                        transition: {
                            staggerChildren: 0.05,
                            staggerDirection: -1
                        }
                    }}
                >
                    {mega.shuffledMegacities.map((city, index) => {
                        return (
                            <motion.div
                                key={index} 
                                className={styles.city}
                                onClick={() => {
                                    setMegaIndex(index)
                                    setShowCountryNav(false)
                                }}
                                initial={{
                                    opacity: 0
                                }}
                                animate={{
                                    opacity: 1
                                }}
                                exit={{
                                    opacity: 0
                                }}
                            >
                                <img src={`${mega.url}/flags/${city.flag}`} alt={`${city.country} Flag`} />
                                <p>{city.name}</p>
                            </motion.div>
                        )
                    })}
                </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default CountryNav