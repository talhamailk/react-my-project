import React from 'react'
import { Link } from 'react-router-dom'

const Headers = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <Link className="navbar-brand" to="/">E-Shop</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/products">Products</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">Aboutus</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/gallery">Gallery</Link>
                </li>
                </ul>
                <form className="d-flex">
                <Link className="btn btn-success me-2" to="/login" type="submit">Login</Link>
                <Link className="btn btn-info me-2" to="/register" type="submit">Register</Link>
                <Link className="btn btn-warning me-2" to="/cart" type="submit">Cart</Link>
                </form>
            </div>
            </div>
        </nav>
    </div>
  )
}

export default Headers