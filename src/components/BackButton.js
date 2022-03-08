import React from 'react'
import { useNavigate } from 'react-router-dom'


const BackButton = () => {

  const navigate = useNavigate()

  return (
    <div className="back-btn" onClick={() => navigate(-1)}>
        <span className="back-sign">
            &#9664;
        </span>
    </div>
  )
}

export default BackButton