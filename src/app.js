'use strict'
import React, { Component } from 'react'

import ajax from '@fdaciuk/ajax'
import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false,
      isFetchingRepos: false
    }

    this.handleSearch = this.handleSearch.bind(this)
  }

  getGitHubApiUrl (username, type) {
    const internalUser = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUser}${internalType}`
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
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following
            },
            repos: [],
            starred: []
          })
        })
        .always(() => {
          // e.target.disabled = false
          this.setState({ isFetching: false })
        })
    }
  }

  getRepos (type) {
    return (e) => {
      this.setState({ isFetchingRepos: true })
      const username = this.state.userinfo.login
      ajax().get(this.getGitHubApiUrl(username, type))
        .then((result) => {
          this.setState({
            [type]: result.map(item => (
              { name: item.name, html_url: item.html_url }
            ))
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
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
        isFetching={this.state.isFetching}
        isFetchingRepos={this.state.isFetchingRepos}
        onHandleSearch={this.handleSearch}
        getRepos={this.getRepos('repos')}
        getStarred={this.getRepos('starred')}
      />
    )
  }
}

export default App
