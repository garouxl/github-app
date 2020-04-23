'use strict'

import { storiesOf, action } from '@kadira/storybook'
import React from 'react'
import AppContent from './index'

const storie = storiesOf('AppContent component', module)

storie.add('Must have all attributes', () => (
  <div>App content test</div>
))

/* const fakeState = {
  userInfo: {
    username: 'test name',
    photo: 'https://via.placeholder.com/150',
    url: 'http://google.com',
    login: 'test login',
    repos: 4,
    followers: 2,
    following: 3
  },
  isFetchingRepos: true,
  isFetching: true,
  repos: [
    {
      html_url: 'http://google.com',
      name: 'Google.com'
    },
    {
      html_url: 'http://terra.com.br',
      name: 'Terra.com'
    }
  ],
  starred: [
    {
      html_url: 'http://google.com',
      name: 'Google.com'
    },
    {
      html_url: 'http://terra.com.br',
      name: 'Terra.com'
    }
  ],
  onHandleSearch: action('test'),
  getRepos: action('test'),
  getStarred: action('test')
}

storie.add('Must have all attributes', () => (

  <AppContent
    {...fakeState}
    onHandleSearch={action('Search')}
    getRepos={() => {}}
    getStarred={() => {}}
  />
)) */
