import React from 'react'
import { BiCameraMovie } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <nav class="navbar navbar-expand-lg " style={{background:'green'}}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Book My Show <BiCameraMovie /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active"  to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active"  to="/show">Show</Link>
                            </li>
                            {/* <li class="nav-item">
                                <Link class="nav-link active"  to="/user">User</Link>
                            </li> */}
                            <li class="nav-item">
                                <Link class="nav-link active"  to="/login">Login</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active"  to="/reg">Registration</Link>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit" style={{background:'#DC2626',color:'white'}}>Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </nav>
    )
}

export default Navbar