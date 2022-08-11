import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
            <ul className="navbarUl">
                <li>
                    <Link className='link' to="/top_rated">Top Rated</Link>
                </li>
                <li>
                    <img height="50%" src="https://lh3.googleusercontent.com/zSPNQP5Q3gVkoQ1TsYI9AiTOoyColTI97rcFVhiQrusfAzbGUae7FULRR2Wr1qnH1-I=w24" />
                    <Link className='link' to="/">Search
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