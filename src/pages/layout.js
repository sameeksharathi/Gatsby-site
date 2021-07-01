// LAYOUT COMPONENT

import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
    container, heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle
} from '../components/layout.module.css'

const Layout = ({ pageTitle, children }) => {

    const title = useStaticQuery(graphql`
    query {
        site{
            siteMetadata{
                title
            }
        }
    }`)

    console.log(title);
    return (
        <main className={container}>
            <title>{pageTitle} | {title.site.siteMetadata.title}</title>
            <p className={siteTitle} >{title.site.siteMetadata.title}</p>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>
                            Home
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText}>
                            About
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/blog" className={navLinkText}>
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
            <h1 className={heading}>{pageTitle}</h1>
            {children}
        </main>
    )
}

export default Layout