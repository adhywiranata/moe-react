import React, { Component, PropTypes }  from 'react'
const { connector } = require('../../store/Store')

import CharacterRow from './CharacterRow'


class Characters extends Component {
  constructor(props){
    super(props)
    this.state = {
      'characters': props.route.charactersData.map((character) => {
        character.highlight = 'none'
        return character
      })
    }

    this.handleClick      = this.handleClick.bind(this)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  render () {

    var listContainerStyle = {
      padding: 50,
      width: '100%',
      boxSizing: 'border-box'
    }

    var characterHighlightBannerStyle = {
      padding: 10,
      background:'#EB9532',
      color:'#FFFFFF',
      fontFamily:'Open Sans, sans-serif',
      margin:'20 0',
      borderRadius:5
    }

    var renderedCharacters = this.state.characters.filter((character) => {
      return character.name.includes(this.props.searchTerm) //this props.searchTerm comes from redux
    })

    var charatersList = renderedCharacters.map((character) => {
          return <CharacterRow {...character}
              key={character._id}
              handleClick={this.handleClick.bind(this)}
              handleMouseEnter={this.handleMouseEnter.bind(this)}
              handleMouseLeave={this.handleMouseLeave.bind(this)}/>
        })

    var characterHighlights = renderedCharacters.filter((character) => { return character.highlight === 'click' })

    if (characterHighlights.length > 0) {
      var highlightedCharacters = <div
        style={characterHighlightBannerStyle}>
        {characterHighlights.length} items selected
      </div>
    }
    else {
      var highlightedCharacters = ''
    }
    return (
      <div style = { listContainerStyle } >
        { highlightedCharacters }
        { charatersList }
      </div>
    )
  }

  handleClick(_id){
    var characterState = this.state.characters
    var characterIndex = characterState.map((character) => { return character._id } ).indexOf(_id)

    if (characterState[characterIndex].highlight === 'click') {
      characterState[characterIndex].highlight = 'none'
    }
    else {
      characterState[characterIndex].highlight = 'click'
    }

    this.setState({ characters: characterState })
  }

  handleMouseEnter(_id){
    var characterState = this.state.characters
    var characterIndex = characterState.map((character) => { return character._id } ).indexOf(_id)
    if(characterState[characterIndex].highlight !== 'click'){
      characterState[characterIndex].highlight = 'hover'
    }
    this.setState({characters: characterState})
  }

  handleMouseLeave(_id){
    var characterState = this.state.characters
    var characterIndex = characterState.map((character) => { return character._id } ).indexOf(_id)
    if(characterState[characterIndex].highlight !== 'click'){
      characterState[characterIndex].highlight = 'none'
    }

    this.setState({characters: characterState})
  }
}

Characters.propTypes = {
  route       : PropTypes.object,
  searchTerm  : PropTypes.string
}

export default connector(Characters)
