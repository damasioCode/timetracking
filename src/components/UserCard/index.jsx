import React from 'react'
import './style.scss'

const UserCard = ({name, image}) => {
  return (
    <li className="userCard">
      <div className="userCard__header">
        <div className="userCard__header-image">
          <img src={image} alt={name} />
        </div>
        <div className="userCard__info">
          <p className="userCard__info-subtitle">Report for</p>
          <h2 className="userCard__info-name">{name}</h2>
        </div>
      </div>
      <ul className="userCard__time">
        <li><a href="#">Daily</a></li>
        <li><a href="#">Weekly</a></li>
        <li><a href="#">Monthly</a></li>
      </ul>
    </li>
  )
}

export default UserCard