import React, { Component, PropTypes } from 'react'

import Header from './Header'

const Layout = (props) => {
  var childrenStyle = {
    paddingTop: 50
  }
  return (
    <div>
      <Header handleSearchTerm={ props.route.handleSearchTerm } />
      <div style={childrenStyle}>
        {props.children}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: React.PropTypes.element
}

export default Layout
