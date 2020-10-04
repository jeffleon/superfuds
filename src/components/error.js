import React from 'react'
import notFound from '../assets/404-not-found.gif'
import './styles/error.css'

const Error = () =>{
    return(
        <div>
            <img className="notfound" src={notFound} />
        </div>
    )
}

export default Error