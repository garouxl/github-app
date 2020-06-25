'use strict'

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Pagination from './index'

const stories = storiesOf('Pagination', module)

stories.add('without props', () => (
  <Pagination />
))

stories.add('with total & active page', () => (
  <Pagination
    total={10}
    activePage={5}
  />
))

stories.add('with page link', () => (
  <Pagination
    total={20}
    activePage={10}
    pageLink='http://www.mypage.com/page/%page%'
  />
))

stories.add('with callback', () => (
  <Pagination
    total={30}
    activePage={15}
    pageLink='http://www.mypage.com/page/%page%'
    onClick={(page) => {
      window.alert(page)
    }}
  />
))
