import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'

function Signup() {
    return(
        <>
            <div className='leftPanel'></div>
            <div className='rightPanel'>
                This is the Signup page<br></br>
                <Link to='/dashboard'>Click here</Link>
            </div>
        </>
    )
}

export default Signup;