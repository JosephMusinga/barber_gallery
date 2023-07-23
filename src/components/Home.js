import React from 'react'
import Gallery from './Gallery';
import Navigator from './Navigator';
import './Home.css'

function Home() {
    return (
        <>
            <div className='header'>
                <h1>Barber Next Cut</h1>
            </div>
            <Navigator />
            

        </>

    )
}

export default Home