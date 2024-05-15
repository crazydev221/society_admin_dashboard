import React from "react";

import CalendarBasicWrapperComponent from "./Content";

const Component = () => {
	return (
		<div
			className={
				path.includes("/executive") || path.includes("/casual")
					? "no-padding page-container"
					: "page-container"
			}
		>
			{/* START PAGE CONTENT WRAPPER */}
			<CalendarBasicWrapperComponent />
			{/* END PAGE CONTENT WRAPPER */}
		</div>
	);
};

export default Component;
