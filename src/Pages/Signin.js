import React from 'react';
import { Link } from 'react-router-dom';
import './Signin.css'

function Signup() {
    return(
        <>
            <div className='leftPanel'>
                <img src={process.env.PUBLIC_URL + "/assets/img/logo.png"} width='73' />
                <img src={process.env.PUBLIC_URL + "/assets/img/auroraname.png"} width='180' />
                <h1>Welcome Back!</h1>
                <p>Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus</p>
                {/* <img src={process.env.PUBLIC_URL + "/assets/img/signin.png"} /> */}
                <div></div>
            </div>
            <div className='rightPanel'>
                <div className='search-boxSignin'>
                    <input className='search-txtSignin' type='text' placeholder="Name" />
                    <Link className='search-btnSignin' to='#'></Link>
                </div>
                <div className='search-boxSignin'>
                    <input className='search-txtSignin' type='text' placeholder="Password" />
                    <Link className='search-btnSignin' to='#'></Link>
                </div>
                <div className='buttonSignin'>
                <Link to='/dashboard'><button type='submit'>Login</button></Link>
                </div>
            </div>
        </>
    )
}

export default Signup;