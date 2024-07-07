import React from 'react'
//this is imported from router dom for no reloads we change a tags->Link and href->to 
import { Link } from 'react-router-dom'
//reusable components are kept in components folder because here navbar is used on eveyr page
export default function Navbar() {
    return (
        //basic property of href is that it directs us to a new page
        //react app helps us make a single page app with no reloads 
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic" to="/">FoodSure</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/createuser">SignUp</Link>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
