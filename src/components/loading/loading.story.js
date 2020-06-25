'use strict'

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Loading from './index'

const stories = storiesOf('Loading', module)

stories.add('with info', () => (
  <Loading
    info='Carregando dados básicos'
  />
))

stories.add('with other info', () => (
  <Loading
    info='Carregando dados diferenciados'
  />
))
