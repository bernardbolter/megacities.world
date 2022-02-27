import React, { useState, useEffect, useContext } from 'react'
import { MegaContext } from "../providers/MegaProvider"
import { useWindowSize } from "../helpers/useWindowSize"

import Nav from '../components/Nav'
import Logo from '../components/Logo'
import CountryNav from '../components/CountryNav'
import Loader from '../components/Loader'
import Arrow from '../svg/Arrow'

import City from '../components/City'
import SkateCity from '../components/SkateCity'

import * as styles from '../styles/series.module.scss'

const Series = () => {
    const [mega, setMega] = useContext(MegaContext)
    const size = useWindowSize()
    const [cityWidth, setCityWidth] = useState(0)
    const [megaWidth, setMegaWidth] = useState(0)
    let [megaIndex, setMegaIndex] = useState(0)
    const [ alignCenter, setAlignCenter] = useState(false)
    const [ cityHeight, setCityHeight] = useState(0)

    useEffect(() => {
        if (size.height !== 0) {
            var getCityWidth = Math.round((size.height - 100) * 0.714285143)
            if (getCityWidth > (size.width * .9)) {
                setCityWidth(size.width * .9)
                setCityHeight((size.width * .9) * 1.39875)
                setAlignCenter(true)
            } else {
                setCityWidth(getCityWidth)
                setCityHeight(getCityWidth * 1.39875)
                setAlignCenter(false)
            }
            var getMegaWidth
            if (alignCenter) {
                getMegaWidth = Math.round((mega.shuffledMegacities.length * getCityWidth) + ((mega.shuffledMegacities.length * 170) + 60))
            } else {
                getMegaWidth = Math.round((mega.shuffledMegacities.length * getCityWidth) + ((mega.shuffledMegacities.length * 285) + 300))
            }
            setMegaWidth(getMegaWidth)
        }

        return () => {
            getCityWidth = 0
            getMegaWidth = 0
        }
    }, [mega.shuffledMegacities, size, alignCenter])

    useEffect(() => {
        var megaMeasurement = megaWidth / mega.shuffledMegacities.length
        window.scrollTo({
            left: megaIndex * megaMeasurement,
            behavior: 'smooth'
        })

        return () => null
    }, [megaIndex, mega.shuffledMegacities, megaWidth])

    return (
        <main className={styles.container}>
            <Logo />
            <CountryNav setMegaIndex={setMegaIndex} />
            <Nav />
            {cityWidth !== 0 && megaWidth !== 0 ? (
                <div 
                    className={styles.megacities}
                    style={{ 
                        width: size.width > 789 ? megaWidth : "100%",
                        height: alignCenter && size.width > 769 ? size.height - 100  : 'auto',
                    }}
                >
                    {mega.shuffledMegacities.map(megacity => {
                        if (megacity.type === 'skateboarding') {
                            return <SkateCity 
                                        skateCity={megacity} 
                                        key={megacity.slug} 
                                        cityWidth={cityWidth} 
                                        cityHeight={cityHeight}
                                        alignCenter={alignCenter}
                                    />
                        } else {
                            return <City 
                                        megacity={megacity} 
                                        key={megacity.slug} 
                                        cityWidth={cityWidth}
                                        cityHeight={cityHeight}
                                        alignCenter={alignCenter} 
                                    />
                        }
                    })}
                </div>
            ) : (
                <Loader />
            )}
            {size.width > 769 && (
                <div className={styles.bottom}>
                    <div className={megaIndex > 0 ? styles.bottomLeft : styles.bottomLeftDisabled}
                        onClick={() => megaIndex > 0 ? setMegaIndex(megaIndex - 1) : null}
                    >
                        {megaIndex > 0 && (
                            <div className={styles.arrowsLeft}>
                                <Arrow />
                                <Arrow />
                                <Arrow />
                            </div>
                        )}
                        <div className={styles.lineLeft} />
                    </div>
                    <div 
                        className={megaIndex !== mega.shuffledMegacities.length - 1 ? styles.bottomRight : styles.bottomRightDisabled}
                        onClick={() => megaIndex !== mega.shuffledMegacities.length -1 ? setMegaIndex(megaIndex + 1) : null}
                    >
                        <div className={styles.lineRight} />
                        {megaIndex !== mega.shuffledMegacities.length - 1 && (
                            <div className={styles.arrowsRight}>
                                <Arrow />
                                <Arrow />
                                <Arrow />
                            </div>
                        )}
                    </div>
                    <p 
                        className={styles.scrollRight}
                        style={{
                            left: (size.width / 2) + 30
                        }}
                    >scroll right</p>
                </div>
            )}
        </main>
    )
}

export default Series