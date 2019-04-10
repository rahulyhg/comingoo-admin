import React from 'react';
import { Link } from 'react-router-dom';


class Nav extends React.Component{
    render(){
        return(
            <header>
                <nav>
                    <li><Link to='/driver'>Driver</Link>
                      <ul>
                        <li><Link to='/driver/profile'>Driver Profile</Link></li>
                      </ul>
                    </li>
                    <li><Link to='/rider'>Rider</Link></li>
                    <li><Link to='/rides'>All Rides</Link></li>
                </nav>
            </header>
        );
    }
}

export default Nav;
