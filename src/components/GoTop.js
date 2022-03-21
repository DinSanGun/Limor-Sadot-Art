import React from 'react'

const GoTop = () => {
  return (
    <span className='go-top' onClick={() => window.scrollTo(0,0)}>
        &#9650;
        <br />
        go top
    </span>
  )
}

export default GoTop