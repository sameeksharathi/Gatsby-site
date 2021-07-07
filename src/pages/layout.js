// LAYOUT COMPONENT


import React from "react"
import { css } from "@emotion/react"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
export default function Layout({ children }) {
    const data = useStaticQuery(
        graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
    )
    return (
        <div
            css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
        >
            <Link to={`/`}>
                <h3
                    css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
                >
                    {data.site.siteMetadata.title}
                </h3>
            </Link>
            <Link
                to={`/about/`}
                css={css`
          float: right;
        `}
            >
                About
            </Link>
            {children}
        </div>
    )
}


// import * as React from 'react'
// import { Link, useStaticQuery, graphql } from 'gatsby'
// import {
//     container, heading,
//     navLinks,
//     navLinkItem,
//     navLinkText,
//     siteTitle
// } from '../components/layout.module.css'

// const Layout = ({ pageTitle, children }) => {

//     const title = useStaticQuery(graphql`
//     query {
//         site{
//             siteMetadata{
//                 title
//             }
//         }
//     }`)

//     console.log(title);
//     return (
//         <main className={container}>
//             <title>{pageTitle} | {title.site.siteMetadata.title}</title>
//             <p className={siteTitle} >{title.site.siteMetadata.title}</p>
//             <nav>
//                 <ul className={navLinks}>
//                     <li className={navLinkItem}>
//                         <Link to="/" className={navLinkText}>
//                             Home
//                         </Link>
//                     </li>
//                     <li className={navLinkItem}>
//                         <Link to="/about" className={navLinkText}>
//                             About
//                         </Link>
//                     </li>
//                     <li className={navLinkItem}>
//                         <Link to="/blog" className={navLinkText}>
//                             Blog
//                         </Link>
//                     </li>
//                 </ul>
//             </nav>
//             <h1 className={heading}>{pageTitle}</h1>
//             {children}
//         </main>
//     )
// }

// export default Layout