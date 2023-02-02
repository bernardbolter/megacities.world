import React, { useState, useContext } from 'react'
import { Img } from "react-image";
import { useWindowSize } from "../helpers/useWindowSize";

import { MegaContext } from "../providers/MegaProvider"

import globe from '../images/globe.gif'
import * as styles from '../styles/city.module.scss'

const City = ({
    megacity,
    cityWidth,
    cityHeight 
}) => {
    const [mega] = useContext(MegaContext)
    let totalPopulation = 0
    const [viewUnfinished, setViewUnfinished] = useState(false)
    const size = useWindowSize()

    return (
        <div 
            className={styles.container}
            style={{ curser: megacity.completed ? "pointer" : "default" }}
        >
            <div 
                className={styles.image}
                style={{ width: size.width > 768 ? cityWidth : "90%"}}   
            >
                <Img
                    src={`${mega.url}${megacity.slug}/${megacity.slug}_md.jpg`}
                    alt={`${megacity.name} Megacity`}
                    loader={
                        <div className={styles.loader}
                            style={{ width: cityWidth, height: size.height * .95}}
                        >
                            <img src={globe} alt="spinning globe loader" />
                            <p>loading {megacity.name}...</p>
                        </div>
                    }
                    unloader={
                        <div className={styles.loader}
                            style={{ width: cityWidth, height: size.height * .95}}
                        >
                            <p>{megacity.name} image not loading ...</p>
                        </div>
                    }
                />
            </div>

            <div className={styles.infoContainer}
                style={{ height: size.height > 769 ? cityHeight : "auto" }}
            >
                <div className={styles.info}>
                    <div className={styles.header}>
                        <div className={styles.flag}>
                            <img src={`${mega.url}flags/${megacity.flag}`} alt={`${megacity.country} Flag`} />
                        </div>
                        <h1>{megacity.name}</h1>
                    </div>
                    {megacity.cities.map(city => {
                        totalPopulation = totalPopulation + parseInt(city.population.replace(/,/g, ''), 10)
                        return (
                            <div className={styles.cities} key={city.name}>
                                <div>
                                    <h3>{city.name}</h3>
                                    {city.name !== city.englishName ? <h5>{city.englishName}</h5> : null}
                                </div>
                                <h4>{city.population}</h4>
                            </div>
                        )
                    })}
                    <div className={styles.line} />
                    <p className={styles.population}>{totalPopulation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                </div>
                <div className={styles.artInfo}>
                    <div className={styles.artText}>
                        <p className={styles.artSize}>121cm x 169cm</p>
                        <div className={styles.artLine} />
                        <p className={styles.artSize}>48" x 69"</p>
                        <p className={styles.artYear}>{megacity.year}</p>
                    </div>
                    {megacity.completed === null ? (
                        <div className={styles.enlarge}>
                            <svg viewBox="0 0 58 59">
                                <path d="M30.353 14.646H42.28L25.789 31.136H0.0979919V33.591V43.413V51.6V58.4H6.89899H15.085H24.907H27.36V34.373L44.685 17.051V28.979H48.085V11.246H30.353V14.646ZM23.959 55H15.084H6.89799H3.49799V51.6V43.414V34.537H23.959V55Z" />
                                <path d="M42.914 55H33.092V58.4H42.914V55Z" />
                                <path d="M54.5 55H51.1V58.4H57.9V51.6H54.5V55Z" />
                                <path d="M57.9 33.592H54.5V43.414H57.9V33.592Z" />
                                <path d="M57.9 15.584H54.5V25.406H57.9V15.584Z" />
                                <path d="M51.1 3.99799H54.5V7.39599H57.9V0.597992H51.1V3.99799Z" />
                                <path d="M42.914 0.597992H33.092V3.99799H42.914V0.597992Z" />
                                <path d="M24.906 0.597992H15.084V3.99799H24.906V0.597992Z" />
                                <path d="M3.49799 3.99799H6.89799V0.597992H0.0979919V7.39599H3.49799V3.99799Z" />
                                <path d="M3.49799 15.582H0.0979919V25.404H3.49799V15.582Z" />
                            </svg>
                            <p>Enlarge Megacity</p>
                        </div>
                    ) : (
                        <div 
                            className={styles.warning}
                            onClick={() => {
                                setViewUnfinished(!viewUnfinished)
                            }}
                            onKeyDown={(ev) => {
                                if (ev.keyCode === 13) {
                                    setViewUnfinished(!viewUnfinished)
                                   }
                            }}
                            role="button"
                            tabIndex={0}
                        >
                            <div className={styles.warningText}>
                                <svg viewBox="0 0 61 62">
                                    <path d="M30.5 22.5524C32.8395 22.5524 34.7361 20.6372 34.7361 18.2747C34.7361 15.9121 32.8395 13.9969 30.5 13.9969C28.1605 13.9969 26.2639 15.9121 26.2639 18.2747C26.2639 20.6372 28.1605 22.5524 30.5 22.5524Z" />
                                    <path d="M34.0244 29.9951V44.0946C34.0244 45.0386 33.6531 45.9439 32.9922 46.6113C32.3312 47.2788 31.4347 47.6538 30.5 47.6538C29.5653 47.6538 28.6688 47.2788 28.0078 46.6113C27.3469 45.9439 26.9756 45.0386 26.9756 44.0946V29.9951C26.9756 29.0512 27.3469 28.1459 28.0078 27.4784C28.6688 26.811 29.5653 26.436 30.5 26.436C31.4347 26.436 32.3312 26.811 32.9922 27.4784C33.6531 28.1459 34.0244 29.0512 34.0244 29.9951V29.9951Z"/>
                                    <path d="M30.5 0C13.6559 0 0 13.7902 0 30.8C0 47.8098 13.6559 61.6 30.5 61.6C47.3441 61.6 61 47.8098 61 30.8C61 13.7902 47.3441 0 30.5 0ZM48.232 48.7064C45.9107 51.091 43.1447 52.9876 40.0936 54.287C37.0426 55.5863 33.7669 56.2626 30.4557 56.2769C27.1445 56.2911 23.8633 55.6431 20.8014 54.37C17.7395 53.097 14.9576 51.2242 12.6161 48.8598C10.2747 46.4953 8.4202 43.686 7.15957 40.594C5.89893 37.502 5.25715 34.1885 5.27126 30.8447C5.28538 27.5009 5.95511 24.1931 7.24181 21.112C8.52851 18.031 10.4067 15.2378 12.768 12.8936C15.0893 10.5091 17.8553 8.61239 20.9064 7.31304C23.9574 6.01369 27.2331 5.33737 30.5443 5.32311C33.8555 5.30886 37.1367 5.95695 40.1986 7.22999C43.2605 8.50303 46.0424 10.3758 48.3838 12.7402C50.7253 15.1047 52.5798 17.914 53.8404 21.006C55.1011 24.098 55.7428 27.4115 55.7287 30.7553C55.7146 34.0991 55.0449 37.4069 53.7582 40.488C52.4715 43.569 50.5933 46.3622 48.232 48.7064V48.7064Z" />
                                    <path d="M30.5 0C13.6559 0 0 13.7902 0 30.8C0 47.8098 13.6559 61.6 30.5 61.6C47.3441 61.6 61 47.8098 61 30.8C61 13.7902 47.3441 0 30.5 0ZM48.232 48.7064C45.9107 51.091 43.1447 52.9876 40.0936 54.287C37.0426 55.5863 33.7669 56.2626 30.4557 56.2769C27.1445 56.2911 23.8633 55.6431 20.8014 54.37C17.7395 53.097 14.9576 51.2242 12.6161 48.8598C10.2747 46.4953 8.4202 43.686 7.15957 40.594C5.89893 37.502 5.25715 34.1885 5.27126 30.8447C5.28538 27.5009 5.95511 24.1931 7.24181 21.112C8.52851 18.031 10.4067 15.2378 12.768 12.8936C15.0893 10.5091 17.8553 8.61239 20.9064 7.31304C23.9574 6.01369 27.2331 5.33737 30.5443 5.32311C33.8555 5.30886 37.1367 5.95695 40.1986 7.22999C43.2605 8.50303 46.0424 10.3758 48.3838 12.7402C50.7253 15.1047 52.5798 17.914 53.8404 21.006C55.1011 24.098 55.7428 27.4115 55.7287 30.7553C55.7146 34.0991 55.0449 37.4069 53.7582 40.488C52.4715 43.569 50.5933 46.3622 48.232 48.7064V48.7064Z" />
                                </svg>
                                <p>Work in Progress</p>
                            </div>
                        {viewUnfinished && (
                            <div className={styles.unfinished}>
                                <p>Site is under construction, come back soon to see the full Megacity image</p>
                            </div>
                        )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default City