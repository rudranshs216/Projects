import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
    return (
        <>
        <div className="home_page">
          <div className="home_div">
              <h1 className="err">404</h1>
             <div className="err_div">
             <h2>We are Sorry, Page not found</h2>
             <p>the page you are looking for is might be removed to another location, permanently removed or may be temporarily unavailable </p>
             <button className="btn btn-lg btn-outline-primary"><NavLink className="nav" to="/">Go back to Home Page</NavLink></button>
             </div>
          </div>

        </div>
            
        </>
    )
}

export default Error
