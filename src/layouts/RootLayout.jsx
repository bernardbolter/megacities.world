import React from 'react'
import MegaProvider from '../providers/MegaProvider'

const RootLayout = ({ element }) => (
    <MegaProvider>
        {element}
    </MegaProvider>
)

export default RootLayout