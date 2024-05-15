import React from "react";

import CustomHeaderLayout from "../../shared/Layouts/WithoutHeader";
import HeaderComponent from "../../ui/Header/Component";
import ExtraGalleryWrapperComponent from "./Content";

const Component = ({ location }) => {
	const path = location.pathname;
	return (
		// <CustomHeaderLayout location={location}>
		<div
			className={
				path.includes("/executive") || path.includes("/casual")
					? "no-padding page-container"
					: "page-container"
			}
		>
			{/* START HEADER */}
			{/* <HeaderComponent location={location} /> */}
			{/* END HEADER */}
			{/* START PAGE CONTENT WRAPPER */}
			<ExtraGalleryWrapperComponent path={path} />
			{/* END PAGE CONTENT WRAPPER */}
		</div>
		// </CustomHeaderLayout>
	);
};

export default Component;
