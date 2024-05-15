import React from 'react';
import { SlideDown } from 'react-slidedown';
import { connect, useSelector } from 'react-redux';

import 'react-slidedown/lib/slidedown.css'

import SidebarItem from './SidebarItem';
import './style.scss';

class Component extends React.Component {

    state = {
        isVisible: false,
        shouldExpand: false,
        shouldExpandNest: false,
        clickedMenu: null,
        clickedMenuNest: null,
        shouldSideBarPin: false,
        shouldToggleSidebarHeader: false,
        shouldBoxedLayout: false,
    }

    handleMouseEnter = () => {
        this.setState({
            isVisible: true
        })
    }

    handleMouseLeave = () => {
        this.setState({
            isVisible: false
        })
    }

    handleMenuExpan = (value) => {
        let customShouldExpan = true
        if (this.state.clickedMenu === value) {
            customShouldExpan = !this.state.shouldExpand
        }
        this.setState({
            shouldExpand: customShouldExpan,
            clickedMenu: value,
            clickedMenuNest: null
        })
    }

    handleMenuExpanNest = (value) => {
        this.setState({
            shouldExpandNest: !this.state.shouldExpandNest,
            clickedMenuNest: value
        })
    }

    togglePin = () => {
        this.setState({
            shouldSideBarPin: !this.state.shouldSideBarPin
        }, () => {
            if (this.state.shouldSideBarPin) {
                document.body.classList.add('menu-pin')
            } else {
                document.body.classList.remove('menu-pin')
            }
        })
    }

    toggleSidebarHeader = () => {
        this.setState({
            shouldToggleSidebarHeader: !this.state.shouldToggleSidebarHeader
        })
    }

    navBoxedLayout = () => {
        this.setState({
            shouldBoxedLayout: !this.state.shouldBoxedLayout
        }, () => {
            if (this.state.shouldBoxedLayout) {
                document.body.classList.add('box-layout menu-pin  mac desktop js-focus-visible')
            } else {
                document.body.classList.remove('box-layout menu-pin  mac desktop js-focus-visible')
            }
        })
    }

    render() {
        const { isVisible } = this.state
        // TODO if rtl is enabled this value should be a minus one
        const style = {
            transform: `translate3d(${isVisible ? 280 - 70 : 0}px, 0,0)`
        }

        let toggleHeader = this.state.shouldToggleSidebarHeader
            ? "sidebar-overlay-slide from-top show" : "sidebar-overlay-slide from-top"

        let shouldViewHeader = (
            window.location.pathname !== "/extra/404" &&
                window.location.pathname !== "/extra/500" &&
                window.location.pathname !== "/extra/login" &&
                window.location.pathname !== "/extra/register" &&
                window.location.pathname !== "/extra/lock_screen" ? true : false
        );

        let isBoxedLayout = window.location.pathname.includes("/boxed_layout") ? true : false;
        if (isBoxedLayout) {
            document.body.classList.remove('dashboard')
            document.body.classList.add('box-layout', 'menu-pin', 'mac', 'desktop', 'js-focus-visible')
        } else {
            document.body.classList.add('dashboard')
        }

        const { isAuthenticated } = this.props;

        return (
            <nav style={shouldViewHeader ? style : { display: "none" }} className={`page-sidebar page-sidebar-corporate ${this.props.openState ? 'visible' : ''}`}
                data-pages="sidebar"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}>
                {/* BEGIN SIDEBAR MENU TOP TRAY CONTENT*/}
                <div className={toggleHeader} id="appMenu">
                    <div className="row">
                        <div className="col-xs-6 no-padding">
                            <a href="#" className="p-l-40"><img src="/assets/img/demo/social_app.svg" alt="socail" />
                            </a>
                        </div>
                        <div className="col-xs-6 no-padding">
                            <a href="#" className="p-l-10"><img src="/assets/img/demo/email_app.svg" alt="socail" />
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-6 m-t-20 no-padding">
                            <a href="#" className="p-l-40"><img src="/assets/img/demo/calendar_app.svg" alt="socail" />
                            </a>
                        </div>
                        <div className="col-xs-6 m-t-20 no-padding">
                            <a href="#" className="p-l-10"><img src="/assets/img/demo/add_more.svg" alt="socail" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* END SIDEBAR MENU TOP TRAY CONTENT*/}
                {/* BEGIN SIDEBAR MENU HEADER*/}
                <div className="sidebar-header">
                    {/* <img src="/assets/img/logo_white_2x.png" alt="logo"
                        style={this.props.openState ? { marginRight: '0px' } : {}}
                        className="brand" data-src="/assets/img/logo_2x.png" data-src-retina="/assets/img/logo_white_2x.png"
                        width="78" height="22" /> */}
                    Werpurple
                </div>
                {/* END SIDEBAR MENU HEADER*/}
                {/* START SIDEBAR MENU */}
                <div className="sidebar-menu sidebar-menu-corporate">
                    {/* BEGIN SIDEBAR MENU ITEMS*/}
                    <div className="scroll-wrapper menu-items">
                        <ul className="menu-items scroll-content scroll-scrolly_visible">
                            <SidebarItem
                                url="/"
                                title="Dashboard"
                                subTitle="Admin Dashboard"
                                icon={<i className="pg-icon">home</i>}
                                topMargin="m-t-20"
                            />

