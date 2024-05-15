import React from "react";

import DefaultLayout from "../../shared/Layouts/Default";
import Extra404PageWrapperComponent from "./Content";

const Component = ({ location }) => {
	let path = location.pathname;
	return <Extra404PageWrapperComponent path={path} />;
};

export default Component;
