import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/' className='navbar-brand'>Exercise Tracker</Link>
                <div className="collapse navbar-collapse">
                    <ul className='navbar-nav mr-auto'>
                    <li className="nav-item">
                    <Link to='/' className='nav-link'>Exercises</Link>
                    </li>
                    <li className="nav-item">
                    <Link to='/createExercises' className='nav-link'>Create Exercises</Link>
                    </li>
                    <li>
                    <li className="nav-item">
                    <Link to='/createUsers' className='nav-link'>Create Users</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        );
    }
}




