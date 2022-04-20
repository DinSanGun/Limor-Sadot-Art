import React from 'react'
import { useNavigate } from 'react-router-dom'


const BackButton = () => {

  const navigate = useNavigate()

  return (
    <div className="back-btn" onClick={() => navigate(-1)}>
        <div className="back-sign">
        </div>
    </div>
  )
}

export default BackButton