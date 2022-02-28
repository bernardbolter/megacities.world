import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { MegaContext } from '../providers/MegaProvider'


import Globe from '../svg/Globe'
import Instagram from '../svg/Instagram'
import Arrow from '../svg/Arrow'

import '../styles/navigation.scss'

const Nav = () => {
    const [mega, setMega] = useContext(MegaContext)
    return (
        <div className="navigation-container">
            <div 
                className={mega.navOpen ? 'arrows arrows-on' : 'arrows'}
                onClick={() => {
                    setMega(state => ({ ...state, navOpen: !state.navOpen }))
                }}
                onKeyDown={(ev) => {
                    if (ev.keyCode === 13) {
                        setMega(state => ({ ...state, navOpen: !state.navOpen }))
                       }
                }}
                role="button"
                tabIndex={0}
            >
                <div className={mega.navOpen ? 'arrow first' : 'arrow first first-on'}>
                    <Arrow />
                </div>
                <div className={mega.navOpen ? 'arrow second' : 'arrow second second-on'}>
                    <Arrow />
                </div>
                <div className={mega.navOpen ? 'arrow third' : 'arrow third third-on'}>
                    <Arrow />
                </div>
            </div>
            <section className={mega.navOpen ? 'navigation navigation-on' : 'navigation'}>
                <Link className={mega.navOpen ? 'link link-on globe' : 'link globe'} to="/">
                    <Globe />
                </Link>

                <Link className={mega.navOpen ? 'link link-on' : 'link'} to="/about">about</Link>
                <Link className={mega.navOpen ? 'link link-on' : 'link'} to="/series">series</Link>
                {/* <Link className={navigationOpen ? 'link link-on' : 'link'} to="/prints">prints</Link> */}
                {/* <Link className={navigationOpen ? 'link link-on' : 'link'} to="/contact">contact</Link> */}
                <a className={mega.navOpen ? 'link link-on instagram' : 'link instagram'} href="https://www.instagram.com/bernardbolter/">
                    <Instagram />
                </a>
            </section>
            <div className={mega.navOpen ? 'background-dark background-dark-open' : 'background-dark'} />
        </div>
    )
}

export default Nav