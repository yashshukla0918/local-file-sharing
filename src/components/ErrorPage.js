import React from 'react'
import "./component-styles/common.css"
import { Link } from 'react-router-dom'
const ErrorPage = () => {
    return (
       <>
       <div className="container container-style">
        <center>
            <h1>404</h1>
            <p>
                Oops ! 
            </p>
            <p>Unexpected Error Occurred</p>
            <h2>
                <Link to='/'> {'<-'} Back to Home Page</Link>
            </h2>
        </center>
        </div>
       </>
    )
}

export default ErrorPage
