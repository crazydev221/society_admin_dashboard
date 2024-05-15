import React, { useState, useEffect } from 'react';

import PageScroll from '../UIElements/PageScroll';
import PageBreadcrumb from '../UIElements/Breadcrumb';
import PageContainer from '../UIElements/Containers';
import Layout from './BuildLayout';
import Content from './BuildContent';
import './style.scss';
const content = () => {

    const [builderToggle, setBuilderToggle] = useState(true);
    const [navTab, setNavTab] = useState([true, false]);
    const [layoutOption, setLayoutOption] = useState([true, false]);
    const [contentOptions, setContentOptions] = useState([true, false, false, false, false, false, false]);

    const setLayoutOptionTwo = (shouldAdd) => {
        shouldAdd ? document.body.classList.add("menu-behind") : document.body.classList.remove("menu-behind")
    }


    return (
        <React.Fragment>
            {/* <div className="header header-sipmle">
                <a href="#" className="btn-link toggle-sidebar d-lg-none pg-icon btn-icon-link" data-toggle="sidebar">
                    menu
                </a>
                <div className="">
                    <div className="brand inline   ">
                        <img src="../../assets/img/logo.png" alt="logo" data-src="../../assets/img/logo.png" data-src-retina="../../assets/img/logo_2x.png" width="78" height="22" />
                    </div>
                    <ul className="d-lg-inline-block d-none notification-list no-margin d-lg-inline-block b-grey b-l b-r no-style p-l-20 p-r-20">
                        <li className="p-r-5 inline">
                            <div className="dropdown">
                                <a href="" id="notification-center" className="header-icon  btn-icon-link" data-toggle="dropdown"
                                    onClick={(e) => {
                                        e.preventDefault()
                                    }}
                                >
                                    <i className="pg-icon">world</i>
                                    <span className="bubble"></span>
                                </a>
                                <div className="dropdown-menu notification-toggle" role="menu" aria-labelledby="notification-center">
                                    <div className="notification-panel">
                                        <div className="scroll-wrapper notification-body scrollable" style={{ "position": "relative" }}><div className="notification-body scrollable scroll-content" style={{ "height": "auto", "marginBottom": "0px", "marginRight": "0px", "maxHeight": "0px" }}>
                                            <div className="notification-item unread clearfix">
                                                <div className="heading open">
                                                    <a href="#" className="text-complete pull-left d-flex align-items-center">
                                                        <i className="pg-icon m-r-10">map</i>
                                                        <span className="bold">Carrot Design</span>
                                                        <span className="fs-12 m-l-10">David Nester</span>
                                                    </a>
                                                    <div className="pull-right">
                                                        <div className="thumbnail-wrapper d16 circular inline m-t-15 m-r-10 toggle-more-details">
                                                            <div><i className="pg-icon">chevron_down</i></div>
                                                        </div>
                                                        <span className=" time">few sec ago</span>
                                                    </div>
                                                    <div className="more-details">
                                                        <div className="more-details-inner">
                                                            <h5 className="semi-bold fs-16">“Apple’s Motivation - Innovation <br />
                                                                distinguishes between <br />
                                                                A leader and a follower.”
                                                            </h5>
                                                            <p className="small hint-text">
                                                                Commented on john Smiths wall.
                                                                <br /> via pages framework.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="option" data-toggle="tooltip" data-placement="left" title="" data-original-title="mark as read">
                                                    <a href="#" className="mark"></a>
                                                </div>
                                            </div>
                                            <div className="notification-item  clearfix">
                                                <div className="heading">
                                                    <a href="#" className="text-danger pull-left">
                                                        <i className="pg-icon m-r-10">alert_warning</i>
                                                        <span className="bold">98% Server Load</span>
                                                        <span className="fs-12 m-l-10">Take Action</span>
                                                    </a>
                                                    <span className="pull-right time">2 mins ago</span>
                                                </div>
                                                <div className="option">
                                                    <a href="#" className="mark"></a>
                                                </div>
                                            </div>

                                            <div className="notification-item  clearfix">
                                                <div className="heading">
                                                    <a href="#" className="text-warning pull-left">
                                                        <i className="pg-icon m-r-10">alert_warning</i>
                                                        <span className="bold">Warning Notification</span>
                                                        <span className="fs-12 m-l-10">Buy Now</span>
                                                    </a>
                                                    <span className="pull-right time">yesterday</span>
                                                </div>
                                                <div className="option">
                                                    <a href="#" className="mark"></a>
                                                </div>
                                            </div>

                                            <div className="notification-item unread clearfix">
                                                <div className="heading">
                                                    <div className="thumbnail-wrapper d24 circular b-white m-r-5 b-a b-white m-t-10 m-r-10">
                                                        <img width="30" height="30" data-src-retina="../../assets/img/profiles/1x.jpg" data-src="../../assets/img/profiles/1.jpg" alt="" src="../../assets/img/profiles/1.jpg" />
                                                    </div>
                                                    <a href="#" className="text-complete pull-left">
                                                        <span className="bold">Revox Design Labs</span>
                                                        <span className="fs-12 m-l-10">Owners</span>
                                                    </a>
                                                    <span className="pull-right time">11:00pm</span>
                                                </div>
                                                <div className="option" data-toggle="tooltip" data-placement="left" title="" data-original-title="mark as read">
                                                    <a href="#" className="mark"></a>
                                                </div>
                                            </div>
                                        </div>
                                            <div className="scroll-element scroll-x" style={{}}>
                                                <div className="scroll-element_outer">
                                                    <div className="scroll-element_size"></div>
                                                    <div className="scroll-element_track"></div>
                                                    <div className="scroll-bar"></div>
                                                </div>
                                            </div>
                                            <div className="scroll-element scroll-y" style={{}}>
                                                <div className="scroll-element_outer">
                                                    <div className="scroll-element_size"></div>
                                                    <div className="scroll-element_track"></div>
                                                    <div className="scroll-bar"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="notification-footer text-center">
                                            <a href="#" className="">Read all notifications</a>
                                            <a data-toggle="refresh" className="portlet-refresh text-black pull-right" href="#">
                                                <i className="pg-refresh_new"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="p-r-5 inline">
                            <a href="#" className="header-icon  btn-icon-link">
                                <i className="pg-icon">link_alt</i>
                            </a>
                        </li>
                        <li className="p-r-5 inline">
                            <a href="#" className="header-icon  btn-icon-link">
                                <i className="pg-icon">grid_alt</i>
                            </a>
                        </li>
                    </ul>
                    <a href="#" className="search-link d-lg-inline-block d-none" data-toggle="search"><i className="pg-icon">search</i>Type anywhere to <span className="bold">search</span></a>
                </div>
                <div className="d-flex align-items-center">

                    <div className="dropdown pull-right d-lg-block d-none">
                        <button className="profile-dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="profile dropdown">
                            <span className="thumbnail-wrapper d32 circular inline">
                                <img src="../../assets/img/profiles/avatar.jpg" alt="" data-src="../../assets/img/profiles/avatar.jpg" data-src-retina="../../assets/img/profiles/avatar_small2x.jpg" width="32" height="32" />
                            </span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right profile-dropdown" role="menu">
                            <a href="#" className="dropdown-item"><span>Signed in as <br /><b>David Aunsberg</b></span></a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">Your Profile</a>
                            <a href="#" className="dropdown-item">Your Activity</a>
                            <a href="#" className="dropdown-item">Your Archive</a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">Features</a>
                            <a href="#" className="dropdown-item">Help</a>
                            <a href="#" className="dropdown-item">Settings</a>
                            <a href="#" className="dropdown-item">Logout</a>
                            <div className="dropdown-divider"></div>
                            <span className="dropdown-item fs-12 hint-text">Last edited by David<br />on Friday at 5:27PM</span>
                        </div>
                    </div>
                    <a href="#" className="header-icon m-l-5 sm-no-margin d-inline-block" data-toggle="quickview" data-toggle-element="#quickview">
                        <i className="pg-icon btn-icon-link">menu_add</i>
                    </a>
                </div>
            </div> */}

            {contentOptions[0] && <div className={`page-content-wrapper content-builder full-height ${contentOptions[0] ? 'active' : ''}`} id="plainContent">
                <div className="content">
                    <PageContainer>
                        <ul className="breadcrumb p-l-0">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active">Plain template</li>
                        </ul>
                        <h3 className="page-title">Page Title</h3>
                    </PageContainer>
                    <PageContainer>
                        {/* CONTENT goes here */}
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        {/* CONTENT goes here */}
                    </PageContainer>
                </div>
                <PageContainer className=" footer">
                    <div className="copyright sm-text-center">
                        <p className="small no-margin pull-left sm-pull-reset">
                            <span className="hint-text">Copyright © 2014 </span>
                            <span className="font-montserrat">REVOX</span>.
                            <span className="hint-text">All rights reserved. </span>
                            <span className="sm-block"><a href="#" className="m-l-10 m-r-10">Terms of use</a> | <a href="#" className="m-l-10">Privacy Policy</a></span>
                        </p>
                        <p className="small no-margin pull-right sm-pull-reset">
                            <a href="#">Hand-crafted</a> <span className="hint-text">&amp; Made with Love ®</span>
                        </p>
                        <div className="clearfix"></div>
                    </div>
                </PageContainer>
            </div>}

            {contentOptions[1] && <div className={`page-content-wrapper content-builder ${contentOptions[1] ? 'active' : ''}`} id="parallaxCoverpage">
                <div className="content">
                    <div className="jumbotron page-cover" data-pages="parallax">
                        <PageContainer>
                            <PageScroll>
                                <PageBreadcrumb className=" p-l-0">
                                    <li className="breadcrumb-item"><a href="#">UI Elements</a></li>
                                    <li className="breadcrumb-item active">Typography</li>
                                </PageBreadcrumb>
                                <div className="container-md-height m-b-20">
                                    <div className="row m-lg-0">
                                        <div className="col-xl-7 col-lg-6 bg-white">
                                            <div className="full-height">
                                                <div className="card-body text-center">
                                                    <img className="image-responsive-height demo-mw-500" src="../../assets/img/demo/typography_hero.gif" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-5 col-lg-6">
                                            <div className="card card-transparent">
                                                <div className="card-header ">
                                                    <div className="card-title">Getting started</div>
                                                </div>
                                                <div className="card-body">
                                                    <h3>One of the most underestimated elements of design is typography. However, it’s critical in both print and web media. We Made it Perfect in both.</h3>
                                                    <p>This feature in our product specifically creates hinted fonts for various OS browsers; whether its Windows, Mac OSx, or ubuntu, it does it for all.</p>
                                                    <br />
                                                    <div>
                                                        <div className="profile-img-wrapper m-t-5 inline">
                                                            <img width="35" height="35" src="../../assets/img/profiles/avatar_small.jpg" alt="" data-src="../../assets/img/profiles/avatar_small.jpg" data-src-retina="../../assets/img/profiles/avatar_small2x.jpg" />
                                                            <div className="chat-status available"></div>
                                                        </div>
                                                        <div className="inline m-l-10">
                                                            <p className="small hint-text m-t-5">VIA senior product manage
                                                                <br /> for fonts and typography at REVOX
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </PageScroll>
                        </PageContainer>
                    </div>
                    <PageContainer className=" demo-container"></PageContainer>
                </div>
            </div>}


            {contentOptions[2] && <div className={`page-content-wrapper content-builder full-height ${contentOptions[2] ? 'active' : ''}`} id="fullheightParallax">
                <div className="content full-height">
                    <div className="jumbotron full-height no-padding" data-pages="parallax">
                        <PageContainer className="sm-p-l-0 sm-p-r-0 full-height">
                            <PageScroll className="full-height d-flex align-items-center">
                                <div className="row justify-content-center full-width">
                                    <div className="col-md-6 text-center">
                                        {/* CONTENT goes here */}
                                        <br /><br /><br /><br /><br />
                                        <br /><br /><br /><br /><br />
                                        <br /><br />
                                        {/* CONTENT goes here */}
                                        <h2 className="text-center">
                                            <img src="../../assets/img/logo_blue_2x.png" alt="logo" /><span>&nbsp;</span>
                                            makes it super-easy to create your
                                            dashboard Without a designer.
                                        </h2>
                                        <button aria-label="" className="btn btn-success btn-rounded">Live Preview</button>
                                        {/* CONTENT goes here */}
                                        <br /><br /><br /><br /><br />
                                        <br /><br /><br /><br /><br />
                                        <br /><br /><br /><br /><br /><br />
                                        {/* CONTENT goes here */}
                                    </div>
                                </div>
                            </PageScroll>
                        </PageContainer>
                    </div>
                    <PageContainer className="  demo-container"></PageContainer>
                </div>
            </div>}



            {contentOptions[3] && <div className={`page-content-wrapper content-builder full-height ${contentOptions[3] ? 'active' : ''}`} id="titleParallax">
                <div className="content">
                    <div className="jumbotron  no-margin" data-pages="parallax">
                        <PageContainer className=" sm-p-l-0 sm-p-r-0">
                            <div className="inner">
                                <h3 className="">Page Title</h3>
                            </div>
                        </PageContainer>
                    </div>
                    <PageContainer className=" demo-container">
                        <ul className="breadcrumb p-l-0">
                            <li className="breadcrumb-item">
                                <a href="#">Home</a>
                            </li>
                            <li className="breadcrumb-item active">Parallax for page title
                            </li>
                        </ul>
                    </PageContainer>
                </div>
            </div>}


            {contentOptions[4] && <div className={`page-content-wrapper content-builder full-height ${contentOptions[4] ? 'active' : ''}`} id="columns-3-9">
                <div className="content full-height">
                    <div className="container-fluid full-height no-padding">
                        <div className="row full-height no-margin">
                            <div className="col-md-3 no-padding b-r b-grey sm-b-b full-height">
                                <div className="bg-white full-height">
                                    {/* CONTENT goes here */}
                                    <br /><br /><br /><br /><br /><br />
                                    <br /><br /><br /><br /><br /><br />
                                    <br /><br /><br /><br /><br /><br />
                                    <br /><br /><br /><br /><br /><br />
                                    <br /><br /><br /><br /><br /><br />
                                    {/* CONTENT goes here */}
                                </div>
                            </div>
                            <div className="col-md-9 no-padding full-height">
                                <div className="placeholder full-height">
                                    {/* CONTENT goes here */}
                                    <br /><br /><br /><br /><br /><br />
                                    <br /><br /><br /><br /><br /><br />
                                    <br /><br /><br /><br /><br /><br />
                                    <br /><br /><br /><br /><br /><br />
                                    <br /><br /><br /><br /><br /><br />
                                    {/* CONTENT goes here */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <PageContainer className=" footer">
                    <div className="copyright sm-text-center">
                        <p className="small no-margin pull-left sm-pull-reset">
                            <span className="hint-text">Copyright © 2014 </span>
                            <span className="font-montserrat">REVOX</span>.
                            <span className="hint-text">All rights reserved. </span>
                            <span className="sm-block"><a href="#" className="m-l-10 m-r-10">Terms of use</a> | <a href="#" className="m-l-10">Privacy Policy</a></span>
                        </p>
                        <p className="small no-margin pull-right sm-pull-reset">
                            <a href="#">Hand-crafted</a> <span className="hint-text">&amp; Made with Love ®</span>
                        </p>
                        <div className="clearfix"></div>
                    </div>
                </PageContainer>
            </div>}


            {contentOptions[5] && <div className={`page-content-wrapper content-builder full-height ${contentOptions[5] ? 'active' : ''}`} id="columns-9-3">
                <div className="content full-height">
                    <div className="container-fluid full-height no-padding">
                        <div className="row full-height no-margin">
                            <div className="col-md-9 no-padding b-r b-grey full-height">
                                <div className="full-height placeholder">
                                    {/* CONTENT goes here */}
                                    <br /><br /><br /><br /><br /><br />
                                    <br /><br /><br /><br /><br /><br />
                                    <br /><br /><br /><br /><br /><br />
                                    <br /><br /><br /><br /><br /><br />
                                    <br /><br /><br /><br /><br /><br />
                                    {/* CONTENT goes here */}
                                </div>
                            </div>
                            <div className="col-md-3 no-padding full-height">
                                <div className="bg-white  full-height">
                                    {/* CONTENT goes here */}
                                    <br /><br /><br /><br /><br /><br />
                                    <br /><br /><br /><br /><br /><br />
                                    <br /><br /><br /><br /><br /><br />
                                    <br /><br /><br /><br /><br /><br />
                                    <br /><br /><br /><br /><br /><br />
                                    {/* CONTENT goes here */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <PageContainer className=" footer">
                    <div className="copyright sm-text-center">
                        <p className="small no-margin pull-left sm-pull-reset">
                            <span className="hint-text">Copyright © 2014 </span>
                            <span className="font-montserrat">REVOX</span>.
                            <span className="hint-text">All rights reserved. </span>
                            <span className="sm-block"><a href="#" className="m-l-10 m-r-10">Terms of use</a> | <a href="#" className="m-l-10">Privacy Policy</a></span>
                        </p>
                        <p className="small no-margin pull-right sm-pull-reset">
                            <a href="#">Hand-crafted</a> <span className="hint-text">&amp; Made with Love ®</span>
                        </p>
                        <div className="clearfix"></div>
                    </div>
                </PageContainer>
            </div>}


            {contentOptions[6] && <div className={`page-content-wrapper content-builder full-height ${contentOptions[6] ? 'active' : ''}`} id="columns-6-6">
                <div className="content full-height">
                    <div className="container-fluid full-height no-padding">
                        <div className="row full-height no-margin">
                            <div className="col-md-6 no-padding b-r b-grey full-height">
                                <div className="bg-white full-height">
                                    {/* CONTENT goes here */}
                                    <br /><br /><br /><br /><br /><br />
                                    <br /><br /><br /><br /><br /><br />
                                    <br /><br /><br /><br /><br /><br />
                                    <br /><br /><br /><br /><br /><br />
                                    <br /><br /><br /><br /><br /><br />
                                    {/* CONTENT goes here */}
                                </div>
                            </div>
                            <div className="col-md-6 no-padding full-height">
                                <div className="bg-white full-height">
                                    {/* CONTENT goes here */}
                                    <br /><br /><br /><br /><br /><br />
                                    <br /><br /><br /><br /><br /><br />
                                    <br /><br /><br /><br /><br /><br />
                                    <br /><br /><br /><br /><br /><br />
                                    <br /><br /><br /><br /><br /><br />
                                    {/* CONTENT goes here */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <PageContainer className=" footer">
                    <div className="copyright sm-text-center">
                        <p className="small no-margin pull-left sm-pull-reset">
                            <span className="hint-text">Copyright © 2014 </span>
                            <span className="font-montserrat">REVOX</span>.
                            <span className="hint-text">All rights reserved. </span>
                            <span className="sm-block"><a href="#" className="m-l-10 m-r-10">Terms of use</a> | <a href="#" className="m-l-10">Privacy Policy</a></span>
                        </p>
                        <p className="small no-margin pull-right sm-pull-reset">
                            <a href="#">Hand-crafted</a> <span className="hint-text">&amp; Made with Love ®</span>
                        </p>
                        <div className="clearfix"></div>
                    </div>
                </PageContainer>
            </div>}

            { /* START config side bar */}
            <div className={`quickview-wrapper builder hidden-sm hidden-xs ${builderToggle ? 'open' : ''}`} id="builder">
                <div className="p-l-30 p-r-30 ">
                    <a className="builder-close quickview-toggle pg-icon" data-toggle="quickview" data-toggle-element="#builder" onClick={() => setBuilderToggle(false)}>close</a>
                    <a className="builder-toggle" data-toggle="quickview" data-toggle-element="#builder" onClick={() => { setBuilderToggle(prevState => !prevState) }}><i className="pg-icon">paint_bucket</i></a>
                    <ul className="nav nav-tabs nav-tabs-simple nav-tabs-primary m-t-10" id="builderTabs" role="tablist">
                        <li className="nav-item" onClick={() => setNavTab([true, false])}>
                            <a className={`nav-link ${navTab[0] ? 'active' : ''}`} data-toggle="tab" href="#tabLayouts" role="tab" aria-controls="home" aria-selected={`${navTab[0] ? 'true' : 'false'}`}><span>Layouts</span></a>
                        </li>
                        <li className="nav-item" onClick={() => setNavTab([false, true])}>
                            <a className={`nav-link ${navTab[1] ? 'active' : ''}`} data-toggle="tab" href="#tabContent" role="tab" aria-controls="messages" aria-selected={`${navTab[1] ? 'true' : 'false'}`}><span>Content</span></a>
                        </li>
                    </ul>
                    <div className="tab-content m-b-30 p-l-30">
                        <div className={`tab-pane ${navTab[0] ? 'active' : ''}`} id="tabLayouts" role="alert">
                            <div className="scroll-wrapper " style={{ "position": "relative" }}><div className="scrollable scroll-content" style={{ "marginBottom": "0px", "marginRight": "0px" }}>
                                <div className="p-l-10 p-r-50 p-t-20">
                                    <h5 className="semi-bold">
                                        Layout options
                                    </h5>
                                    <p className="no-margin">
                                        Builder make it easier
                                    </p>
                                    <p className="small hint-text m-b-20">
                                        Customize and Preview your dashboard.
                                    </p>
                                    <div className="row p-b-35">
                                        <div className="col-6 ">
                                            <Layout
                                                type={'DividedHeader'}
                                                dataAction={'menuDefault'}
                                                active={layoutOption[0] ? true : false}
                                                description={"Divided Header & Condensed / Quick Menu"}
                                                onClick={() => {
                                                    setLayoutOption([true, false])
                                                    setLayoutOptionTwo(false);
                                                }}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <Layout
                                                type={'FullWidthHeader'}
                                                dataAction={'menuBelow'}
                                                active={layoutOption[1] ? true : false}
                                                description={" Full Width Header & Condensed/ Quick Menu"}
                                                onClick={() => {
                                                    setLayoutOption([false, true])
                                                    setLayoutOptionTwo(true);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className={`tab-pane ${navTab[1] ? 'active' : ''}`} id="tabContent" role="alert">
                            <div className="scroll-wrapper" style={{ "position": "relative" }}><div className="scrollable scroll-content scroll-scrolly_visible" style={{ "height": "auto", "marginBottom": "0px", "marginRight": "0px" }}>
                                <div className="p-l-10 p-r-50 p-t-20" style={{ 'paddingBottom': '10%' }}>
                                    <h5 className="semi-bold">
                                        Content
                                    </h5>
                                    <p className=" hint-text no-margin">
                                        Builder make it easier
                                    </p>
                                    <p className="small hint-text m-b-20">
                                        Customize and Preview your dashboard.
                                    </p>
                                    <ul className="p-b-50">
                                        <li className="full-width m-b-30">
                                            <Content
                                                active={contentOptions[0] ? true : false}
                                                dataAction={'plainContent'}
                                                onClick={() => setContentOptions([true, false, false, false, false, false, false])}
                                            >
                                                <img alt="Blank" className="m-b-10 image-responsive-height" src="../../assets/img/demo/blank.svg" /> Plain
                                            </Content>
                                        </li>
                                        <li className="full-width m-b-30">
                                            <Content
                                                active={contentOptions[1] ? true : false}
                                                dataAction={'parallaxCoverpage'}
                                                onClick={() => setContentOptions([false, true, false, false, false, false, false])}
                                            >
                                                <img alt="Parallax cover" className="m-b-10 image-responsive-height" src="../../assets/img/demo/paralax_cover.gif" /> Coverpage with parallax
                                            </Content>
                                        </li>
                                        <li className="full-width m-b-30">
                                            <Content
                                                active={contentOptions[2] ? true : false}
                                                dataAction={'fullheightParallax'}
                                                onClick={() => {
                                                    setContentOptions([false, false, true, false, false, false, false])
                                                    setBuilderToggle(false)
                                                }}
                                            >
                                                <img alt="Parallax full" className="m-b-10 image-responsive-height" src="../../assets/img/demo/paralax_full.gif" /> Full height coverpage with parallax
                                            </Content>
                                        </li>
                                        <li className="full-width m-b-30">
                                            <Content
                                                active={contentOptions[3] ? true : false}
                                                dataAction={'titleParallax'}
                                                onClick={() => setContentOptions([false, false, false, true, false, false, false])}
                                            >
                                                <img alt="Parallax title" className="m-b-10 image-responsive-height" src="../../assets/img/demo/paralax_title.gif" /> Page title parallax
                                            </Content>
                                        </li>
                                        <li className="full-width m-b-30">
                                            <Content
                                                active={contentOptions[4] ? true : false}
                                                dataAction={'columns-3-9'}
                                                onClick={() => setContentOptions([false, false, false, false, true, false, false])}
                                            >
                                                <img alt="3_9" className="m-b-10 image-responsive-height" src="../../assets/img/demo/3_9.svg" /> Column view (3 : 9)
                                            </Content>
                                        </li>
                                        <li className="full-width m-b-30">
                                            <Content
                                                active={contentOptions[5] ? true : false}
                                                dataAction={'columns-9-3'}
                                                onClick={() => {
                                                    setContentOptions([false, false, false, false, false, true, false])
                                                    setBuilderToggle(false)
                                                }}
                                            >
                                                <img alt="9_3" className="m-b-10 image-responsive-height" src="../../assets/img/demo/9_3.svg" /> Column view (9 : 3)
                                            </Content>
                                        </li>
                                        <li className="full-width m-b-30">
                                            <Content
                                                active={contentOptions[6] ? true : false}
                                                dataAction={'columns-6-6'}
                                                onClick={() => {
                                                    setContentOptions([false, false, false, false, false, false, true])
                                                    setBuilderToggle(false)
                                                }}
                                            >
                                                <img alt="6_6" className="m-b-10 image-responsive-height" src="../../assets/img/demo/6_6.svg" /> Column view (6 : 6)
                                            </Content>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            { /* END config side bar */}
        </React.Fragment>

    )
}

export default content
