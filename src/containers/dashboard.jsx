import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { relative } from 'path';

const handleSubmit = (e) => {
    e.preventDefault();
    let params = {
        name: e.target[0].value,
        phone: e.target[1].value,
        amount: e.target[2].value,
        purpose: e.target[3].value,
    }
    console.log(params)
    alert("kiểm tra param bắn lên ở console.log")
}

const Dashboard = (props) => {
    return (
        <div>
            <div className="container main">
                {/* image top */}
                <div id="main-slider" style={{ zIndex: 0 }}>
                    <div id="block-block-17" className="container-fluid platform-holder paddr0 paddl0 block block-block">
                        <div className="container container-fluid paddl0 margt20 paddt20">
                            <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12" style={{ position: relative }}>
                                <div className="col-md-6 paddl0 intro-text-box">
                                    <div className="col-md-12">
                                        <h2 className="dark-blue-txt intro-text-1">FAIR, FAST, SAFE</h2>
                                        <div className="paddl0 paddr0 dark-blue-txt intro-text-2">Low cost global money transfers</div>
                                    </div>
                                </div>
                                <div id="BOX64" className="col-md-6 paddl0 intro-text-box">
                                    <div className="container-fluid widget-content">
                                        <div id="HEADLINE65" className="widget-element widget-snap">
                                            <h2 className="widget-content" lp-node="h2">
                                                <span style={{ fontWeight: 'bold' }}>ĐĂNG KÍ NHẬN TƯ VẤN MIỄN PHÍ</span>
                                            </h2>
                                        </div>
                                        <div id="GROUP6" className="widget-element widget-snap widget-group">
                                            <div className="widget-content">
                                                <div id="FORM7" className="widget-element widget-snap">
                                                    <form onSubmit={handleSubmit}>
                                                        <div className="form-group">
                                                            <input type="name" className="form-control" placeholder="Họ và tên" required />
                                                        </div>
                                                        <div className="form-group col-md-5 col-sm-5 col-xs-5 col-lg-5 box64">
                                                            <input type="phone" className="form-control" placeholder="Nhập số điện thoại" required />
                                                        </div>
                                                        <div className="form-group col-md-7 col-sm-7 col-xs-7 col-lg-7 box64">
                                                            <input type="amount" className="form-control" placeholder="Số tiền cần gửi" required />
                                                        </div>
                                                        <div className="form-group">
                                                            <textarea type="purpose" className="form-control" placeholder="Quốc gia cần gửi; mục đích gửi tiền;..." rows={4} required />
                                                        </div>
                                                        <div className="button-send-now col-md-5 col-sm-5 col-xs-5 col-lg-5 nopadding">
                                                            <button type="submit" className="widget-element widget-snap style-1" style={{ cursor: 'pointer', zIndex: 2, pointerEvents: 'auto' }}>GỬI NGAY</button>
                                                        </div>
                                                        <span>
                                                            <div className="col-md-2 col-sm-2 col-xs-2 col-lg-2" style={{ width: 85 }}>
                                                                <svg xmnls="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" viewBox="0 0 24 24" fill="rgba(213,0,0,1)"> <path d="M15,12H17A5,5 0 0,0 12,7V9A3,3 0 0,1 15,12M19,12H21C21,7 16.97,3 12,3V5C15.86,5 19,8.13 19,12M20,15.5C18.75,15.5 17.55,15.3 16.43,14.93C16.08,14.82 15.69,14.9 15.41,15.18L13.21,17.38C10.38,15.94 8.06,13.62 6.62,10.79L8.82,8.59C9.1,8.31 9.18,7.92 9.07,7.57C8.7,6.45 8.5,5.25 8.5,4A1,1 0 0,0 7.5,3H4A1,1 0 0,0 3,4A17,17 0 0,0 20,21A1,1 0 0,0 21,20V16.5A1,1 0 0,0 20,15.5Z"></path> </svg>
                                                            </div>
                                                            <div className="contact-infor col-md-4 col-sm-4 col-xs-4 col-lg-4 nopadding">
                                                                <span>Hoặc gọi ngay:</span>
                                                                <br />
                                                                <span className="red-txt">+84 973 658 512</span>
                                                            </div>
                                                        </span>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="SHAPE68" className="widget-element widget-snap wow tada animated">
                                            <div className="widget-content">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="block-block-18" className="container-fluid platform-bottom deep-blue-bg margb30 paddr0 paddl0 block block-block">
                        <div className="container">
                            <div className="container-fluid paddt10 paddr0 paddb10 paddl0 container-raf" style={{ position: relative }}>
                                <div className="row">
                                    <div className="star col-md-2 col-sm-2 col-xs-2 col-lg-2 hidden-phone">
                                        <img src="https://www.xendpay.com/sites/default/files/raf/raf-star.png" alt="" style={{ position: 'absolute' }} width="188" height="176" />
                                    </div>
                                    <div className="col-md-8 col-sm-8 col-xs-8 col-lg-8" style={{ lineHeight: '50px' }}>
                                        <span className="white-text size18">Get rewarded - Refer unlimited friends and family to us and become a Xendpay Star!</span>
                                    </div>
                                    <div className="col-md-2 col-sm-2 col-xs-2 col-lg-2 txtrt">
                                        <span className="white-text size28 linehgt50 underlined "><a href="/refer-a-friend">Learn more</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* money transfererd right */}
                <div className="container paddr0 paddb10 paddl0 container-xp-business txtct">
                    <h2 className="blue-txt margt30 margb20 txtct upper-case">MONEY TRANSFERRED RIGHT</h2>
                    <div className="black-txt margt10 txtct size20 margb20">
                        <i>Our mission is to offer the best low cost global money transfer service</i>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-xs-4 col-lg-4">
                            <h2 className="green-text"><i className="fa fa-check green-text"></i></h2>
                            <h2 className="green-text upper-case">Fair</h2>
                            <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 margl0">Transparent exchange rates</div>
                            <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 margl0"><a href="pay-what-you-want" className="orange-link">Pay What You Want fees</a></div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-4 col-lg-4">
                            <h2 className="green-text"><i className="fa fa-check green-text"></i></h2>
                            <h2 className="green-text upper-case">Fast</h2>
                            <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 margl0">Same day payments on selected currencies</div>
                            <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 margl0">24/7 online payments</div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-4 col-lg-4">
                            <h2 className="green-text"><i className="fa fa-check green-text"></i></h2>
                            <h2 className="green-text upper-case">Safe</h2>
                            <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 margl0">Secure online payments</div>
                            <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 margl0">Over 5,000 5* Trustpilot reviews </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 margl0 margt30 margb50 txtct">
                        <a href="https://secure.xendpay.com/costs" className="orange-bg txtct rounded4 white-link inline-button paddl30 paddr30 paddt10 paddb10 upper-case">Send money now</a>
                    </div>
                </div>
            </div>
            {/* good for the pocket */}
            <div id="lower_top">
                <div id="block-block-32" className="block block-block read-more-here-top-slant">
                    <div className="content">
                        <div className="container-fluid">
                        </div>
                    </div>
                </div>
                <div id="block-block-33" className="block block-block read-more-here-block">
                    <div className="content">
                        <div className="container">
                            {/* <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 linehgt200 margl0 size30 txtct read-more-here-block-inner">
                                <span>We're creating a community to drive change with every transfer. <a href="campaign" className="orange-link margr5">Read more here</a><span className="orange-right-arrow size17"></span><span className="orange-right-arrow size17" style={{ marginLeft: "-8px" }}></span></span>
                            </div> */}
                        </div>
                        {/* <!-- XENDPAY BUSINESS --> */}
                        <div className="container paddr0 paddb10 paddl0 container-xendpay-business">
                            <div className="margl0">
                                <div className="col-md-2 col-sm-2 col-xs-2 col-lg-2 margl0">
                                    Send pay
                                    {/* <img src="/sites/default/files/logo/xendpay-business-white-rgb.png" alt="" className="margt20" width="273" height="58" /> */}
                                </div>
                                <div className="col-md-10 col-sm-10 margt10">
                                    <span className="white-text size20">Whether paying your suppliers, invoices and employees abroad, or importing and exporting, make your business money go further and work harder with Xendpay Business.</span>
                                </div>
                                <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 margl0 txtrt">
                                    <span className="white-text size28 underlined "><a href="https://www.xendpay.com/xendpay-business" className="white-text" style={{ color: "#ffffff" }}>Find out more</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="block-block-31" className="block block-block light-blue-bg">
                    <div className="content">
                        <div className="container">
                            <h2 className="blue-txt margt20 txtct upper-case">Good for the pocket.</h2>
                            <h2 className="blue-txt txtct upper-case">Good for the community.</h2>
                            <div className="black-txt margt10 txtct size20"><i>Switch to a service that gives back at no cost to you.</i></div>
                            <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 margt30 margb60 margl0 good-for-the-pocket">
                                <div className="col-md-7 col-sm-7 margl0">
                                    <span className="row-fluid col-md-12 col-sm-12 col-xs-12 col-lg-12 margl0 margb20">With Xendpay not only do you get leading currency rates you also make a difference with every money transfer.</span>
                                    <span className="row-fluid col-md-12 col-sm-12 col-xs-12 col-lg-12 margl0 margb20">For far too long not enough has been done to end excessive profiteering. With backing, TOGETHER, we can change this.</span>
                                    <span className="row-fluid col-md-12 col-sm-12 col-xs-12 col-lg-12 margl0 margb20">Your every contribution, every recommendation, matters.</span>
                                    <span className="row-fluid col-md-12 col-sm-12 col-xs-12 col-lg-12 margl0 margb20"><a className="orange-link" href="pay-what-you-want">Pay What You Want. Find out more.</a></span>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-4 col-lg-4 offset-youtube">
                                    <div className="">
                                        {/* <img className="youtube" id="YJYRpTU0aPY" rel="YJYRpTU0aPY" style={{ cursor: "pointer" }} src="https://www.youtube.com/watch?v=YJYRpTU0aPY&feature=youtu.be" /> */}
                                        <a className="venobox vbox-item" target="_blank" data-type="youtube" href="http://youtu.be/YJYRpTU0aPY">
                                            <img id="youtube-holder" src="https://openclipart.org/image/2400px/svg_to_png/174663/paylikefont1.png" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 margt20 margl0 margt20" style={{ fontSize: "26px" }}>
                                    <span><strong>We're creating a community to drive change with every transfer. <a href="campaign" className="margr5" style={{ color: '#239fd9' }}>Read more here</a></strong></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* lower middle */}
            <div id="lower_middle">
                <div id="block-block-34" className="block block-block">
                    <div className="content">
                        <div className="container paddb30">
                            <h2 className="blue-txt margt60 margb20 txtct upper-case">Connecting more people everyday</h2>
                            <div className="connecting-more-people-block txtct col-md-12 col-sm-12 col-xs-12 col-lg-12 col-md-offset-3 col-sm-offset-3 col-xs-offset-3 col-lg-offset-3">
                                <div className="col-md-2 col-sm-2 col-xs-2 col-lg-2 margl0">
                                    <h2 className="blue-txt">205</h2>
                                    <div>Countries</div>
                                </div>
                                <div className="col-md-2 col-sm-2 col-xs-2 col-lg-2 margl0">
                                    <h2 className="blue-txt">51</h2>
                                    <div>Currencies</div>
                                </div>
                                <div className="col-md-2 col-sm-2 col-xs-2 col-lg-2 margl0">
                                    <h2 className="blue-txt">2968</h2>
                                    <div>Currency Pairs</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="block-block-35" className="block block-block white-grey-bg">
                    <div className="content">
                        <div className="container">
                            <h2 className="blue-txt margt60 margb20 txtct upper-case">Supported by</h2>
                            <div className="container-fluid supported-by-box">
                                <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 margl0">
                                    <div className="col-md-6 col-sm-6 col-xs-6 col-lg-6 margl0 margb30">
                                        <figure className="caption-top-right">
                                            <img src="https://www.beltpower.com/wp-content/uploads/2017/08/beverage-01.jpg" />
                                            <figcaption className="caption-top-right-text">
                                                <p>“I set up Xendpay not to be the biggest or to make money but to make money transfer better and cheaper."</p>
                                                <p>Rajesh Agrawal, Founder and Non-Executive Chairman of Xendpay</p>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-6 col-lg-6 margb30">
                                        <div className="paddl0 paddr0 txtct">
                                            <img src="https://www.beltpower.com/wp-content/uploads/2017/08/beverage-01.jpg" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 margl0 margt30 margb50">
                                    <div className="col-md-6 col-sm-6 col-xs-6 col-lg-6 margl0 margb30">
                                        <div className="paddr0 paddl0 txtct">
                                            <img src="https://www.beltpower.com/wp-content/uploads/2017/08/beverage-01.jpg" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-6 col-lg-6 margb30">
                                        <figure className="caption-top-right">
                                            <img src="https://www.beltpower.com/wp-content/uploads/2017/08/beverage-01.jpg" />
                                            <figcaption className="caption-top-right-text">
                                                <p>“Xendpay is a welcome challenge for an industry that has for too long taken too much in profit from individuals sending money overseas"</p>
                                                <p>Jimmy Wales, Wikipedia</p>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* lower button */}
            <div id="lower_bottom">
                <div id="block-block-10" className="block block-block">
                    <div className="content">
                        <div className="container">
                            <script async="" type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"></script>
                            <h2 className="blue-txt margt50 margb50 txtct upper-case">Our customers love us</h2>
                            <div id="trust-pilot-box" className="row-fluid">
                                <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 margt25 margb5">
                                    <div className="trustpilot-widget" data-locale="en-GB" data-template-id="53aa8912dec7e10d38f59f36" data-businessunit-id="4f37b4d5000064000512d419" data-style-height="270" data-style-width="100%" data-theme="light" data-stars="4,5">
                                        <iframe frameBorder="0" scrolling="no" title="Customer reviews powered by Trustpilot" src="https://widget.trustpilot.com/trustboxes/53aa8912dec7e10d38f59f36/index.html?templateId=53aa8912dec7e10d38f59f36&amp;businessunitId=4f37b4d5000064000512d419#locale=en-GB&amp;styleHeight=270&amp;styleWidth=100%25&amp;theme=light&amp;stars=4%2C5"></iframe>
                                    </div>
                                    <div id="review-box-read-more" className="txtrt">
                                        <span className="size14">Read more at <a className="blue-link" target="_blank" href="https://www.trustpilot.co.uk/review/xendpay.com">Trustpilot.co.uk</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="block-block-22" className="block block-block">
                    <div className="content">
                        <div className="container">
                            <h2 className="blue-text margt80 margb60 txtct">AS FEATURED IN</h2>
                            <div className="container-fluid margt40 margb40 paddl0 paddr0"><div id="corperate-logos-block" className="span12 linehgt90 margl0 margb10 txtct">
                                <img className="margr20 margb10" src="https://www.xendpay.com/sites/default/files/corporates_logo/1_bbc.png" />
                                <img className="margr20 margb10" style={{ width: 124, height: 26 }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/New_Bloomberg_Logo.svg/2000px-New_Bloomberg_Logo.svg.png" />
                                <img className="margr20 margb10" style={{ width: 124, height: 26 }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/New_Bloomberg_Logo.svg/2000px-New_Bloomberg_Logo.svg.png" />
                                <img className="margr20 margb10" style={{ width: 124, height: 26 }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/New_Bloomberg_Logo.svg/2000px-New_Bloomberg_Logo.svg.png" />
                                <img className="margr20 margb10" style={{ width: 124, height: 26 }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/New_Bloomberg_Logo.svg/2000px-New_Bloomberg_Logo.svg.png" />
                                <img className="margr20 margb10" style={{ width: 124, height: 26 }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/New_Bloomberg_Logo.svg/2000px-New_Bloomberg_Logo.svg.png" />
                                <img className="margr20 margb10" style={{ width: 124, height: 26 }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/New_Bloomberg_Logo.svg/2000px-New_Bloomberg_Logo.svg.png" />
                            </div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Dashboard;