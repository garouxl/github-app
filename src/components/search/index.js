'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import './search.css'

const Search = ({ onHandleSearch, isDisabled }) => (
  <section className='search'>
    <input
      className='search__field'
      type='text'
      placeholder='Digite o nome de usuário do Github'
      disabled={isDisabled}
      onKeyUp={onHandleSearch}
    />
  </section>
)

Search.propTypes = {
  onHandleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}

export default Search
