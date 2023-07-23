import React from 'react'
import './Navigator.css'
import { useNavigate } from 'react-router-dom'

function Navigator() {
    const navigate = useNavigate()

    return (
        <div className='navigator'>
            <button onClick={()=>navigate('/camera')}>Camera</button>
            <button onClick={() => navigate('/gallery')}>Gallery</button>
        </div>
    )
}

export default Navigator