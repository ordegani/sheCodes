import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
            <ul className="navbarUl">
                <li>
                    <Link className='link' to="/">Top Rated</Link>
                </li>
                <li>
                    <Link className='link' to="/search">Search
                    <img height="50%"
                            src="https://lh3.googleusercontent.com/zSPNQP5Q3gVkoQ1TsYI9AiTOoyColTI97rcFVhiQrusfAzbGUae7FULRR2Wr1qnH1-I=w24"
                        />
                    </Link>
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