import React from 'react'
import './Navigator.css'
import { useNavigate } from 'react-router-dom'

function Navigator() {
    const navigate = useNavigate()

    return (
        <div className='navigator'>
            <div className='nav__icon'>
                <img src="/camera.jpg" alt="" onClick={() => navigate('/camera')} />
            </div>
            <div className='nav__icon'>
                <img src="/gallery.jpg" alt="" onClick={() => navigate('/gallery')}/>
            </div>
        </div>
    )
}

export default Navigator