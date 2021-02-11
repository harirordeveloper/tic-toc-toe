import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'



const Game = props => (
  <div>Game {props.current_user.name}!</div>
)

Game.defaultProps = {
  name: 'David'
}

Game.propTypes = {
  name: PropTypes.string
}

export default Game