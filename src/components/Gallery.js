import React from 'react'
import './Gallery.css'
import { useNavigate } from 'react-router-dom'

function Gallery() {
    const navigate = useNavigate()
    const imageUrls = ['/wallpaper.jpg']

    const imageElement = imageUrls.map((url) => {
        return <img src='/wallpaper.jpg' alt='new' />;
    });

    return (
        <>
            <div className='gallery'>
                <div className='back__button'>
                    <button onClick={() => navigate(-1)}>Back</button>
                </div>
                <h1>Gallery</h1>
            </div>
            <div className="gallery__item">
                {imageElement}
            </div>
        </>
    )
}

export default Gallery