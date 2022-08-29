import React from 'react'
import buttonSvg from './../../assets/images/icon-ellipsis.svg'
import './style.scss'

const Card = ({title, hours, lastWeek, icon, background}) => {
  return (
    <li className="card">
      <div className="card__orna" style={{backgroundColor: background }}>
        <img src={icon} alt={title} />
      </div>
      <div className="card__wrapper">
        <div className="card__header">
          <h2 className="card__header-title">{title}</h2>
          <button className="card__header-button"><img src={buttonSvg} alt="Button" /></button>
        </div>
        <div className="card__content">
          <h1 className="card__content-title">{hours}hrs</h1>
          <p className="card__content-subtitle">Last Week - {lastWeek}hrs</p>
        </div>
      </div>
    </li>
  )
}

export default Card