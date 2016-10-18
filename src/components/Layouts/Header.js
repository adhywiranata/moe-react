import React, { Component, PropTypes } from 'react'
import { Link, hashHistory } from 'react-router'

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
    var headerStyle = {
      padding: '5 20',
      background: '#222222',
      fontFamily:'Open Sans, sans-serif',
      position: 'fixed',
      zIndex: '+999',
      width: '100%',
      textAlign: 'center'
    }

    var logoStyle = {
      textAlign: 'center',
      fontFamily:'Open Sans, sans-serif',
      fontSize: '2em',
      color: '#FFFFFF',
      width: 200,
      margin: '10px auto',
      textDecoration: 'none',
      float: 'left'
    }

    var searchAreaStyle = {
      width: '60%',
      overflow: 'hidden',
      float:'left'
    }

    var searchInputStyle = {
      marginTop:12,
      padding:'10px 30px',
      border:0,
      borderRadius:5,
      outline:0,
      width:'50%',
      fontSize:'1em',
      fontFamily:'Open Sans, sans-serif'
    }

    var searchButtonStyle = {
      padding:'13px 20px',
      background:'#59ABE3',
      color:'#FFFFFF',
      border: 'none',
      fontSize: '1em',
      textTransform: 'uppercase',
      margin: '-3px 10px',
      borderRadius:5,
      outline:0,
      cursor:'pointer'
    }

    var navStyle = {
      color:'#FFFFFF',
      float:'right',
      marginRight: 30,
    }

    var navMenuStyle = {
      listStyle: 'none'
    }

    var navMenuListStyle = {
      float:'left',
      padding:'10px 20px',
      borderLeft: '1px solid rgba(255,255,255, .2)',
      color: '#FFFFFF',
      textDecoration: 'none'
    }

    var cartLabelStyle = {
      padding:'1px 5px',
      color: '#FFFFFF',
      background: '#EB9532',
      borderRadius: 5
    }

    return(
      <div style={ headerStyle }>
        <Link to='/'style={ logoStyle }>Moe Storey</Link>
        <div style={searchAreaStyle}>
          <form
          onSubmit={ this.goToSearch }>
          <input type='text'
            placeholder='Search... '
            value={ this.props.searchTerm /* from Redux */}
            style={searchInputStyle}
            onChange={ this.handleSearchTerm }/>
          <input type='submit' style={searchButtonStyle} defaultValue='Search' />
          </form>
        </div>
        <div style={ navStyle }>
          <ul style={ navMenuStyle }>
            <Link to='/' style={ navMenuListStyle }><li>Shopping Cart <span style={ cartLabelStyle }>{ this.props.shoppingCart.count }</span></li></Link>
            <Link to='/' style={ navMenuListStyle }><li>Login</li></Link>
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
