'use strict'

import { storiesOf } from '@kadira/storybook'
import React from 'react'

import Repos from './index'

const story = storiesOf('Repos component', module)

story.add('With title & repos', () => (
  <Repos
    title='Favoritos'
    repos={{
      repos: [{
        html_url: 'http://google.com',
        name: 'Google.com'
      }],
      pagination: {
        total: 1,
        activePage: 1
      }
    }}
  />
))

story.add('With title & repos & class', () => (
  <Repos
    className='repos'
    title='Favoritos'
    repos={{
      repos: [{
        html_url: 'http://google.com',
        name: 'Google.com'
      }],
      pagination: {
        total: 1,
        activePage: 1
      }
    }}
  />
))
