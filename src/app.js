'use strict'
import React, { Component } from 'react'

import ajax from '@fdaciuk/ajax'
import AppContent from './components/app-content'

const initialReposState = {
  repos: [],
  pagination: {
    total: 1,
    activePage: 1
  }
}
class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: initialReposState,
      starred: initialReposState,
      isFetching: false,
      isFetchingRepos: false
    }

    this.perPage = 3
    this.handleSearch = this.handleSearch.bind(this)
  }

  getGitHubApiUrl (username, type, page = 1) {
    const internalUser = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUser}${internalType}?per_page=${this.perPage}&page=${page}`
  }

  // o evento aqui é sintético, existe apenas no react, como esse metodo é assincrono, não podemos usar o mesmo evento, pois o react zera ele após o uso
  // para persistir podemos usar o evento persist desse evento ou copiar uma referencia dele em um variavel e usar por la, abaixo segue o persist
  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const enter = 13
    // persistindo o evento sintético
    // e.persist() // assim ou igual abaixo
    // const target = e.target // assim seria para usar uma ref do evento

    if (keyCode === enter) {
      // e.target.disabled = true
      this.setState({ isFetching: true })
      ajax().get(this.getGitHubApiUrl(value))
        .then((result) => {
          this.setState({
            userinfo: {
              username: result.name,
              photo: result.avatar_url,
              url: result.html_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following
            },
            repos: initialReposState,
            starred: initialReposState
          })
        })
        .always(() => {
          // e.target.disabled = false
          this.setState({ isFetching: false })
        })
    }
  }

  getRepos (type, page) {
    return (e) => {
      this.setState({ isFetchingRepos: true })
      const username = this.state.userinfo.login
      ajax().get(this.getGitHubApiUrl(username, type, page))
        .then((result, xhr) => {
          const linkHeader = xhr.getResponseHeader('Link') || ''
          const totalPagesMatch = linkHeader.match(/&page=(\d+)>; rel="last/)
          this.setState({
            [type]: {
              repos: result.map(item => ({
                name: item.name,
                html_url: item.html_url
              })),
              pagination: {
                total: totalPagesMatch
                  ? +totalPagesMatch[1]
                  : this.state[type].pagination.total,
                activePage: page
              }
            }
          })
        })
        .always(() => {
          this.setState({ isFetchingRepos: false })
        })
    }
  }

  render () {
    // getRepos é um HOF, eel retorna uma função pra ser executada por outro componente
    // o bind pode ser feito de 3 modos, o terceiro, em uso, é o recomendado
    // handleSearch={(e) => this.handleSearch(e)}
    // handleSearch={() => this.handleSearch.bind(this)}
    return (
      /*
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
        isFetching={this.state.isFetching}
        isFetchingRepos={this.state.isFetchingRepos}
        {...this.state} representa a mesma coisa mas usando spread operator ...
      */
      <AppContent
        {...this.state}
        onHandleSearch={this.handleSearch}
        getRepos={this.getRepos('repos')}
        getStarred={this.getRepos('starred')}
        handlePagination={(type, page) => this.getRepos(type, page)()}
      />
    )
  }
}

export default App
