import React, { useState } from 'react'
import './Gallery.css'
import { useNavigate } from 'react-router-dom'

function Gallery() {
    const navigate = useNavigate()
    // const imageUrls = ['/wallpaper.jpg', '/jay.jpg', '1.jpg', '3.gif', '11.jpg', '22.jpeg', '33.jpeg']

    // const imageElement = imageUrls.map((url) => {
    //     return (
    //         <div className="gallery__item">
    //             <img src={url} alt='new' />
    //         </div>

    //     );
    // });

    let data = [
        {
            id: 1,
            imgSrc: '/wallpaper.jpg',
        },
        {
            id: 2,
            imgSrc: '/jay.jpg',
        },
        {
            id: 3,
            imgSrc: '/1.jpg',
        },
        {
            id: 4,
            imgSrc: '3.gif',
        },
        {
            id: 5,
            imgSrc: '11.jpg',
        },
        {
            id: 6,
            imgSrc: '22.jpeg',
        },
        {
            id: 7,
            imgSrc: '33.jpeg',
        }
    ]

    const [model, setModel] = useState(false)
    const [tempImgSrc, setTempImgSrc] = useState('')

    const getImage = (imgSrc) => {
        setTempImgSrc(imgSrc)
        setModel(true)
    }

    return (
        <>
            <div className='gallery'>
                <div className='back__button'>
                    <button onClick={() => navigate(-1)}>Back</button>
                </div>
                <h1>Gallery</h1>
            </div>

            <div className={model ? 'model open' : 'model'}>
                <img src={tempImgSrc} alt=''/>
                <button onClick={() => setModel(false)}>X</button>
            </div>
            <div className="gallery__items">
                {data.map((item, index) => {
                    return (
                        <div className="gallery__item" key={index} onClick={() => getImage(item.imgSrc)}>
                            <img src={item.imgSrc} alt='' style={{ width: '100%' }} />
                        </div>
                    )
                })}

            </div>
        </>
    )
}

export default Gallery