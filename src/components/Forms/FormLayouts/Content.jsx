import React, { useState } from "react";
import { ValidatorForm } from "react-form-validator-core";
import TextValidator from "./FormValidation";
import WithoutMsgValidation from "./WithoutMsgValidation";

import PageContainer from "../../UIElements/Containers";
import PageBreadcrumb from "../../UIElements/Breadcrumb";
import Copyright from "../../ui/Footer/Copyright";

const content = ({ path }) => {
	const [firstName, setFirstName] = useState("");

	const [projectUrl, setProjectUrl] = useState("");
	const [projectName, setProjectName] = useState("");
	const [startingDate, setStartingDate] = useState("");
	const [website, setWebsite] = useState("");

	let changeFirstName = (firstName) => {
		setFirstName(firstName);
	};

	let handleFormSubmit = () => {
		//Call this function on form submit with no errors
	};

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
						<li className="breadcrumb-item active">Form layouts</li>
					</PageBreadcrumb>
					<div className="row">
						<div className="col-xl-6 col-lg-6 ">
							<div className="card card-transparent">
								<div className="card-header">
									<div className="card-title">Validation</div>
								</div>
								<div className="card-body">
									<h3>
										Showcase and guide users with a<br />
										better User Interface &amp; Experience.
									</h3>
									<p>
										Forms are one of the most important components
										<br /> when it comes to a dashboard. Recognizing that fact,
										users are
										<br /> able work in a maximum content width.
									</p>
									<br />
									<p className="small hint-text m-t-5">
										VIA senior product manager
										<br /> for UI/UX at REVOX
									</p>
									<button className="btn btn-primary btn-cons">More</button>
								</div>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 ">
							<div className="card">
								<div className="card-header ">
									<div className="card-title">Modern Layout.</div>
								</div>
								<div className="card-body">
									<h2 className="mw-80">Get started with your account.</h2>
									<p className="fs-16 mw-80 m-b-40">
										Find your people. Engage your customers. Build your brand.
										Do it all with Page's UI Framework Platform. Already have an
										account? <a href="#">Log in</a>
									</p>
									<ValidatorForm
										instantValidate={true}
										onSubmit={handleFormSubmit}
									>
										<div className="row clearfix">
											<div className="col-xl-6">
												<TextValidator
													onChange={(e) => changeFirstName(e.target.value)}
													name="firstName"
													value={firstName}
													validators={["required"]}
													errorMessages={["this field is required"]}
													className={"form-control"}
													label={"First name"}
													require="true"
												/>
											</div>
											<div className="col-xl-6">
												<div className="form-group form-group-default">
													<label>Last name</label>
													<input
														type="text"
														className="form-control"
														name="lastName"
														required=""
														aria-required="true"
													/>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-md-12">
												<div className="form-group form-group-default input-group">
													<div className="form-input-group">
														<label>Pages username</label>
														<input
															type="text"
															className="form-control"
															name="website"
															placeholder="http://pages-ui.com/projectname"
															required=""
															aria-required="true"
														/>
													</div>
													<div className="input-group-append ">
														<span className="input-group-text">@pages.com</span>
													</div>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-md-12">
												<div className="form-group form-group-default">
													<label>Password</label>
													<input
														type="password"
														className="form-control"
														name="password"
														placeholder="Minimum of 4 characters."
														required=""
														aria-required="true"
													/>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-md-12">
												<div className="form-group form-group-default">
													<label>Email</label>
													<input
														type="email"
														className="form-control"
														name="email"
														placeholder="example@address.com"
														required=""
														aria-required="true"
													/>
												</div>
											</div>
										</div>
										<div className="clearfix"></div>
										<div className="row m-t-25">
											<div className="col-xl-6 p-b-10">
												<p className="small-text hint-text">
													By clicking the "Get Started!" button, you are
													creating a Pages account, and you agree to Pages's
													<a href="#">Terms of Use</a> and{" "}
													<a href="#">Privacy Policy</a>.
												</p>
											</div>
											<div className="col-xl-6">
												<button
													aria-label=""
													className="btn btn-primary pull-right btn-lg btn-block"
													type="submit"
												>
													Get Started
												</button>
											</div>
										</div>
									</ValidatorForm>
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
					<div className="row m-t-10">
						<div className="col-xl-6 col-lg-6">
							<div className="card">
								<div className="card-header ">
									<div className="card-title">Separated form layouts</div>
								</div>
								<div className="card-body">
									<ValidatorForm
										instantValidate={true}
										onSubmit={handleFormSubmit}
									>
										<h3 className="mw-80">Contemporary and unique</h3>
										<p className="mw-80 m-b-25">
											Want it to be more Descriptive and User-Friendly, We Made
											it possible, Use Separated Form Layouts Structure to
											Presentation your Form Fields.
										</p>
										<p>Basic Information</p>
										<div className="form-group-attached">
											<WithoutMsgValidation
												onChange={(e) => setProjectUrl(e.target.value)}
												name="projectUrl"
												value={projectUrl}
												validators={[
													"required",
													"matchRegexp:^((https?|ftp|smtp):)?(www.)?[a-z0-9]+[a-z]+([a-zA-Z0-9#]+?)*$",
												]}
												errorMessages={[]}
												className={"form-control"}
												label={"Project Url"}
												require="true"
											/>
											<div className="row clearfix">
												<div className="col-md-6">
													<WithoutMsgValidation
														onChange={(e) => setProjectName(e.target.value)}
														name="projectName"
														value={projectName}
														validators={["required"]}
														errorMessages={[]}
														className={"form-control"}
														label={"Project name"}
														require="true"
													/>
												</div>
												<div className="col-md-6">
													<div className="form-group form-group-default">
														<label>Project Code</label>
														<input
															type="text"
															className="form-control"
															name="lastName"
															placeholder="6 digit code"
														/>
													</div>
												</div>
											</div>
										</div>
										<p className="m-t-10">Advanced Information</p>
										<div className="form-group-attached">
											<div className="form-group form-group-default">
												<label>
													Investor{" "}
													<i className="fa fa-info text-complete m-l-5"></i>
												</label>
												<input
													type="text"
													className="form-control"
													name="investor"
												/>
											</div>
											<div className="row clearfix">
												<div className="col-md-6">
													<WithoutMsgValidation
														onChange={(e) => setStartingDate(e.target.value)}
														name="projectName"
														value={startingDate}
														validators={["required"]}
														errorMessages={[]}
														className={"form-control"}
														label={"Starting date"}
														require="true"
													/>
												</div>
												<div className="col-md-6">
													<div className="form-group form-group-default">
														<label>Deadline</label>
														<input
															id="end-date"
															type="text"
															className="form-control date"
															name="endDate"
														/>
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-md-6">
													<WithoutMsgValidation
														onChange={(e) => setWebsite(e.target.value)}
														name="Website"
														value={website}
														validators={["required"]}
														errorMessages={[]}
														className={"form-control"}
														label={"Website"}
														require="true"
													/>
												</div>
												<div className="col-md-6">
													<div className="form-group form-group-default form-check-group d-flex align-items-center">
														<div className="form-check switch switch-lg success full-width right m-b-0">
															<input type="checkbox" id="switchSample" />
															<label htmlFor="switchSample">Availability</label>
														</div>
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-md-4">
													<div className="form-group form-group-default input-group">
														<div className="form-input-group">
															<label>Budget</label>
															<input
																type="text"
																className="form-control usd"
																required=""
																aria-required="true"
															/>
														</div>
														<div className="input-group-append ">
															<span className="input-group-text">USD</span>
														</div>
													</div>
												</div>
												<div className="col-md-4">
													<div className="form-group form-group-default input-group">
														<div className="form-input-group">
															<label>Profit</label>
															<input type="text" className="form-control usd" />
														</div>
														<div className="input-group-append ">
															<span className="input-group-text">USD</span>
														</div>
													</div>
												</div>
												<div className="col-md-4">
													<div className="form-group form-group-default input-group">
														<div className="form-input-group">
															<label>Revenue</label>
															<input type="text" className="form-control usd" />
														</div>
														<div className="input-group-append ">
															<span className="input-group-text">USD</span>
														</div>
													</div>
												</div>
											</div>
										</div>
										<br />
										<div className="row">
											<div className="col-8">
												<div className="form-check primary m-t-0">
													<input
														type="checkbox"
														value="1"
														id="checkbox-agree"
													/>
													<label htmlFor="checkbox-agree">
														I hereby certify that the information above is true
														and accurate
													</label>
												</div>
											</div>
											<div className="col-4">
												<button
													aria-label=""
													className="btn btn-primary pull-right"
													type="submit"
												>
													Create Droplet
												</button>
											</div>
										</div>
									</ValidatorForm>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-xlg-6">
							<div className="card">
								<div className="card-header ">
									<div className="card-title">Separated form layouts</div>
								</div>
								<div className="card-body">
									<div className="row">
										<div className="col-md-12">
											<h3 className="mw-80">
												Simple but not simpler, create a separate form layout.
												Best for settings pages.
											</h3>
											<p className="mw-80">
												Want it to be more Descriptive and User-Friendly, We
												Made it possible, Use Separated Form Layouts Structure
												to Presentation your Form Fields.
											</p>
											<br />
											<form
												id="form-work"
												className="form-horizontal"
												role="form"
												autoComplete="off"
												noValidate="novalidate"
											>
												<div className="form-group row">
													<label
														htmlFor="fname"
														className="required col-md-5 control-label"
														aria-required="true"
													>
														Metadata URL
													</label>
													<div className="col-md-7">
														<input
															type="text"
															className="form-control"
															id="fname"
															placeholder="https://..."
															name="name"
															required=""
															aria-required="true"
														/>
														<span className="help">
															The URL to your SAML Metadata XML file. It must be
															publicly accessible for Pages Framework to
															download and process.
														</span>
													</div>
												</div>
												<div className="form-group row">
													<label className="col-md-5 control-label">
														Formation
													</label>
													<div className="col-md-7">
														<div className="form-check form-check-inline success">
															<input
																type="radio"
																value="male"
																name="optionyes"
																id="male"
															/>
															<label htmlFor="male">Clustered</label>
														</div>
														<div className="form-check form-check-inline success">
															<input
																type="radio"
																checked="checked"
																value="female"
																onChange={() => {}}
																name="optionyes"
																id="female"
															/>
															<label htmlFor="female">Stacked</label>
														</div>
													</div>
												</div>
												<div className="form-group row">
													<label
														className="col-md-5 control-label required"
														aria-required="true"
													>
														Referral
													</label>
													<div className="col-md-7">
														<div className="row">
															<div className="col-md-8">
																<input
																	type="text"
																	className="form-control"
																	id="fname"
																	placeholder="http://kepler.app/?ref=companyname"
																	name="name"
																	required=""
																	aria-required="true"
																/>
																<span className="help">
																	Look for the referral person name in your
																	account xm
																	<code>Entity_ref=""</code> and paste it above
																</span>
															</div>
															<div className="col-md-4 sm-m-t-10">
																<input
																	type="text"
																	placeholder="XXXX-XX"
																	className="form-control"
																/>
																<span className="help">
																	6 digit referral code provided
																</span>
															</div>
														</div>
													</div>
												</div>
												<div className="form-group row">
													<label
														htmlFor="position"
														className="col-md-5 control-label"
													>
														Test Configuration
													</label>
													<div className="col-md-7">
														<button
															aria-label=""
															className="btn btn-default m-b-10 m-t-5"
														>
															Test with my project
														</button>
														<span className="help">
															Test if your pages UI framework works with your
															backend project correctly and adaptively
														</span>
													</div>
												</div>
												<div className="form-group row">
													<label
														htmlFor="name"
														className="col-md-5 control-label"
													>
														Project SSL Scope
													</label>
													<div className="col-md-7">
														<textarea
															className="form-control"
															rows="4"
															id="name"
															placeholder="Briefly Describe your reports"
														></textarea>
														<span className="help">
															Add report descriptions and analysis data report
															to provide a SSL certificate function clearer
														</span>
													</div>
												</div>
												<br />
												<div className="row">
													<div className="col-md-6">
														<p className="small-text hint-text">
															Note: changes may take some time to apply. Wait a
															day and then try to verify again{" "}
														</p>
													</div>
													<div className="col-md-6">
														<button
															aria-label=""
															className="btn btn-success pull-right"
															type="submit"
														>
															Save Changes
														</button>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
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
