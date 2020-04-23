'user strict'

import React from 'react'
import PropTypes from 'prop-types'

import './user-info.css'

const UserInfo = ({ userinfo }) => (
  <div className='userInfo'>
    <img src={userinfo.photo} alt='imagem' />
    <h1 className='username'>
      <a target='_blank' rel='noopener noreferrer' href={userinfo.url}>
        {userinfo.username}
      </a>
    </h1>
    <ul className='reposName'>
      <li>Repositorios: {userinfo.repos}</li>
      <li>Seguidores: {userinfo.followers}</li>
      <li>Seguindo: {userinfo.following}</li>
    </ul>
  </div>
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
