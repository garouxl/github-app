'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import './actions.css'

const Actions = ({ getRepos, getStarred, isFetchingRepos }) => (
  <div className='actions'>
    <button
      onClick={getRepos}
    >
      Ver respositórios
    </button>
    <button
      onClick={getStarred}
    >
      Ver favoritos
    </button>
    {isFetchingRepos && <div className='loading'>carregando...</div>}
  </div>
)

Actions.propTypes = {
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired,
  isFetchingRepos: PropTypes.bool.isRequired
}

export default Actions
