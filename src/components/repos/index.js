'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import './repos.css'

const Repos = ({ className, title, repos }) => (
  <div className={className}>
    <h2>{title}</h2>
    <ul>
      {
        repos.map((repo, index) => (
          <li key={index}>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={repo.html_url}
            >
              {repo.name}
            </a>
          </li>
        ))
      }
    </ul>
  </div>
)

Repos.defaultProps = {
  className: '',
  repos: []
}

Repos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.array
}

export default Repos
