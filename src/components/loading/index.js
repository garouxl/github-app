'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import './loading.css'

const Loading = ({ info, top, left }) => (
  <section
    className='loading'
    style={{
      top: `${top}rem`,
      left: `${left}rem`
    }}
  >
    <div className='loading__info'>
      {info}
    </div>
  </section>
)

Loading.propTypes = {
  info: PropTypes.string
}

export default Loading
