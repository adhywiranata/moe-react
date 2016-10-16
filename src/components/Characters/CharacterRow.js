import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

const { connector } = require('../../store/Store')

class CharacterRow extends Component {

  constructor (props) {
    super(props)
  }

  handleAddToCartClick () {
    var shoppingCartState = {
      count: this.props.shoppingCart.count + 1,
      items: []
    }
    this.props.setShoppingCart(shoppingCartState)
  }

  render () {

    var imageUrl = './public/images/' + this.props.photo

    var characterStyle = {
      float: 'left',
      margin: 5,
      marginRight: 10,
      padding: 0,
      paddingBottom:20,
      width:'18%',
      height: 'auto',
      overflow: 'hidden',
      borderRadius:10,
      textAlign:'center',
      fontFamily:'Open Sans, sans-serif',
      textTransform:'capitalize',
      position:'relative',
      cursor: 'pointer'
    }

    if(this.props.highlight === 'none') {
      characterStyle.border = '5px solid rgba(0,0,0,0.1)'
    }
    else if(this.props.highlight === 'click') {
        characterStyle.border = '5px solid #F5AB35'
    }
    else if(this.props.highlight === 'hover') {
        characterStyle.border = '5px solid rgba(0,0,0,0.3)'
    }

    var characterImgStyle = {
        height:'200px',
        width:'100%',
        objectFit:'cover',
        borderTopRightRadius:4,
        borderTopLeftRadius:4
    }

    var hotBannerStyle = {
      background:'#EB9532',
      color: '#FFFFFF',
      position: 'absolute',
      top: 0,
      left:0,
      fontFamily:'Open Sans, sans-serif',
      padding:5,
      fontWeight:'bold',
      borderBottomRightRadius:20,
    }

    var detailsButtonStyle = {
      background: '#59ABE3',
      color: '#FFFFFF',
      padding: 10,
      textAlign: 'center',
      textDecoration: 'none',
      marginBottom: 10
    }

    var addToCartButtonStyle = {
      background: '#26A65B',
      color: '#FFFFFF',
      padding: 10,
      textAlign: 'center',
      textDecoration: 'none',
      marginBottom: 10,
      marginLeft: 5,
      width: 'auto'
    }

    return (
      <div style={characterStyle}
          onClick={this.props.handleClick.bind(this,this.props._id)}
          onMouseEnter={this.props.handleMouseEnter.bind(this,this.props._id)}
          onMouseLeave={this.props.handleMouseLeave.bind(this,this.props._id)}>
        <div style={hotBannerStyle}>NEW</div>
        <img src={`../images/${ this.props.photo }`} style={characterImgStyle}/>
        <h3>{ this.props.name }</h3>
        <p>{ this.props.price } Yen</p>
        <Link to={`/character/${this.props._id}`} style={ detailsButtonStyle }>View Details</Link>
        <span style={ addToCartButtonStyle } onClick={ this.handleAddToCartClick.bind(this) }>Add to Cart</span>
      </div>
    )
  }
}

CharacterRow.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  setShoppingCart: PropTypes.func
}

export default connector(CharacterRow)
