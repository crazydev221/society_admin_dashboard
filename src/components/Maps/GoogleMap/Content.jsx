import React from "react";

import MapContainer from "./MapContainer";
import Copyright from "../../ui/Footer/Copyright";

const content = ({ path }) => {
	return (
		<div className="page-content-wrapper ">
			{/* START PAGE CONTENT */}
			<div
				className="content full-width full-height overlay-footer"
				style={{
					paddingTop: path.includes("/executive")
						? "170px"
						: path.includes("/casual")
						? "100px"
						: "60px",
				}}
			>
				<div className="map-controls">
					<div className="pull-left">
						<div
							className="btn-group-vertical"
							data-toggle="buttons-radio"
						></div>
					</div>
				</div>
				<div className="map-container full-width full-height">
					<div
						id="google-map"
						className="full-width full-height"
						style={{ position: "relative", overflow: "hidden" }}
					>
						<MapContainer />
					</div>
				</div>
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