                            {isAuthenticated && (
                                <>
                                    <li className={(this.state.shouldExpand && this.state.clickedMenu === 'support') ? "open active" : ""}>
                                        <a href=""
                                            onClick={(e) => {
                                                e.preventDefault()
                                                this.handleMenuExpan('support')
                                            }}
                                        >
                                            <span className="title">Support</span>
                                            <span
                                                className={(this.state.shouldExpand && this.state.clickedMenu === 'support') ? "arrow open active" : " arrow"}
                                            ></span>
                                        </a>
                                        <span className="icon-thumbnail">
                                            <i className="pg-icon">torch</i>
                                        </span>
                                        <SlideDown className={'my-dropdown-slidedown'} >
                                            {this.state.shouldExpand && this.state.clickedMenu === 'support' && (
                                                <ul className="sub-menu sub-menu-corporate">

                                                    <SidebarItem
                                                        url="/supports"
                                                        title="Supports"
                                                        icon="s"
                                                    />
                                                    <SidebarItem
                                                        url="/ourworks"
                                                        title="Our Work Gallery"
                                                        icon="g"
                                                    />
                                                    <SidebarItem
                                                        url="/nitaliablankets"
                                                        title="Nitalia Blanket"
                                                        icon="nb"
                                                    />
                                                    <SidebarItem
                                                        url="/purpleapartments"
                                                        title="Purple Apartment"
                                                        icon="pa"
                                                    />
                                                    <SidebarItem
                                                        // url="/corporate/calendar_docs"
                                                        target="_blank"
                                                        title="Junior Purple Society"
                                                        icon="j"
                                                    />
                                                </ul>
                                            )
                                            }
                                        </SlideDown>
                                    </li>
                                    <SidebarItem
                                        // url="/corporate/builder"
                                        url="/corporate/#"
                                        title="Teams"
                                        icon={<i className="pg-icon">users</i>}
                                    />

                                    <SidebarItem
                                        // url="/corporate/builder"
                                        title="Testimonals"
                                        icon={<i className="pg-icon">like</i>}
                                    />

                                    <SidebarItem
                                        // url="/corporate/builder"
                                        title="Volunteers"
                                        icon={<i className="pg-icon">add</i>}
                                    />


                                    <SidebarItem
                                        // url="/corporate/cards"
                                        title="Junior Users"
                                        icon={<i className="pg-icon">star</i>}
                                    />

                                    <SidebarItem
                                        // url="/corporate/#"
                                        title="Contacts"
                                        icon={<i className="pg-icon">send</i>}
                                    />

                                    <SidebarItem
                                        // url="/corporate/#"
                                        title="Newsletters"
                                        icon={<i className="pg-icon">mail</i>}
                                    />

                                    <hr className='mx-2 my-3 bg-gray-600' />

                                    <SidebarItem
                                        url="/profile"
                                        title="Profile"
                                        icon={<i className="pg-icon">user</i>}
                                    />

                                    <SidebarItem
                                        url="/logout"
                                        title="Logout"
                                        icon={<i className="pg-icon">exit</i>}
                                    />
                                </>
                            )}


                        </ul>
                        <a
                            href="#"
                            className="search-link d-flex justify-content-between align-items-center d-lg-none"
                            data-toggle="horizontal-menu"
                            id="headerSearchInput"
                        >
                            Tap here to search
                            <i className="pg-icon float-right">search</i>
                        </a>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </nav >
        );
    }
}

// export default Component;

const mapStateToProps = state => {
    return {
        openState: state.QuickView.openMobileSideBar,
        isAuthenticated: state.AuthReducer.isAuthenticated,
    }
}
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Component);