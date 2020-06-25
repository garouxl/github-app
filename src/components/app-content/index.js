'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import Search from '../search'
import UserInfo from '../user-info'
import Actions from '../actions'
import Repos from '../repos'
import Loading from '../loading'

import './app-content.css'

const AppContent = ({
  userinfo,
  repos,
  starred,
  isFetching,
  isFetchingRepos,
  onHandleSearch,
  getRepos,
  getStarred,
  handlePagination
}) => (
  <div className='app'>
    <Search isDisabled={isFetching} onHandleSearch={onHandleSearch} />
    { isFetching && <Loading info='Carregando informações de usuário' top='6.3' left='1.5' /> }
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {
      !!userinfo &&
        <Actions
          getRepos={getRepos}
          getStarred={getStarred}
          isFetchingRepos={isFetchingRepos}
        />
    }
    {!!userinfo && <section className='repository'>
      {!!repos.repos.length &&
        <Repos
          className='repos'
          title='repositórios'
          repos={repos}
          handlePagination={(clicked) => handlePagination('repos', clicked)}
        />}
      {!!starred.repos.length &&
        <Repos
          className='starred'
          title='favoritos'
          repos={starred}
          handlePagination={(clicked) => handlePagination('starred', clicked)}
        />}
    </section>}
  </div>
)

const reposPropTypesShape = {
  repos: PropTypes.array.isRequired,
  pagination: PropTypes.object
}

// .shape serve para informar os tipos dentro de um objeto
AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.shape(reposPropTypesShape).isRequired,
  starred: PropTypes.shape(reposPropTypesShape).isRequired,
  isFetching: PropTypes.bool.isRequired,
  isFetchingRepos: PropTypes.bool.isRequired,
  onHandleSearch: PropTypes.func.isRequired,
  handlePagination: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired

}

export default AppContent
