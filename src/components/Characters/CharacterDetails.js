import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import CharacterEditForm from './CharacterEditForm'

class CharacterDetails extends Component {

  constructor(props) {
    super(props)
    this.state = {
      character: props.params
    }
  }

  render() {
    var detailsContainerStyle = {
      padding: 50,
    }

    var characterDetailsImgStyle = {
      width: 350
    }

    var detailsColumnLeftStyle = {
      width:'30%',
      float: 'left'
    }

    var detailsColumnRightStyle = {
      width:'70%',
      float: 'left',
      fontFamily: 'monospace'
    }

    var detailsCharacterNameStyle = {
      textTransform: 'capitalize',
      fontSize: '3em'
    }

    var character = this.state.character

    return (
      <div style={ detailsContainerStyle }>
        <Link to='/'> Back </Link>
        <div style={ detailsColumnLeftStyle }>
          <img src={ `./public/images/${ character.photo }` } style={ characterDetailsImgStyle }/>
        </div>
        <div style={ detailsColumnRightStyle }>
          <h1 style={ detailsCharacterNameStyle }>#{ character._id } { character.name }</h1>
          <p>{ character.description }</p>
        </div>
      </div>
    )
  }
}

CharacterDetails.propTypes = {
  params: PropTypes.object.isRequired
}

export default CharacterDetails
