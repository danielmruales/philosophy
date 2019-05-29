import React from 'react';
import {Link} from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    return (
        <div className='mainNav'>
            <Link to='/' className='navItems'>Home</Link>
            <Link to='/about' className='navItems'>About</Link>
            <Link to='/contact' className='navItems'>Contact</Link>
        </div>
    );
};

export default Nav;