import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer class="c-section c-section--masthead">
          <div class="o-wrapper">
            <div class="o-grid">
              <div class="o-grid__item">
                <p>&copy; {new Date().getFullYear()} Darren Hall | <a href="https://github.com/frontendbeast/darrenhall.co">View source code on GitHub</a> | <a href="https://twitter.com/frontendbeast">Follow me on Twitter</a></p>
              </div>
            </div>
          </div>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
