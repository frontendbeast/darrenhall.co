import React from "react"
import PropTypes from "prop-types"

import Header from "./header"

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <footer className="c-section c-section--footer">
      <div className="o-wrapper">
        <div className="o-grid">
          <div className="o-grid__item">
            <p>&copy; {new Date().getFullYear()} Darren Hall | <a href="https://github.com/frontendbeast/darrenhall.co">View source code on GitHub</a> | <a href={`https://twitter.com/frontendbeast`}>Follow me on Twitter</a></p>
          </div>
        </div>
      </div>
    </footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
