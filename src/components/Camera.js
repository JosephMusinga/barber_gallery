import React from 'react'
import './Camera.css'
import { useNavigate } from 'react-router-dom'


function Camera() {
  const navigate = useNavigate()

  return (
    <div className='camera'>
      <h1>Camera</h1>
      <button onClick={()=>navigate(-1)}>Go Back Home</button>
      <button onClick={() => navigate('/uploadForm')}>add from local storage</button>
    </div>
  )
}

export default Camera