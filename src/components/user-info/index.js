'user strict'

import React from 'react'
import PropTypes from 'prop-types'

import './user-info.css'

const UserInfo = ({ userinfo }) => (
  <section className='user-info'>
    <img className='user-info__user-image' src={userinfo.photo} alt='imagem' />
    <h1 className='user-info__user-name'>
      <a target='_blank' rel='noopener noreferrer' href={userinfo.url}>
        {userinfo.username}
      </a>
    </h1>
    <ul className='repos-list'>
      <li className='repos-list__item'>
        <em>Repositorios:</em> {userinfo.repos}
      </li>
      <li className='repos-list__item'>
        <em>Seguidores:</em> {userinfo.followers}
      </li>
      <li className='repos-list__item'>
        <em>Seguindo:</em> {userinfo.following}
      </li>
    </ul>
  </section>
)

UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  })
}

export default UserInfo
