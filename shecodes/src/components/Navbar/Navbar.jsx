import React from 'react';
import {  Link } from "react-router-dom";

const Navbar= () =>{
    return (
    <div>
      <li>
        <Link to="/">Movies</Link>
      </li>
      <li>
        <Link to="/favorites">Favorites</Link>
      </li>
    </div>
    );
}  
export default Navbar;