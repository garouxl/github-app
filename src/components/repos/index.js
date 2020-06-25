'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import Pagination from 'components/pagination'

import './repos.css'

const Repos = ({ className, title, repos, handlePagination }) => (
  <div className={className}>
    <h2>{title}</h2>
    <ul className={`${className}__list`}>
      {
        repos.repos.map((repo, index) => (
          <li className={`${className}__item`} key={index}>
            <a href={repo.html_url}>{repo.name}</a>
          </li>
        ))
      }
    </ul>
    <Pagination total={repos.pagination.total} activePage={repos.pagination.activePage} onClick={handlePagination} />
  </div>
)

Repos.defaultProps = {
  className: ''
}

Repos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  handlePagination: PropTypes.func.isRequired,
  repos: PropTypes.shape({
    repos: PropTypes.arrayOf(PropTypes.shape({
      link: PropTypes.string,
      name: PropTypes.string.isRequired
    })).isRequired,
    pagination: PropTypes.shape({
      total: PropTypes.number,
      activePage: PropTypes.number
    }).isRequired
  })
}

export default Repos
