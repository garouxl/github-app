'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import Loading from '../loading'

import './actions.css'

const Actions = ({ getRepos, getStarred, isFetchingRepos }) => (
  <section className='actions'>
    <button
      className='actions__button'
      onClick={getRepos}
    >
      Ver respositórios
    </button>
    <button
      className='actions__button'
      onClick={getStarred}
    >
      Ver favoritos
    </button>
    { isFetchingRepos && <Loading info='Carregando informações de repositório' top='5.5' left='1.5' /> }
  </section>
)

Actions.propTypes = {
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired,
  isFetchingRepos: PropTypes.bool.isRequired
}

export default Actions
