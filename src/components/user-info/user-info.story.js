'use strict'

import { storiesOf } from '@kadira/storybook'
import React from 'react'

import UserInfo from './index'

const storie = storiesOf('UserInfo component', module)

storie.add('Must show user data', () =>(
  <UserInfo
    userinfo={{
      username: 'test name',
      photo: 'https://via.placeholder.com/150',
      url: 'http://google.com',
      login: 'test login',
      repos: 4,
      followers: 2,
      following: 3
    }}
  />
))
