import React from "react";
import {link} from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
    return (
        <div className="login">
            <div className="facebook">
                <div className="facebooktext">
                    Facebook
                </div>
                <div className="title">
                    Facebook helps us connect and share information.
                </div>
            </div>
            <div className="LoginContainer">
                <div className="Logindetails">
                    <input type="email" placeholder="Email address or phone number" />
                    <br />
                    <input type="password" placeholder="Password" />
                    <br />
                    <button className="btn">
                        <Link to= "/HeaderArea">LoginIn</Link>
                    </button>
                </div>
                <div className="forget">
                    <a href="forget">Forgotten Password?</a>
                    <br />
                    <button className="btns">
                        Create New Account
                    </button>
                </div>
                <p></p>
                <br />
                <div className="page">
                    <a href="create page"><b>Create a Page</b></a> for a Celebrity, Brand, or Business.
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
