import React from 'react';
import { SlideDown } from 'react-slidedown';
import { connect } from 'react-redux';

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
        shouldBoxedLayout: false
    }
    componentDidMount() {

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
        return (
            <nav style={shouldViewHeader ? style : { display: "none" }} className={`page-sidebar ${this.props.openState ? 'visible' : ''}`}
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
                    <img src="/assets/img/logo_white.png" alt="logo"
                        style={this.props.openState ? { marginRight: '0px' } : {}}
                        className="brand" data-src="/assets/img/logo_white.png" data-src-retina="/assets/img/logo_white_2x.png"
                        width="78" height="22" />
                    {(this.state.isVisible || this.state.shouldSideBarPin) ?
                        <div className="sidebar-header-controls">
                            <button aria-label="Toggle Drawer" onClick={this.toggleSidebarHeader} type="button"
                                className={`btn btn-icon-link invert sidebar-slide-toggle m-l-20 m-r-10 ${this.state.shouldToggleSidebarHeader ? 'active' : ''}`}
                                data-pages-toggle="#appMenu">
                                <i className="pg-icon">chevron_down</i>
                            </button>
                            <button aria-label="Pin Menu" type="button" onClick={this.togglePin}
                                className="btn btn-icon-link invert d-lg-inline-block d-xlg-inline-block d-md-inline-block d-sm-none d-none"
                                data-toggle-pin="sidebar">
                                <i className="pg-icon"></i>
                            </button>
                        </div>
                        : null
                    }
                </div>
                {/* END SIDEBAR MENU HEADER*/}
                {/* START SIDEBAR MENU */}
                <div className="sidebar-menu">
                    {/* BEGIN SIDEBAR MENU ITEMS*/}
                    <ul className="menu-items">
                        <SidebarItem
                            url="/condensed"
                            title="Dashboard"
                            subTitle="12 New Updates"
                            icon={<i className="pg-icon">home</i>}
                            topMargin="m-t-30"
                        />
                        {/* <SidebarItem 
                    url="http://pages.revox.io/dashboard/latest/html/widget.html"
                    title="Widgets" 
                    subTitle="22 items"
                    icon={"W"}
                /> */}
                        <SidebarItem
                            // url="/condensed/email"
							url="/condensed/#"
                            title="Email"
                            subTitle="234 New Emails"
                            icon={<i className="pg-icon">inbox</i>}
                        />
                        <SidebarItem
                            // url="/condensed/social"
							url="/condensed/#"
                            title="Social"
                            icon={<i className="pg-icon">social</i>}
                        />
                        <SidebarItem
                            // url="/condensed/builder"
							url="/condensed/#"
                            title="Builder"
                            icon={<i className="pg-icon">brush</i>}
                        />
                        <li className={(this.state.shouldExpand && this.state.clickedMenu === 'layouts') ? "open active" : ""}>
                            <a href=""
                                onClick={(e) => {
                                    e.preventDefault()
                                    this.handleMenuExpan('layouts')
                                }}
                            >
                                <span className="title">Layouts</span>
                                <span
                                    className={(this.state.shouldExpand && this.state.clickedMenu === 'layouts') ? "arrow open active" : " arrow"}
                                ></span>
                            </a>
                            <span className="icon-thumbnail"><i className="pg-icon">grid</i></span>
                            <SlideDown className={'my-dropdown-slidedown'}>
                                {this.state.shouldExpand && this.state.clickedMenu === 'layouts' && (
                                    <ul className="sub-menu">

                                        <SidebarItem
                                            // url="/condensed/default_layout"
											url="/condensed/#"
                                            title="Default"
                                            icon="dl"
                                        />
                                        <SidebarItem
                                            // url="/condensed/secondary_layout"
											url="/condensed/#"
                                            title="Secondary"
                                            icon="sl"
                                        />
                                        <SidebarItem
                                            // url="/condensed/boxed_layout"
											url="/condensed/#"
                                            title="Boxed"
                                            icon="bl"
                                        />
                                    </ul>
                                )
                                }
                            </SlideDown>
                        </li>
                        <li className={(this.state.shouldExpand && this.state.clickedMenu === 'UIelements') ? "open active" : ""}>
                            <a href=""
                                onClick={(e) => {
                                    e.preventDefault()
                                    this.handleMenuExpan('UIelements')
                                }}
                            >
                                <span className="title">UI Elements</span>
                                <span
                                    className={(this.state.shouldExpand && this.state.clickedMenu === 'UIelements') ? "arrow open active" : " arrow"}
                                ></span>
                            </a>
                            <span className="icon-thumbnail"><i className="pg-icon">shapes</i></span>
                            <SlideDown className={'my-dropdown-slidedown'}>
                                {this.state.shouldExpand && this.state.clickedMenu === 'UIelements' && (
                                    <ul className="sub-menu">
                                        <SidebarItem
                                            // url="/condensed/color"
											url="/condensed/#"
                                            title="Color"
                                            icon="c"
                                        />
                                        <SidebarItem
                                            // url="/condensed/typography"
											url="/condensed/#"
                                            title="Typography"
                                            icon="t"
                                        />
                                        <SidebarItem
                                            // url="/condensed/icons"
											url="/condensed/#"
                                            title="Icons"
                                            icon="i"
                                        />
                                        <SidebarItem
                                            // url="/condensed/buttons"
											url="/condensed/#"
                                            title="Buttons"
                                            icon="b"
                                        />
                                        <SidebarItem
                                            // url="/condensed/notifications"
											url="/condensed/#"
                                            title="Notifications"
                                            icon="n"
                                        />
                                        <SidebarItem
                                            // url="/condensed/modals"
											url="/condensed/#"
                                            title="Modals"
                                            icon="m"
                                        />
                                        <SidebarItem
                                            // url="/condensed/progress"
											url="/condensed/#"
                                            title="Progress &amp; Activity"
                                            icon="pa"
                                        />
                                        <SidebarItem
                                            // url="/condensed/tabs_accordian"
											url="/condensed/#"
                                            title="Tabs &amp; Accordions"
                                            icon="ta"
                                        />
                                        <SidebarItem
                                            // url="/condensed/sliders"
											url="/condensed/#"
                                            title="Sliders"
                                            icon="s"
                                        />
                                        <SidebarItem
                                            // url="/condensed/tree_view"
											url="/condensed/#"
                                            title="Tree View"
                                            icon="tv"
                                        />
                                        <SidebarItem
                                            // url="/condensed/nestables"
											url="/condensed/#"
                                            title="Nestable"
                                            icon="ns"
                                        />
                                    </ul>
                                )
                                }
                            </SlideDown>
                        </li>
                        <li className={(this.state.shouldExpand && this.state.clickedMenu === 'Forms') ? "open active" : ""}>
                            <a href=""
                                onClick={(e) => {
                                    e.preventDefault()
                                    this.handleMenuExpan('Forms')
                                }}
                            >
                                <span className="title">Forms</span>
                                <span
                                    className={(this.state.shouldExpand && this.state.clickedMenu === 'Forms') ? "arrow open active" : " arrow"}
                                ></span>
                            </a>
                            <span className="icon-thumbnail"><i className="pg-icon">note</i></span>
                            <SlideDown className={'my-dropdown-slidedown'}>
                                {this.state.shouldExpand && this.state.clickedMenu === 'Forms' && (
                                    <ul className="sub-menu">
                                        <SidebarItem
                                            // url="/condensed/form_elements"
											url="/condensed/#"
                                            title="Form Elements"
                                            icon="fe"
                                        />
                                        <SidebarItem
                                            // url="/condensed/form_layouts"
											url="/condensed/#"
                                            title="Form Layouts"
                                            icon="fl"
                                        />
                                        <SidebarItem
                                            // url="/condensed/form_wizard"
											url="/condensed/#"
                                            title="Form Wizard"
                                            icon="fw"
                                        />
                                    </ul>
                                )
                                }
                            </SlideDown>
                        </li>
                        <SidebarItem
                            // url="/condensed/cards"
							url="/condensed/#"
                            title="Cards"
                            icon={<i className="pg-icon">card</i>}
                        />
                        <SidebarItem
                            // url="/condensed/views"
							url="/condensed/#"
                            title="Views"
                            icon={<i className="pg-icon">layout</i>}
                        />
                        <li className={(this.state.shouldExpand && this.state.clickedMenu === 'Tables') ? "open active" : ""}>
                            <a href=""
                                onClick={(e) => {
                                    e.preventDefault()
                                    this.handleMenuExpan('Tables')
                                }}
                            >
                                <span className="title">Tables</span>
                                <span
                                    className={(this.state.shouldExpand && this.state.clickedMenu === 'Tabl1es') ? "arrow open active" : " arrow"}
                                ></span>
                            </a>
                            <span className="icon-thumbnail"><i className="pg-icon">table</i></span>
                            <SlideDown className={'my-dropdown-slidedown'}>
                                {this.state.shouldExpand && this.state.clickedMenu === 'Tables' && (
                                    <ul className="sub-menu">
                                        <SidebarItem
                                            // url="/condensed/basic_tables"
											url="/condensed/#"
                                            title="Basic Tables"
                                            icon="bt"
                                        />
                                        <SidebarItem
                                            // url="/condensed/data_tables"
											url="/condensed/#"
                                            title="Data Tables"
                                            icon="dt"
                                        />
                                    </ul>
                                )
                                }
                            </SlideDown>
                        </li>
                        <li className={(this.state.shouldExpand && this.state.clickedMenu === 'Maps') ? "open active" : ""}>
                            <a href=""
                                onClick={(e) => {
                                    e.preventDefault()
                                    this.handleMenuExpan('Maps')
                                }}
                            >
                                <span className="title">Maps</span>
                                <span
                                    className={(this.state.shouldExpand && this.state.clickedMenu === 'Maps') ? "arrow open active" : " arrow"}
                                ></span>
                            </a>
                            <span className="icon-thumbnail"><i className="pg-icon">map</i></span>
                            <SlideDown className={'my-dropdown-slidedown'}>
                                {this.state.shouldExpand && this.state.clickedMenu === 'Maps' && (
                                    <ul className="sub-menu">
                                        <SidebarItem
                                            // url="/condensed/google_map"
											url="/condensed/#"
                                            title="Google Maps"
                                            icon="gm"
                                        />
                                    </ul>
                                )}
                            </SlideDown>
                        </li>
                        <SidebarItem
                            // url="/condensed/charts"
							url="/condensed/#"
                            title="Charts"
                            icon={<i className="pg-icon">chart</i>}
                        />
                        <li className={(this.state.shouldExpand && this.state.clickedMenu === 'Extra') ? "open active" : ""}>
                            <a href=""
                                onClick={(e) => {
                                    e.preventDefault()
                                    this.handleMenuExpan('Extra')
                                }}
                            >
                                <span className="title">Extra</span>
                                <span
                                    className={(this.state.shouldExpand && this.state.clickedMenu === 'Extra') ? "arrow open active" : " arrow"}
                                ></span>
                            </a>
                            <span className="icon-thumbnail"><i className="pg-icon">effects</i></span>
                            <SlideDown className={'my-dropdown-slidedown'}>
                                {this.state.shouldExpand && this.state.clickedMenu === 'Extra' && (
                                    <ul className="sub-menu">
                                        <SidebarItem
                                            // url="/condensed/extra/invoice"
											url="/condensed/#"
                                            title="Invoice"
                                            icon="in"
                                        />
                                        <SidebarItem
                                            // url="/condensed/extra/404"
											url="/condensed/#"
                                            title="404 Page"
                                            icon="pg"
                                        />
                                        <SidebarItem
                                            // url="/condensed/extra/500"
											url="/condensed/#"
                                            title="500 Page"
                                            icon="pg"
                                        />
                                        <SidebarItem
                                            // url="/condensed/extra/blank_template"
											url="/condensed/#"
                                            title="Blank Page"
                                            icon="bp"
                                        />
                                        <SidebarItem
                                            // url="/condensed/extra/login"
											url="/condensed/#"
                                            title="Login"
                                            icon="l"
                                        />
                                        <SidebarItem
                                            // url="/condensed/extra/register"
											url="/condensed/#"
                                            title="Register"
                                            icon="re"
                                        />
                                        <SidebarItem
                                            // url="/condensed/extra/lock_screen"
											url="/condensed/#"
                                            title="Lockscreen"
                                            icon="ls"
                                        />
                                        <SidebarItem
                                            // url="/condensed/extra/gallery"
											url="/condensed/#"
                                            title="Gallery"
                                            icon="gl"
                                        />
                                        <SidebarItem
                                            // url="/condensed/extra/timeline"
											url="/condensed/#"
                                            title="Timeline"
                                            icon="t"
                                        />
                                    </ul>
                                )
                                }
                            </SlideDown>
                        </li>
                        <li className={(this.state.shouldExpand && this.state.clickedMenu === 'MenuLevels') ? "open active" : ""}>
                            <a href=""
                                onClick={(e) => {
                                    e.preventDefault()
                                    this.handleMenuExpan('MenuLevels')
                                }}
                            >
                                <span className="title">Menu Levels</span>
                                <span
                                    className={(this.state.shouldExpand && this.state.clickedMenu === 'MenuLevels') ? "arrow open active" : " arrow"}
                                ></span>
                            </a>
                            <span className="icon-thumbnail"><i className="pg-icon">menu_level</i></span>
                            <SlideDown className={'my-dropdown-slidedown'}>

                                {this.state.shouldExpand && this.state.clickedMenu === 'MenuLevels' && (
                                    <ul className="sub-menu">
                                        <SidebarItem
                                            // url="/condensed/levelOne"
											url="/condensed/#"
                                            title="Level 1"
                                            icon="l1"
                                        />
                                        <li className={(this.state.shouldExpandNest && this.state.clickedMenu === 'MenuLevelsTwo') ? "open active" : ""}>
                                            <a href="#"
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    this.handleMenuExpanNest('MenuLevelsTwo')
                                                }}
                                            >
                                                <span className="title">Level 2</span>
                                                <span
                                                    className={(this.state.shouldExpandNest && this.state.clickedMenu === 'MenuLevels' && this.state.clickedMenuNest === 'MenuLevelsTwo') ? "arrow open active" : " arrow"}
                                                ></span>
                                            </a>
                                            <span className="icon-thumbnail">L2</span>
                                            <SlideDown className={'my-dropdown-slidedown'}>
                                                {this.state.shouldExpandNest && this.state.clickedMenuNest === 'MenuLevelsTwo' && (
                                                    <ul className="sub-menu">
                                                        <SidebarItem
                                                            // url="/condensed/submenu"
															url="/condensed/#"
                                                            title="Sub Menu"
                                                            icon="sm"
                                                        />
                                                        <SidebarItem
                                                            // url="/condensed/submenu"
															url="/condensed/#"
                                                            title="Sub Menu"
                                                            icon="sm"
                                                        />
                                                    </ul>
                                                )
                                                }
                                            </SlideDown>
                                        </li>
                                    </ul>
                                )
                                }

                            </SlideDown>
                        </li>
                        <li className="">
                            <a
                                href="https://docs.pages.revox.io/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <span className="title">Docs</span></a>
                            <span className="icon-thumbnail"><i className="pg-icon">flag</i></span>
                        </li>
                        <li className="m-b-40">
                            <a
                                href="http://changelog.pages.revox.io/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <span className="title">Changelog</span></a>
                            <span className="icon-thumbnail"><i className="pg-icon">clipboard</i></span>
                        </li>
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
                    <div className="clearfix"></div>
                </div>
            </nav>
        );
    }
}

// export default Component;

const mapStateToProps = state => {
    return {
        openState: state.QuickView.openMobileSideBar
    }
}
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Component);