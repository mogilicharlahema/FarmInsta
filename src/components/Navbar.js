import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import content from '../images/content.jpeg'
import { FaUserEdit } from "react-icons/fa";

const Navbar = () => {
    return (
        <>
   <nav>
    <div className="logo-container">
        <a href="/">
            <img className="logo" src={content} alt="Logo" />
        </a>
    </div>
    
         {/* <img className='logo' src={content}></img> */}
            <ul style={{ display: 'flex', justifyContent: 'space-around', listStyleType: 'none', margin: 0, padding: 0 }}>
                <li>
                    <Link to="/" style={{ color: 'whitesmoke', textDecoration: 'none',fontSize:'20px' }}>ProfileSearch</Link>
                </li>
                <li>
                    
                    <Link to="/profile" style={{ color: 'whitesmoke', textDecoration: 'none',fontSize:'20px' }}>Profile View</Link>

                </li>
                <li>
                    
                    <Link to="/profile/edit" style={{ color: 'whitesmoke', textDecoration: 'none',fontSize:"20px", }}>
                   ProfileEdit
    </Link>
                </li> 
            </ul>
       </nav>
        </>
    );
};

export default Navbar;
