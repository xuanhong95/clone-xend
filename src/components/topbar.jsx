import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../scss/topbar.scss';

class Topbar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        {/* <a className="navbar-brand" href="#">Portfolio</a> */}
                        <div id="logo-box" className="span3">
                            <div id="logo" className="site-logo span12">
                                <a href="/" title="Home" rel="home" className="logo">
                                    <img src="https://www.xendpay.com/sites/all/themes/passionxp/logo.png" alt="Home" />
                                </a>
                            </div>
                        </div>

                        <div className="collapse navbar-collapse" id="myNavbar" style={{ marginTop: 10 }}>
                            <ul className="nav navbar-nav upper-letter">
                                <li className="active"><a className="blue-text" href="#">Business</a></li>
                                <li><a className="blue-text" href="#">News</a></li>
                                <li><a className="blue-text" href="#">How it works</a></li>
                                <li><a className="blue-text" href="#">Refer</a></li>
                                <li><a className="blue-text" href="#">Login</a></li>
                                <li>
                                    <a className="blue-bg txtct text-bold rounded4 white-link inline-button paddl10 paddr10 paddt5 paddb5" href="#">SIGN UP</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav >
        )
    }
}
export default Topbar