'use strict'

import { storiesOf, action } from '@kadira/storybook'
import React from 'react'

import Search from './index'

const story = storiesOf('Search component', module)

story.add('Search action', () => (
  <Search
    isDisabled={false}
    onHandleSearch={action('Seached')}
  />
))
