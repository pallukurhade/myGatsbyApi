/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import "./mystyle.css"

const Layout = ({ children }) => {

  return (
    <div>
   
    <main>
        {children}
    </main>
     </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout