import React, { useState, useEffect, useCallback }from 'react'

import { shuffle } from "../helpers";
import greetings from '../data/greetings/greetings.json'

import * as styles from '../styles/typewriter.module.scss'

const randomGreetings = shuffle(greetings.greetings)
let greetIndex = null

const Typewriter = () => {
    const [currentGreeting, setCurrentGreeting] = useState(randomGreetings[0])
    const [language, setLanguage] = useState('')
    const [changeGreeting, setChangeGreeting] = useState(true)
    const [renderedGreeting, setRenderedGreeting] = useState('')

    const greetingAnimation = useCallback(() => {
  
        setChangeGreeting(false)
        if (greetIndex === null) {
            greetIndex = 1
        } else if (greetIndex === randomGreetings.length - 1) {
            greetIndex = 0
        } else {
            greetIndex++
        }

        setCurrentGreeting(randomGreetings[greetIndex])
        setLanguage(currentGreeting.language)

        let letterIndex = 0
        let renderLetters = ''
        var letterHandler = setInterval(() => {
            if (currentGreeting.greeting.charAt(letterIndex) === ' ') {
                renderLetters = currentGreeting.greeting.substring(0, letterIndex + 1)
                letterIndex = letterIndex + 2
            } else {
                renderLetters = currentGreeting.greeting.substring(0, letterIndex)
                letterIndex++;
            }
            setRenderedGreeting(renderLetters)
            if (letterIndex > currentGreeting.greeting.length) {
                setChangeGreeting(true)
                clearInterval(letterHandler);
            }
        }, 500);
    },[currentGreeting])

    useEffect(() => {
        if (changeGreeting) {
            greetingAnimation()
        }
    }, [changeGreeting, greetingAnimation])

    return (
        <div className={styles.container}>
            <h1>{renderedGreeting}</h1>
            <h2>{language}</h2>
        </div>
    )
}

export default Typewriter