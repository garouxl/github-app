'use strict'

import { storiesOf } from '@kadira/storybook'
import React from 'react'

import Repos from './index'

const story = storiesOf('Repos component', module)

story.add('With title prop', () => (
  <Repos
    title='Favoritos'
  />
))

story.add('With title & repos', () => (
  <Repos
    title='Favoritos'
    repos={[{
      html_url: 'http://google.com',
      name: 'Google.com'
    }]}
  />
))

story.add('With title & repos & class', () => (
  <Repos
    className='repos'
    title='Favoritos'
    repos={[
      {
        html_url: 'http://google.com',
        name: 'Google.com'
      },
      {
        html_url: 'http://terra.com.br',
        name: 'Terra.com'
      }
    ]}
  />
))
