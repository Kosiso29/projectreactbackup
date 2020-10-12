import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Signin.css';
import {PostData} from '../Pages/PostData'

class Signup extends Component {

    constructor(props){
        super(props);
        this.state = {
            "Email" : '',
            "Password" : ''
        }
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
        console.log(this.state);
    }

    login(){
        PostData(this.state).then ((result) => {
            let responseJSON = result;
            console.log(responseJSON);
        })
    }

    render(){
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
                        <input className='search-txtSignin' type='text' placeholder="Name" name="Email" onChange={this.onChange} />
                        <Link className='search-btnSignin' to='#'></Link>
                    </div>
                    <div className='search-boxSignin'>
                        <input className='search-txtSignin' type='text' placeholder="Password" name="Password" onChange={this.onChange} />
                        <Link className='search-btnSignin' to='#'></Link>
                    </div>
                    <div className='buttonSignin'>
                    <Link to='/dashboard'><button type='submit' onClick={this.login}>Login</button></Link>
                    </div>
                </div>
            </>
        )
    }
}

export default Signup;