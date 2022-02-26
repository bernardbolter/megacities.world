import React, { useContext } from 'react'

import { MegaContext } from "../providers/MegaProvider";

import * as styles from '../styles/index.module.scss'

const IndexPage = () => {
  const [mega, setMega] = useContext(MegaContext)
  console.log(mega)
  return (
    <main className={styles.container}>
      <p>index</p>
    </main>
  )
}

export default IndexPage