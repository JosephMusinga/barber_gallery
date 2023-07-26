import React from 'react'
import './Gallery.css'
import { useNavigate } from 'react-router-dom'

function Gallery() {
    const navigate = useNavigate()
    const imageUrls = ['/wallpaper.jpg', '/jay.jpg', '1.jpg', '3.gif', '11.jpg', '22.jpeg', '33.jpeg']

    const imageElement = imageUrls.map((url) => {
        return (
            <div className="gallery__item">
                <img src={url} alt='new' />
            </div>

        );
    });

    return (
        <>
            <div className='gallery'>
                <div className='back__button'>
                    <button onClick={() => navigate(-1)}>Back</button>
                </div>
                <h1>Gallery</h1>
            </div>
            <div className="gallery__items">
                {imageElement}
            </div>
        </>
    )
}

export default Gallery