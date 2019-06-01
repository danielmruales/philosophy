import React from 'react';
import {Link} from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    return (
        <div className='mainNav'>
            <Link to='/' className='navItems'>Home</Link>
            <Link to='/about' className='navItems'>About</Link>
            <Link to='/topics' className='navItems'>Topics</Link>
            <Link to='/philosophers' className='navItems'>Philosophers</Link>
        </div>
    );
};

export default Nav;