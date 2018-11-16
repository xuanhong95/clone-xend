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
                        <div id="lang-country-box">
                            <div className="lang-country-wrapper span12">
                                <div className="region region-lang-country-box">
                                    <div className="dropdown" style={{ fontSize: 12 }}>
                                        <div id="language-label" className="blue-text margr13 size14 dropdown-toggle" data-toggle="dropdown">
                                            <div className="margr5 pull-left size14">Language</div>
                                            &nbsp;
                                                <div id="language-selected">EN</div>
                                            &nbsp;
                                                <span className="caret" style={{ marginTop: '5px' }}></span>
                                        </div>
                                        <ul className="dropdown-menu">
                                            <li className="language-option">
                                                <a href="/"><span className="lang-code blue-text pull-left span12">EN</span></a>
                                            </li>
                                            <li className="language-option">
                                                <a href="/fr">
                                                    <span className="lang-code blue-text pull-left span12">FR</span>
                                                </a>
                                            </li>
                                            <li className="language-option">
                                                <a href="/de"><span className="lang-code blue-text pull-left span12">DE</span></a>
                                            </li>
                                            <li className="language-option">
                                                <a href="/es"><span className="lang-code blue-text pull-left span12">ES</span></a>
                                            </li>
                                            <li className="language-option">
                                                <a href="/pl"><span className="lang-code blue-text pull-left span12">PL</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                    &nbsp; &nbsp; &nbsp;
                                    <div className="dropdown" style={{ fontSize: 12 }}>
                                        <div id="language-label" className="blue-text margr13 size14 dropdown-toggle" data-toggle="dropdown">
                                            <div className="margr5 pull-left size14">Vietnam</div>
                                            &nbsp;
                                                <div id="language-selected">VN</div>
                                            &nbsp;
                                                <span className="caret" style={{ marginTop: '5px' }}></span>
                                        </div>
                                        <ul className="dropdown-menu">
                                            <li className="language-option">
                                                <a href="/"><span className="lang-code blue-text pull-left span12">Andorra</span></a>
                                            </li>
                                            <li className="language-option">
                                                <a href="/fr">
                                                    <span className="lang-code blue-text pull-left span12">Australia</span>
                                                </a>
                                            </li>
                                            <li className="language-option">
                                                <a href="/de"><span className="lang-code blue-text pull-left span12">Austria</span></a>
                                            </li>
                                            <li className="language-option">
                                                <a href="/es"><span className="lang-code blue-text pull-left span12">Belgium</span></a>
                                            </li>
                                            <li className="language-option">
                                                <a href="/pl"><span className="lang-code blue-text pull-left span12">Bulgaria</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
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