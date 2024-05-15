import React, { useEffect, useState } from "react";
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { ValidatorForm } from "react-form-validator-core";
import { toast } from "react-toastify";

import LoginFieldValidate from "./LoginFieldValidate";
import AuthActions from "../../../redux/actions/AuthAction";
import "./blank_page_style.css";

const content = ({ history }) => {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();
	const isAuthenticated = useSelector(state => state.AuthReducer.isAuthenticated);

	useEffect(() => {
		if (isAuthenticated) {
            history.push("/");
        }
	}, [isAuthenticated, history]);

	let handleLogin = () => {
		dispatch(AuthActions.login(userName, password))
			.then(() => {
				toast.success('Admin Login Successfully!');
				history.push('/');
			})
			.catch((err) => {
				console.error('Login failure:', err);
				toast.error('Admin Login failure!');
			});
	};

	return (
		<div className="login-wrapper ">
			<div className="bg-pic">
				<div className="bg-caption pull-bottom sm-pull-bottom text-white p-l-20 m-b-20">
					<h1 className="semi-bold text-white">
						Start the with your Admin Account
					</h1>
					<p className="small">
						Our Content Management System for Non profit Organization - "The Purple Society". Everything is just a starting point.
						©2019-2020 All Rights Reserved. Pages® is a registered "The Purple Society".
					</p>
				</div>
			</div>
			<div className="login-container bg-white">
				<div className="p-l-50 p-r-50 p-t-50 m-t-30 sm-p-l-15 sm-p-r-15 sm-p-t-40">
					<img
						src="/assets/img/logo-48x48_c.png"
						alt="logo"
						data-src="/assets/img/logo-48x48_c.png"
						data-src-retina="/assets/img/logo-48x48_c.png"
						width="48"
						height="48"
					/>
					<h2 className="p-t-25">
						Get Started <br /> <b> Werpurple Admin Page </b>
					</h2>
					<p className="mw-80 m-t-5">Sign in to your admin account</p>

					<ValidatorForm
						instantValidate={true}
						onSubmit={handleLogin}
						className="p-t-15"
					>
						<LoginFieldValidate
							onChange={(e) => setUserName(e.target.value)}
							name="username"
							value={userName}
							validators={["required"]}
							errorMessages={[]}
							className={"form-control"}
							label={"Login"}
							placeholder="User Name"
							require="true"
						/>

						<LoginFieldValidate
							onChange={(e) => setPassword(e.target.value)}
							name="password"
							value={password}
							validators={["required"]}
							errorMessages={[]}
							className={"form-control"}
							label={"Password"}
							type={"password"}
							placeholder="Credentials"
							require="true"
						/>

						<div className="row">
							<div className="col-md-6 no-padding sm-p-l-10">
								<div className="form-check">
									<input type="checkbox" value="1" id="checkbox1" />
									<label htmlFor="checkbox1">Remember me</label>
								</div>
							</div>
							<div className="col-md-6 d-flex align-items-center justify-content-end">
								<button
									aria-label=""
									className="btn btn-primary btn-lg m-t-10"
									type="submit"
								>
									Sign in
								</button>
							</div>
						</div>
						{/* <div className="m-b-5 m-t-30">
							<a href="#" className="normal">
								Lost your password?
							</a>
						</div>
						<div>
							<a href="#" className="normal">
								Not a member yet? Signup now.
							</a>
						</div> */}
					</ValidatorForm>

					<div className="pull-bottom sm-pull-bottom">
						<div className="m-b-30 p-r-80 sm-m-t-20 sm-p-r-15 sm-p-b-20 clearfix">
							<div className="col-sm-9 no-padding m-t-10">
								<p className="small-text normal hint-text">
									©2019-2020 All Rights Reserved. Pages® is a registered
									trademark of Revox Ltd.
									<a href="">Cookie Policy</a>,{" "}
									<a href=""> Privacy and Terms</a>.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default withRouter(content);
