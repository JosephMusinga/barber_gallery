import React from 'react'
import './Gallery.css'
import { useNavigate } from 'react-router-dom'

function Gallery() {
    const navigate = useNavigate()

    return (
        <div className='gallery'>
            <h1>Gallery</h1>
            <button onClick={() => navigate(-1)}>Go Back Home</button>
        </div>
    )
}

export default Gallery