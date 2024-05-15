import React from "react";

import CalendarMonthWrapperComponent from "./Content";

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
			<CalendarMonthWrapperComponent path={path} />
			{/* END PAGE CONTENT WRAPPER */}
		</div>
	);
};

export default Component;
