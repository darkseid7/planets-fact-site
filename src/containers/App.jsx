import React from 'react'
import Header from '../components/Header'
import '../assets/styles/App.scss'
import bgStars from '../assets/img/background-stars.svg'

const App = () => {
    return(
        <div className="app">
            <div className='bg-stars'  style={{ backgroundImage: `url(${bgStars})` }}> 
            <Header/>   
            </div>
        </div>
    )
}

export default App