import React, { useState, useEffect, useContext } from 'react'
import { Link, navigate } from 'gatsby'
import { MegaContext } from "../providers/MegaProvider"
import Globe from 'react-globe.gl'

import Nav from '../components/Nav'
import Logo from '../components/Logo'
import WorldGeo from '../data/world/world.json'
import Map from '../images/flag-world.jpg'
import Sky from '../images/night-sky.png'

import * as styles from '../styles/index.module.scss'
import '../styles/world-label.scss'

const IndexPage = () => {
  const [mega, setMega] = useContext(MegaContext)
  const [hoverD, setHoverD] = useState()

  const [allMegas, setAllMegas] = useState([])

  useEffect(() => {
    var onlyCities = mega.megacities.filter(mega => mega.slug !== 'skate-city')
    onlyCities.map(city => {
      var megaObject = mega.megacities.filter(mega => mega.slug === city.slug)
      var countryObject = WorldGeo.filter(geo => geo.slug === city.slug)
      var combined = {...megaObject[0], ...countryObject[0]}
      return setAllMegas(prevArray => [...prevArray, combined])
    })
  }, [mega.megacities])

  const makeHeader = (name, englishName, flag) => {
      var englishBlock
      if (englishName === null) {
        englishBlock = `<p class="world-english-block-empty"></p>`
      } else {
          englishBlock = `<p class="world-english-block">${englishName}</p>`
      }
      const headerBlock = `
            <div
                class="world-header-block"
                style="height: ${englishName === null ? "20px" : "35px"};"
            >
                <div class="world-header-text-wrap">
                    <p 
                        class="world-header-block-text"
                        style="font-size: ${englishName === null ? "16px" : "24px"};"
                    >${name}</p>
                    ${englishBlock}
                </div>
                <img src="${mega.url}flags/${flag}" alt="${name} flag" />
          </div>
      `
      return headerBlock
  }

  const makeCities = (cities) => {
      var cityText = ``
      cities.map(city => {
          var oneCity = `
              <div class="world-cities-wrap" >
                  <p class="world-cities-name">${city.name}</p>
                  <p class="world-cities-english-name"
                      style="display: ${city.englishName === null ? "none" : "block"}"
                  >${city.englishName === null ? "" : city.englishName}</p>
                  <p class="world-cities-pop-total">${city.population}</p>
              </div>
          `
          return cityText += oneCity
      })
      return cityText
  }

  const makePop = (cities) => {
      var totalPopulation = 0
      cities.map(city => {
          return totalPopulation = totalPopulation + parseInt(city.population.replace(/,/g, ''), 10)
      })
      return totalPopulation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  return (
    <main className={styles.container}>
        <Link 
            to="/cities"
            className={styles.logo}
        >
            <Logo />
        </Link>
        <Nav />
        <Globe
            globeImageUrl={Map}
            backgroundImageUrl={Sky}
            lineHoverPrecision={0}
            polygonsData={allMegas}
            polygonAltitude={0.01}
            polygonCapColor={d => d === hoverD ? 'transparent' : 'rgba(255,255,255,.1'}
            polygonSideColor={() => 'rgba(255, 255, 255, 0.1)'}
            polygonStrokeColor={() => 'transparent'}
            polygonLabel={({ cities: c, flag: f, name: n, englishName: e }) => `
                <div class="world-label">
                    ${makeHeader(n,e,f)}
                    <div class="world-label-horo-top"></div>
                    <div class="world-label-list">${makeCities(c)}</div>
                    <div class="world-label-horo-bottom"></div>
                    <div class="world-pop-wrap">
                        <p class="world-pop-text">total population:</p>
                        <p class="world-pop-total">${makePop(c)}</p>
                    </div>
                </div>
            `}
            onPolygonHover={setHoverD}
            polygonsTransitionDuration={300}
            onPolygonClick={({ slug }) => {
                setMega(state => ({ ...state, megaIndexSlug: slug }))
                navigate("/series/")
            }}
        />
        {(hoverD !== null) && (hoverD) && (
            <div className={styles.thumbnail}>
            <p>image</p>
            <img src={`${mega.url}/${hoverD.slug}/${hoverD.slug}_sm.jpg`} alt={hoverD.slug} />
            </div>
        )}
    </main>
  )
}

export default IndexPage