import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div className='mainHome'>
                <h1>Philosophize This!</h1>
                {/* <img src='https://cdn-images-1.medium.com/max/1600/1*-jU1GBK5h04U927fg41haA.png' alt='home logo'/> */}
                <Link to='/philosophers'><button>View Philosopher's</button></Link>
            </div>
        );
    }
}

export default Home;