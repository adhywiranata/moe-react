import React, { Component, PropTypes } from 'react'
import { Link, hashHistory } from 'react-router'

import css from './header.css'

const { connector } = require('../../store/Store')

class Header extends Component {
  constructor(props){
    super(props)
    this.handleSearchTerm = this.handleSearchTerm.bind(this)
  }

  handleSearchTerm (event) {
    this.props.setSearchTerm(event.target.value) //this is coming from Redux, not from parents
  }

  goToSearch (event) {
    hashHistory.push('/')
    event.preventDefault()
  }

  render() {

    return(
      <div className={ css.header }>
        <Link to='/' className={ css.logo }>Moe Stores</Link>
        <div className={ css.search }>
          <form
          onSubmit={ this.goToSearch }>
          <input type='text'
            placeholder='Search... '
            value={ this.props.searchTerm /* from Redux */}
            onChange={ this.handleSearchTerm }/>
          <input type='submit' defaultValue='Search' />
          </form>
        </div>
        <div className={css.nav}>
          <ul>
            <Link to='/'>
              <li>
                Shopping Cart
                 <span className={css.notifLabel}>{ this.props.shoppingCart.count }</span>
              </li>
            </Link>
            <Link to='/'><li>Login</li></Link>
          </ul>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  setSearchTerm: PropTypes.func,
  searchTerm: PropTypes.string
}

export default connector(Header)
