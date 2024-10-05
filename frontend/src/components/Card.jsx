import React from 'react'
import PlanetButton from '../components/PlanetButton.jsx'
import './Card.scss'
import { useNavigate } from 'react-router-dom'

const Card = ({planetName, planetInfo1, planetInfo2}) => {
  const navigate = useNavigate();

  const handleKnowMoreClick = ()=>{
    navigate(`/planetDetails/${planetName}`);
  }
  return (
    <div className='card'>
      <h1>{planetName}</h1>
      <div className="info">
        <li>{planetInfo1}</li>
        <li>{planetInfo2}</li>
      </div>
      <PlanetButton buttonName='Know More-->'onClick={handleKnowMoreClick}/>
    </div>
  )
}

export default Card