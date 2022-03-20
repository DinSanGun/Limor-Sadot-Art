import React, { useEffect } from 'react'

const Blocker = () => {

    useEffect(() => {
        setTimeout(() => {
            document.getElementById('blocker').remove();
       }, 3000);
    },[])


  return (
    <div id="blocker" ></div>
    )
}

export default Blocker