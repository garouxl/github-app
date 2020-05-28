'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import Search from '../search'
import UserInfo from '../user-info'
import Actions from '../actions'
import Repos from '../repos'

import './app-content.css'

const AppContent = ({
  userinfo,
  repos,
  starred,
  isFetching,
  isFetchingRepos,
  onHandleSearch,
  getRepos,
  getStarred
}) => (
  <div className='app'>
    <Search isDisabled={isFetching} onHandleSearch={onHandleSearch} />
    {isFetching && <div className='loading'>Carregando...</div>}
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {
      !!userinfo &&
        <Actions
          getRepos={getRepos}
          getStarred={getStarred}
          isFetchingRepos={isFetchingRepos}
        />
    }
    {!!repos.length &&
      <Repos
        className='repos'
        title='repositórios'
        repos={repos}
      />}
    {!!starred.length &&
      <Repos
        className='starred'
        title='favoritos'
        repos={starred}
      />}
  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isFetchingRepos: PropTypes.bool.isRequired,
  onHandleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired

}

export default AppContent
