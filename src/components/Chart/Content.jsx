import React, { useState } from "react";

import RealTimeWidget from "../ui/widget/ServerLoadWidget";
import StackedBarChart from "../ui/widget/BarDoubleStackWidget";
import AreaWithSlider from "../ui/widget/AreaWithSliderWidget";
import LineChart from "../ui/widget/GraphWidget";
import StackedAreaChart from "../ui/widget/StackedAreaWidget";
import LineChartArea from "../ui/widget/LineChartAreaWidget";
import PieGraphWidget from "../ui/widget/PieGraphWidget";
import PageContainer from "../UIElements/Containers";
import PageBreadcrumb from "../UIElements/Breadcrumb";
import Copyright from "../ui/Footer/Copyright";
import TabMobileDropDown from "../UIElements/TabsAndAccordion/TabMobileSelect";

import { data } from "../ui/widget/data/LineChart";
import { tabSelectOne, tabSelectTwo } from "./DropdownData";

const content = ({ path }) => {
	const [firstSectionNavTabs, setFirstSectionNavTabs] = useState([
		true,
		false,
		false,
	]);
	const [secondSectionNavTabs, setSecondSectionNavTabs] = useState([
		true,
		false,
		false,
	]);

	return (
		<div className="page-content-wrapper ">
			{/* START PAGE CONTENT */}
			<div
				className="content "
				style={{
					paddingTop:
						path && path.includes("/executive")
							? "170px"
							: path.includes("/casual")
							? "100px"
							: "60px",
				}}
			>
				<PageContainer
					className={
						path.includes("/executive") || path.includes("/casual")
							? "container"
							: " "
					}
				>
					<PageBreadcrumb>
						<li className="breadcrumb-item">
							<a href="#">Home</a>
						</li>
						<li className="breadcrumb-item active">Charts</li>
					</PageBreadcrumb>
					<div className="card card-transparent">
						<div className="card-header  ">
							<div className="card-title">Rickshaw Charts</div>
						</div>
						<div className="card-body d-flex flex-wrap">
							<div className="col-lg-4 no-padding">
								<div className="p-r-30">
									<h3>Talk less, show more</h3>
									<br />
									<p>
										Rickshaw is a JavaScript toolkit for creating interactive
										time series graphs.Rickshaw provides the elements you need
										to create interactive graphs: renderers, legends, hovers,
										range selectors, etc. You put the pieces together.
									</p>
									<br />
									<div className="inline">
										<p className="small hint-text">
											Rickshaw: JavaScript toolkit for creating interactive time
											series graphs.
											<br />{" "}
											<a href="https://tech.shutterstock.com/rickshaw/">
												View the official documentation
											</a>
										</p>
									</div>
								</div>
							</div>
							<div className="col-lg-8 sm-no-padding">
								<div className="card card-transparent">
									<div className="card-header  ">
										<div className="card-controls">
											<ul>
												<li>
													<a
														href="#"
														className="card-collapse"
														data-toggle="collapse"
													>
														<i className="pg-arrow_maximize"></i>
													</a>
												</li>
												<li>
													<a
														href="#"
														className="card-refresh"
														data-toggle="refresh"
													>
														<i className="pg-refresh_new"></i>
													</a>
												</li>
												<li>
													<a
														href="#"
														className="card-close"
														data-toggle="close"
													>
														<i className="pg-close"></i>
													</a>
												</li>
											</ul>
										</div>
									</div>
									<div className="card-body">
										<div className="card card-borderless card-transparent">
											<ul
												id="tabs-rickshaw"
												className="nav nav-tabs nav-tabs-linetriangle d-none d-md-flex d-lg-flex d-xl-flex"
												data-init-reponsive-tabs="dropdownfx"
											>
												<li className="nav-item">
													<a
														href=""
														className={`${
															firstSectionNavTabs[0] ? "active" : ""
														}`}
														data-toggle="tab"
														data-target="#tab-rickshaw-realtime"
														role="tab"
														aria-selected={`${
															firstSectionNavTabs[0] ? "true" : "false"
														}`}
														onClick={(e) => {
															e.preventDefault();
															setFirstSectionNavTabs([true, false, false]);
														}}
													>
														<span>Realtime Charts</span>
													</a>
												</li>
												<li className="nav-item">
													<a
														href=""
														className={`${
															firstSectionNavTabs[1] ? "active" : ""
														}`}
														data-toggle="tab"
														data-target="#tab-rickshaw-bars"
														role="tab"
														aria-selected={`${
															firstSectionNavTabs[1] ? "true" : "false"
														}`}
														onClick={(e) => {
															e.preventDefault();
															setFirstSectionNavTabs([false, true, false]);
														}}
													>
														<span>Stacked Bar Charts</span>
													</a>
												</li>
												<li className="nav-item">
													<a
														href=""
														className={`${
															firstSectionNavTabs[2] ? "active" : ""
														}`}
														data-toggle="tab"
														data-target="#tab-rickshaw-slider"
														role="tab"
														aria-selected={`${
															firstSectionNavTabs[2] ? "true" : "false"
														}`}
														onClick={(e) => {
															e.preventDefault();
															setFirstSectionNavTabs([false, false, true]);
														}}
													>
														<span>Area Chart with Slider</span>
													</a>
												</li>
											</ul>
											<div className="nav-tab-dropdown cs-wrapper full-width d-lg-none d-xl-none d-md-none">
												<TabMobileDropDown
													defaultValue={tabSelectOne[0]}
													options={tabSelectOne}
													onChange={(value) => {
														if (value.value === "0") {
															return setFirstSectionNavTabs([
																true,
																false,
																false,
															]);
														}
														if (value.value === "1") {
															return setFirstSectionNavTabs([
																false,
																true,
																false,
															]);
														}
														if (value.value === "2") {
															return setFirstSectionNavTabs([
																false,
																false,
																true,
															]);
														}
													}}
												/>
											</div>

											<div className="tab-content no-padding bg-transparent">
												{/* START Real Time Bar Graph */}
												<div
													className={`tab-pane relative ${
														firstSectionNavTabs[0] ? "active" : ""
													}`}
													id="tab-rickshaw-realtime"
												>
													<div id="rickshaw-realtime_y_axis" className="">
														<svg
															className="rickshaw_graph y_axis"
															width="40"
															height="550"
															style={{ position: "relative" }}
														>
															<g className="y_ticks plain">
																<g
																	className="tick major"
																	transform="translate(0,500)"
																	style={{ opacity: "1" }}
																>
																	<line x2="4" y2="0"></line>
																	<text
																		x="7"
																		y="0"
																		dy=".32em"
																		style={{ textAnchor: "start" }}
																	></text>
																</g>
																<g
																	className="tick major"
																	transform="translate(0,409.60060879318905)"
																	style={{ opacity: "1" }}
																>
																	<line x2="4" y2="0"></line>
																	<text
																		x="7"
																		y="0"
																		dy=".32em"
																		style={{ textAnchor: "start" }}
																	>
																		50
																	</text>
																</g>
																<g
																	className="tick major"
																	transform="translate(0,319.20121758637816)"
																	style={{ opacity: "1" }}
																>
																	<line x2="4" y2="0"></line>
																	<text
																		x="7"
																		y="0"
																		dy=".32em"
																		style={{ textAnchor: "start" }}
																	>
																		100
																	</text>
																</g>
																<g
																	className="tick major"
																	transform="translate(0,228.80182637956727)"
																	style={{ opacity: "1" }}
																>
																	<line x2="4" y2="0"></line>
																	<text
																		x="7"
																		y="0"
																		dy=".32em"
																		style={{ textAnchor: "start" }}
																	>
																		150
																	</text>
																</g>
																<g
																	className="tick major"
																	transform="translate(0,138.40243517275633)"
																	style={{ opacity: "1" }}
																>
																	<line x2="4" y2="0"></line>
																	<text
																		x="7"
																		y="0"
																		dy=".32em"
																		style={{ textAnchor: "start" }}
																	>
																		200
																	</text>
																</g>
																<g
																	className="tick major"
																	transform="translate(0,48.00304396594538)"
																	style={{ opacity: "1" }}
																>
																	<line x2="4" y2="0"></line>
																	<text
																		x="7"
																		y="0"
																		dy=".32em"
																		style={{ textAnchor: "start" }}
																	>
																		250
																	</text>
																</g>
																<path
																	className="domain"
																	d="M4,0H0V500H4"
																></path>
															</g>
														</svg>
													</div>
													<div
														id="rickshaw-realtime"
														className="rickshaw-chart rickshaw_graph"
													>
														<RealTimeWidget />
													</div>
												</div>
												{/* END Real Time Bar Graph */}
												<div
													className={`tab-pane ${
														firstSectionNavTabs[1] ? "active" : ""
													}`}
													id="tab-rickshaw-bars"
												>
													{/* START Stacked Bar Graph */}
													<div
														id="rickshaw-stacked-bars"
														className="rickshaw-chart rickshaw_graph"
													>
														<StackedBarChart color={["#0F8EFA", "#E0E0E0"]} />
													</div>
													{/* END Stacked Bar Graph */}
												</div>
												<div
													className={`tab-pane ${
														firstSectionNavTabs[2] ? "active" : ""
													}`}
													id="tab-rickshaw-slider"
												>
													<AreaWithSlider />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<PageContainer className=" bg-white">
						<div className="card card-transparent">
							<div className="card-header  ">
								<div className="card-title">NVD3 Charts</div>
								<div className="card-controls">
									<ul>
										<li>
											<a
												href=""
												className="card-collapse"
												data-toggle="collapse"
												onClick={(e) => {
													e.preventDefault();
												}}
											>
												<i className="pg-arrow_maximize"></i>
											</a>
										</li>
										<li>
											<a
												href=""
												className="card-refresh"
												data-toggle="refresh"
												onClick={(e) => {
													e.preventDefault();
												}}
											>
												<i className="pg-refresh_new"></i>
											</a>
										</li>
										<li>
											<a
												href=""
												className="card-close"
												data-toggle="close"
												onClick={(e) => {
													e.preventDefault();
												}}
											>
												<i className="pg-icon">close</i>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="card-body d-flex flex-wrap">
								<div className="col-lg-4 no-padding">
									<div className="p-r-30">
										<h3>Talk less, show more</h3>
										<br />
										<p>
											This project is an attempt to build re-usable charts and
											chart components for d3.js without taking away the power
											that d3.js gives you. This is a very young collection of
											components, with the goal of keeping these components very
											customizeable, staying away from your standard cookie
											cutter solutions.
										</p>
										<br />
										<div className="inline">
											<p className="small hint-text">
												NVD3: Re-usable charts for d3.js
												<br />{" "}
												<a href="http://nvd3.org/examples/index.html">
													View the officialdocumentation
												</a>
											</p>
										</div>
									</div>
								</div>
								<div className="col-lg-8 sm-no-padding">
									<ul
										id="tabs-nvd3"
										className="nav nav-tabs nav-tabs-linetriangle d-none d-md-flex d-lg-flex d-xl-flex"
										data-init-reponsive-tabs="dropdownfx"
									>
										<li className="nav-item">
											<a
												href=""
												className={`${secondSectionNavTabs[0] ? "active" : ""}`}
												data-toggle="tab"
												data-target="#tab-nvd3-line"
												role="tab"
												onClick={(e) => {
													e.preventDefault();
													setSecondSectionNavTabs([true, false, false]);
												}}
											>
												<span>Line Chart</span>
											</a>
										</li>
										<li className="nav-item">
											<a
												href=""
												className={`${secondSectionNavTabs[1] ? "active" : ""}`}
												data-toggle="tab"
												data-target="#tab-nvd3-area"
												role="tab"
												onClick={(e) => {
													e.preventDefault();
													setSecondSectionNavTabs([false, true, false]);
												}}
											>
												<span>Stacked Area Charts</span>
											</a>
										</li>
										<li className="nav-item">
											<a
												href=""
												className={`${secondSectionNavTabs[2] ? "active" : ""}`}
												data-toggle="tab"
												data-target="#tab-nvd3-line2"
												role="tab"
												onClick={(e) => {
													e.preventDefault();
													setSecondSectionNavTabs([false, false, true]);
												}}
											>
												<span>Line Charts with area</span>
											</a>
										</li>
									</ul>
									<div className="nav-tab-dropdown cs-wrapper full-width d-lg-none d-xl-none d-md-none">
										<TabMobileDropDown
											defaultValue={tabSelectTwo[0]}
											options={tabSelectTwo}
											onChange={(value) => {
												if (value.value === "0") {
													return setSecondSectionNavTabs([true, false, false]);
												}
												if (value.value === "1") {
													return setSecondSectionNavTabs([false, true, false]);
												}
												if (value.value === "2") {
													return setSecondSectionNavTabs([false, false, true]);
												}
											}}
										/>
									</div>
									<div className="tab-content no-padding">
										<div
											className={`tab-pane ${
												secondSectionNavTabs[0] ? "active" : ""
											}`}
											id="tab-nvd3-line"
										>
											<div
												id="nvd3-line"
												className="line-chart m-t-30 text-center"
												data-x-grid="false"
											>
												<LineChart
													legend={{
														data: ["Series 1", "Series 2", "Series 3"],
													}}
												/>
											</div>
										</div>
										<div
											className={`tab-pane ${
												secondSectionNavTabs[1] ? "active" : ""
											}`}
											id="tab-nvd3-area"
										>
											<div
												id="nvd3-area"
												className="line-chart m-t-30 text-center"
												data-x-grid="false"
											>
												<StackedAreaChart />
											</div>
										</div>
										<div
											className={`tab-pane ${
												secondSectionNavTabs[2] ? "active" : ""
											}`}
											id="tab-nvd3-line2"
										>
											<div
												id="nvd3-line2"
												className="line-chart"
												data-line-color="master"
												data-area-color="master"
												data-point-color="white"
												data-x-grid="false"
												data-points="true"
												data-stroke-width="1"
											>
												<LineChartArea
													colors={["#C9C9C9"]}
													showLegend={true}
													showTooltip={true}
													showX={true}
													showY={true}
													dataX={data[0].values}
													series={[
														{
															name: "6 months sales",
															data: data[1].values,
															type: "line",
															areaStyle: {},
														},
													]}
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</PageContainer>

					<PageContainer
						className={
							path.includes("/executive") || path.includes("/casual")
								? "container"
								: " "
						}
					>
						<div className="card card-transparent">
							<div className="card-header  ">
								<div className="card-title">Sparkline Charts</div>
							</div>
							<div className="card-body d-flex flex-wrap">
								<div className="col-lg-4 no-padding">
									<div className="p-r-30">
										<h3>Lighter but Smarter</h3>
										<br />
										<p>
											This jQuery plugin generates sparklines (small inline
											charts) directly in the browser using data supplied either
											inline in the HTML, or via javascript. The plugin is
											compatible with most modern browsers and has been tested
											with Firefox 2+, Safari 3+, Opera 9, Google Chrome and
											Internet Explorer 6, 7, 8, 9 &amp; 10 as well as iOS and
											Android.
										</p>
										<br />
										<div className="inline">
											<p className="small hint-text">
												Sparkline
												<br />
												<a href="http://omnipotent.net/jquery.sparkline/#s-about">
													View the officialdocumentation
												</a>
											</p>
										</div>
									</div>
								</div>
								<div className="col-lg-8">
									<div className="card card-transparent">
										<div className="card-header  ">
											<div className="card-controls">
												<ul>
													<li>
														<a
															href="#"
															className="card-collapse"
															data-toggle="collapse"
														>
															<i className="pg-arrow_maximize"></i>
														</a>
													</li>
													<li>
														<a
															href="#"
															className="card-refresh"
															data-toggle="refresh"
														>
															<i className="pg-refresh_new"></i>
														</a>
													</li>
													<li>
														<a
															href="#"
															className="card-close"
															data-toggle="close"
														>
															<i className="pg-close"></i>
														</a>
													</li>
												</ul>
											</div>
										</div>
										<div className="card-body">
											<div className="row">
												<div className="col-sm-6 text-center">
													<div
														id="sparkline-line"
														className="sparkline-chart m-t-40"
													>
														<LineChartArea
															colors={["#F1C599", "#F7EBC3"]}
															showLegend={false}
															showTooltip={true}
															showX={false}
															showY={false}
															dataX={data[2].values}
															series={[
																{
																	data: data[3].values,
																	type: "line",
																	stack: "chart",
																	areaStyle: {},
																},
																{
																	data: data[5].values,
																	type: "line",
																	stack: "chart",
																	areaStyle: {},
																},
															]}
														/>
													</div>
												</div>
												<div className="col-sm-6 text-center">
													<div
														id="sparkline-pie"
														className="sparkline-chart m-t-40"
													>
														<PieGraphWidget />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</PageContainer>
				</PageContainer>
			</div>
			{/* START COPYRIGHT */}
			<Copyright
				year={"2014"}
				brand={"REVOX"}
				reserved={"All rights reserved."}
				terms={"Terms of use"}
				policy={"Privacy Policy"}
			/>
			{/* END COPYRIGHT */}
			{/* END PAGE CONTENT */}
		</div>
	);
};

export default content;
