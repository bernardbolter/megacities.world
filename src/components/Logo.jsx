import React from 'react'

import * as styles from '../styles/logo.module.scss'

const Logo = () => {
    return (
        <section className={styles.logo}>
            <h1>MEGA<span className={styles.cities}>CITIES</span></h1>
            <h2>composite country portraits</h2>
        </section>
    )
}

export default Logo