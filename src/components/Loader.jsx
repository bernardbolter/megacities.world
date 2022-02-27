import React  from 'react'

import globe from '../images/globe.gif'

import * as styles from '../styles/loader.module.scss'

const Loader = ({ loaderText }) => {
    return (
        <div className={styles.loader}>
            <img src={globe} alt="spinning globe loader" />
            <p>Loading {loaderText}.....</p>
        </div>
    )
}

export default Loader