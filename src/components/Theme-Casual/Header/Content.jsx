import { element } from "prop-types";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import QuickViewAction from "../../../redux/actions/QuickViewAction";

const Content = ({ location, inboxHeader = null, openMobileToggle }) => {
	const path = location.pathname;
	const customDropdown =
		location.pathname === "/email" || location.pathname === "/compose_email" ? (
			<a
				href="#"
				className="toggle-secondary-sidebar"
				onClick={() =>
					inboxHeader !== null ? inboxHeader((prevState) => !prevState) : null
				}
			>
				<span className="d-flex align-items-center">
					Inbox <span className="text-info">(12)</span>{" "}
					<span className="pg-icon">drop_down</span>
				</span>
			</a>
		) : null;
	const [shouldShowProfile, setShouldShowProfile] = useState(false);
	const [showUiDropdown, setShowUiDropdown] = useState(false);
	const [showExtraDropdown, setShowExtraDropdown] = useState(false);
	const [showCalDropdown, setShowCalDropdown] = useState(false);
	const [showFormDropdown, setShowFormDropdown] = useState(false);

	const dispatch = useDispatch();
	const {
		toggleQuickViewOpen,
		toggleMobileSideBarOpen,
		toggleMobileSideBarClose,
	} = QuickViewAction;

	const [mobileSidebarToggle, setMobileSidebarToggle] = useState(false);

	React.useEffect(() => {
		openMobileToggle(mobileSidebarToggle)
		if (mobileSidebarToggle) {
			dispatch(toggleMobileSideBarOpen());
		} else {
			dispatch(toggleMobileSideBarClose());
		}
	}, [mobileSidebarToggle]);

	if (mobileSidebarToggle) {
		document.body.classList.remove("dashboard");
		document.body.classList.add(
			"mac",
			"desktop",
			"mobile",
			"js-focus-visible",
			"sidebar-open",
			"sidebar-visible"
		);
	} else {
		document.body.classList.remove(
			"mac",
			"desktop",
			"mobile",
			"js-focus-visible",
			"sidebar-open",
			"sidebar-visible"
		);
		document.body.classList.add("dashboard");
	}

	function expand(item){
		console.log(item);
		if(item=="calendar"){
			setShowCalDropdown(!showCalDropdown);
			setShowFormDropdown(false);
			setShowUiDropdown(false);
		}
		else if(item=="ui_elements"){
			setShowCalDropdown(false);
			setShowFormDropdown(false);
			setShowUiDropdown(!showUiDropdown);
		}
		else if(item=="forms"){
			setShowCalDropdown(false);
			setShowFormDropdown(!showFormDropdown);
			setShowUiDropdown(false);
		}
	}
	
	return (
		<React.Fragment>
			<div className="d-flex flex-column w-100">
				<div className="d-flex casual-bg w-100 mx-auto justify-content-between p-t-10 p-b-10 p-r-20 p-l-20 align-items-center">
					<a
						href="#"
						className="btn-link toggle-sidebar d-lg-none pg-icon btn-icon-link"
						data-toggle="sidebar"
						onClick={() => {
							setMobileSidebarToggle((prevState) => !prevState);
						}}
					>
						menu
					</a>

					<div className="">
						{customDropdown}
						<div
							className="brand inline no-border d-sm-inline-block"
							style={{ width: "100px" }}
						>
							<img
								src="/assets/img/logo_white_2x.png"
								alt="logo"
								data-src="/assets/img/logo.png"
								data-src-retina="/assets/img/logo_2x.png"
								width="78"
								height="22"
							/>
						</div>
						<ul className="d-lg-inline-block d-none notification-list no-margin d-lg-inline-block no-style p-l-20 p-r-20">
							<li className="p-r-5 inline">
								<div className="dropdown">
									<a
										href="#"
										id="notification-center"
										className="header-icon btn-icon-link text-white"
										data-toggle="dropdown"
										onClick={(e) => e.preventDefault()}
									>
										<i className="pg-icon">world</i>
										<span className="bubble"></span>
									</a>

									<div
										className="dropdown-menu notification-toggle "
										role="menu"
										aria-labelledby="notification-center"
									>
										<div className="notification-panel">
											<div
												className="scroll-wrapper notification-body scrollable"
												style={{ position: "relative" }}
											>
												<div
													className="notification-body scrollable scroll-content"
													style={{
														height: "auto",
														marginBottom: "0px",
														marginRight: "0px",
													}}
												>
													<div className="notification-item unread clearfix d-none">
														<div className="heading open">
															<a
																href="#"
																className="text-complete pull-left d-flex align-items-center"
															>
																<i className="pg-icon m-r-10">map</i>
																<span className="bold">Carrot Design</span>
																<span className="fs-12 m-l-10">
																	David Nester
																</span>
															</a>
															<div className="pull-right">
																<div className="thumbnail-wrapper d16 circular inline m-t-15 m-r-10 toggle-more-details">
																	<div>
																		<i className="pg-icon">chevron_down</i>
																	</div>
																</div>
																<span className=" time">few sec ago</span>
															</div>
															<div className="more-details">
																<div className="more-details-inner">
																	<h5 className="semi-bold fs-16">
																		“Apple’s Motivation - Innovation
																		<br />
																		distinguishes between <br />A leader and a
																		follower.”
																	</h5>
																	<p className="small hint-text">
																		Commented on john Smiths wall.
																		<br /> via pages framework.
																	</p>
																</div>
															</div>
														</div>
														<div
															className="option"
															data-toggle="tooltip"
															data-placement="left"
															title=""
															data-original-title="mark as read"
														>
															<a href="#" className="mark"></a>
														</div>
													</div>
													<div className="notification-item clearfix">
														<div className="heading">
															<a href="#" className="text-danger pull-left">
																<i className="pg-icon m-r-10">alert_warning</i>
																<span className="bold">98% Server Load</span>
																<span className="fs-12 m-l-10">
																	Take Action
																</span>
															</a>
															<span className="pull-right time">
																2 mins ago
															</span>
														</div>

														<div className="option">
															<a href="#" className="mark"></a>
														</div>
													</div>

													<div className="notification-item clearfix d-none">
														<div className="heading">
															<a href="#" className="text-warning pull-left">
																<i className="pg-icon m-r-10">alert_warning</i>
																<span className="bold">
																	Warning Notification
																</span>
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
																<img
																	width="30"
																	height="30"
																	data-src-retina="/assets/img/profiles/1x.jpg"
																	data-src="/assets/img/profiles/1.jpg"
																	alt=""
																	src="/assets/img/profiles/1.jpg"
																/>
															</div>
															<a href="#" className="text-complete pull-left">
																<span className="bold">Revox Design Labs</span>
																<span className="fs-12 m-l-10">Owners</span>
															</a>
															<span className="pull-right time">11:00pm</span>
														</div>

														<div
															className="option"
															data-toggle="tooltip"
															data-placement="left"
															title=""
															data-original-title="mark as read"
														>
															<a href="#" className="mark"></a>
														</div>
													</div>
												</div>
												<div className="scroll-element scroll-x">
													<div className="scroll-element_outer">
														<div className="scroll-element_size"></div>
														<div className="scroll-element_track"></div>
														<div className="scroll-bar"></div>
													</div>
												</div>
												<div className="scroll-element scroll-y">
													<div className="scroll-element_outer">
														<div className="scroll-element_size"></div>
														<div className="scroll-element_track"></div>
														<div className="scroll-bar"></div>
													</div>
												</div>
											</div>

											<div className="notification-footer text-center">
												<a href="#" className="">
													Read all notifications
												</a>
												<a
													data-toggle="refresh"
													className="portlet-refresh text-black pull-right"
													href="#"
												>
													<i className="pg-refresh_new"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li className="p-r-5 inline">
								<a href="#" className="header-icon btn-icon-link">
									<i className="pg-icon text-white">link_alt</i>
								</a>
							</li>
							<li className="p-r-5 inline">
								<a href="#" className="header-icon btn-icon-link">
									<i className="pg-icon text-white">grid_alt</i>
								</a>
							</li>
						</ul>

						<a
							href="#"
							id="headerSearchInputCasual"
							className="search-link d-lg-inline-block d-none text-white"
							data-toggle="search"
						>
							<i className="pg-icon">search</i>Type anywhere to{" "}
							<span className="bold">search</span>
						</a>
					</div>
					<div className="d-flex align-items-center">
						<div
							className={`dropdown pull-right d-lg-block d-none ${shouldShowProfile ? "show" : ""
								}`}
						>
							<button
								className="profile-dropdown-toggle"
								type="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded={shouldShowProfile ? "true" : "false"}
								aria-label="profile dropdown"
							>
								<span className="thumbnail-wrapper d32 circular inline">
									<img
										src="/assets/img/profiles/avatar.jpg"
										alt=""
										data-src="/assets/img/profiles/avatar.jpg"
										data-src-retina="/assets/img/profiles/avatar_small2x.jpg"
										width="32"
										height="32"
										onClick={() =>
											setShouldShowProfile((prevState) => !prevState)
										}
									/>
								</span>
							</button>
							<div
								style={{ width: "fit-content" }}
								className={`dropdown-menu dropdown-menu-right profile-dropdown ${shouldShowProfile ? "show" : ""
									}`}
								role="menu"
							>
								<a href="#" className="dropdown-item">
									<span>
										Signed in as <br />
										<b>David Aunsberg</b>
									</span>
								</a>
								<div className="dropdown-divider"></div>
								<a href="#" className="dropdown-item">
									Your Profile
								</a>
								<a href="#" className="dropdown-item">
									Your Activity
								</a>
								<a href="#" className="dropdown-item">
									Your Archive
								</a>
								<div className="dropdown-divider"></div>
								<a href="#" className="dropdown-item">
									Features
								</a>
								<a href="#" className="dropdown-item">
									Help
								</a>
								<a href="#" className="dropdown-item">
									Settings
								</a>
								<a href="#" className="dropdown-item">
									Logout
								</a>
								<div className="dropdown-divider"></div>
								<span className="dropdown-item fs-12 hint-text">
									Last edited by David
									<br />
									on Friday at 5:27PM
								</span>
							</div>
						</div>

						<a
							href="#"
							onClick={() => dispatch(toggleQuickViewOpen())}
							className="header-icon m-l-5 sm-no-margin d-inline-block "
							data-toggle="quickview"
							data-toggle-element="#quickview"
						>
							<i className="pg-icon btn-icon-link text-white">menu_add</i>
						</a>
					</div>
				</div>
				<div className="horizontal-app-menu">
					<div className="container">
						<div className={mobileSidebarToggle ? `menu-bar  header-sm-height open p-t-10` : `menu-bar  casual-menu header-sm-height p-t-10`} data-pages-init="horizontal-menu" data-hide-extra-li="4" >
							<a
								href="#"
								className="btn-link header-icon toggle-sidebar d-lg-none"
								data-toggle="horizontal-menu"
								onClick={() => setMobileSidebarToggle(false)}
							>
								<i className="pg-icon">close</i>
							</a>
							<ul>
								<li className={
									path.includes("/Dashboard") || path === '/casual' ? "menu-link active" : "menu-link"
								}
								>
									<a href="/casual">Dashboard</a>
								</li>
								<li
									className={
										path.includes("/social") ? "menu-link active" : "menu-link"
									}
								>
									<a href="/casual/#">
										<span className="title">Social</span>
									</a>
								</li>
								<li
									className={
										showCalDropdown
											? "open opening menu-link"
											: path.includes("calender")
												? "menu-link active"
												: "menu-link"
									}
								>
									<a
										href="#"
										onClick={() => expand("calendar")}
									>
										<span className="title">Calendar</span>
										<span className=" arrow"></span>
									</a>
									<ul className="">
										<li className="">
											<a href="#">Basic</a>
										</li>
										<li className="">
											<a href="#">Languages</a>
										</li>
										<li className="">
											<a href="#">Month</a>
										</li>
										<li className="">
											<a href="#">Lazy load</a>
										</li>
										<li className="">
											<a
												href="https://docs.pages.revox.io/apps/calendar"
												rel="noreferrer"
												target="_blank"
											>
												Documentation
											</a>
										</li>
									</ul>
								</li>
								<li
									className={
										showUiDropdown
											? "open opening"
											: path.includes("/color") ||
												path.includes("/typography") ||
												path.includes("/icons") ||
												path.includes("/buttons") ||
												path.includes("/notifications") ||
												path.includes("/modals") ||
												path.includes("/progress") ||
												path.includes("/tabs") ||
												path.includes("/sliders") ||
												path.includes("/tree") ||
												path.includes("/nestables")
												? "menu-link active"
												: "menu-link"
									}
								>
									<a
										href="#"
										onClick={() => expand("ui_elements")}
									>
										<span className="title">UI Elements</span>
										<span className=" arrow"></span>
									</a>
									<ul>
										<li className="">
											<a href="/casual/#">Color</a>
										</li>
										<li className="">
											<a href="/casual/#">Typography</a>
										</li>
										<li className="">
											<a href="/casual/#">Icons</a>
										</li>
										<li className="">
											<a href="/casual/#">Buttons</a>
										</li>
										<li className="">
											<a href="/casual/#">Notifications</a>
										</li>
										<li className="">
											<a href="/casual/#">Modals</a>
										</li>
										<li className="">
											<a href="/casual/#">Progress &amp; Activity</a>
										</li>
										<li className="">
											<a href="/casual/#">Tabs &amp; Accordions</a>
										</li>
										<li className="">
											<a href="/casual/#">Sliders</a>
										</li>
										<li className="">
											<a href="/casual/#">Tree View</a>
										</li>
										<li className="">
											<a href="/casual/#">Nestable</a>
										</li>
									</ul>
									<div
										className="ghost-nav-dropdown"
										style={{ visibility: "hidden" }}
									></div>
								</li>
								<li
									className={
										showFormDropdown
											? " open opening menu-link"
											: path.includes("/form")
												? "menu-link active"
												: "menu-link"
									}
								>
									<a
										href="#"
										onClick={() => expand("forms")}
									>
										<span className="title">Forms</span>
										<span className=" arrow"></span>
									</a>
									<ul className="">
										<li className="">
											<a href="/casual/#">Form Elements</a>
										</li>
										<li className="">
											<a href="/casual/#">Form Layouts</a>
										</li>
										<li className="">
											<a href="/casual/#">Form Wizard</a>
										</li>
									</ul>
								</li>
								<li
									className={
										path.includes("/builder") ? "menu-link active" : "menu-link"
									}
								>
									<a href="/casual/#">
										<span className="title">Builder</span>
									</a>
								</li>
								<li
									className={
										path.includes("/cards") ? "menu-link active" : "menu-link"
									}
								>
									<a href="/casual/#">
										<span className="title">Cards</span>
									</a>
								</li>
								<li
									className={
										path.includes("/views") ? "menu-link active" : "menu-link"
									}
								>
									<a href="/casual/#">
										<span className="title">Views</span>
									</a>
								</li>
								<li
									className={
										path.includes("/charts") ? "menu-link active" : "menu-link"
									}
								>
									<a href="/casual/#">
										<span className="title">Charts</span>
									</a>
								</li>
								<li
									className={
										showExtraDropdown
											? " open opening more menu-link"
											: "menu-link more"
									}
								>
									<a
										href="#"
										onClick={() => setShowExtraDropdown(!showExtraDropdown)}
									>
										<span className="title d-flex">
											<i className="pg-icon">more_horizontal</i>
										</span>
									</a>
									<ul>
										<li>
											<a href="">
												<span className="title">Tables</span>
												<span className=" arrow"></span>
											</a>
											<ul className="sub-menu">
												<li className="">
													<a href="/casual/#">Basic Tables</a>
												</li>
												<li className="">
													<a href="/casual/#">Data Tables</a>
												</li>
											</ul>
										</li>
										<li>
											<a href="">
												<span className="title">Maps</span>
												<span className=" arrow"></span>
											</a>
											<ul className="sub-menu">
												<li className="">
													<a href="/casual/#">Google Maps</a>
												</li>
												<li className="">
													<a href="/casual/#">Vector Maps</a>
												</li>
											</ul>
										</li>

										<li>
											<a href="">
												<span className="title">Extra</span>
												<span className=" arrow"></span>
											</a>
											<ul className="sub-menu">
												<li className="">
													<a href="/casual/#">Invoice</a>
												</li>
												<li className="">
													<a href="/casual/#">404 Page</a>
												</li>
												<li className="">
													<a href="/casual/#">500 Page</a>
												</li>
												<li className="">
													<a href="/casual/#">Blank Page</a>
												</li>
												<li className="">
													<a href="/casual/#">Login</a>
												</li>
												<li className="">
													<a href="/casual/#">Register</a>
												</li>
												<li className="">
													<a href="/casual/#">Lockscreen</a>
												</li>
												<li className="">
													<a href="/casual/#">Gallery</a>
												</li>
												<li className="">
													<a href="/casual/#">Timeline</a>
												</li>
											</ul>
										</li>
									</ul>
								</li>
							</ul>
							<a href="#"
								className="search-link d-flex justify-content-between align-items-center d-lg-none"
								data-toggle="search"
								id="headerSearchInput"
							>
								Tap here to search
								<i className="pg-search float-right"></i>
								<i className="pg-icon">search</i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Content;
