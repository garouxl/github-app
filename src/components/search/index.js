'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import './search.css'

const Search = ({ onHandleSearch, isDisabled }) => (
  <div className='search'>
    <input
      type='text'
      placeholder='Digite o nome de usuário do Github'
      disabled={isDisabled}
      onKeyUp={onHandleSearch}
    />
  </div>
)

Search.propTypes = {
  onHandleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}

export default Search
