import React from 'react'

const YouTubeVideo = (props) => {
  return (
        <iframe
            src={props.link}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            className='youtube'
        />
  )
}

export default YouTubeVideo