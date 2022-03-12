import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
            <ul className="navbarUl">
                <li>
                    <Link className='link' to="/">Movies</Link>
                </li>
                <li>
                    <Link className='link' to="/favorites">Favorites</Link>
                </li>
                <li>
                    <Link className='link' to="/blogs">Blogs</Link>
                </li>
                <li>
                    <Link className='link' to="/create_blog">Create Blog</Link>
                </li>
            </ul>
        </div>
    );
}
export default Navbar;